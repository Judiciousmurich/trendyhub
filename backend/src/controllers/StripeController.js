import sql from "mssql";
import config from "../config/config.js";
import Stripe from "stripe";

const stripe = Stripe(
  "sk_test_51NY1zQB5esMYnVgSagXEu6F3a2Gggs5mTJVvNmy7iCmOPGDk8vG5jfjHxHUuoocc4A2ZO6xmShf1xTppDV7dYq9200EOJDau4F"
);
const client = "http://localhost:5173/";

export const stripeCheckout = async (req, res) => {
  const customer = await stripe.customers.create({
    metadata: {
      userID: req.body.userID,
      cart: JSON.stringify(req.body.cartItems),
    },
  });

  const line_items = req.body.cartItems.map((item) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.Name,
          images: [item.ImageLink],
          description: item.Description,
          // quantity: item.quantity,
          metadata: {
            id: item.ID,
          },
        },
        unit_amount: item.Price * 100,
      },
      quantity: item.Quantity,
    };
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["US", "CA", "KE"],
    },
    phone_number_collection: {
      enabled: true,
    },
    customer: customer.id,
    line_items,
    mode: "payment",
    success_url: `${client}checkout`,
    cancel_url: `${client}cart`,
  });

  res.send({ url: session.url });
};

const createOrder = async (customer, data) => {
  console.log(data);
  console.log(customer);
  try {
    const item = JSON.parse(customer.metadata.cart);
    // console.log(data)
    // console.log(customer);
    const status = "pending";
    const pool = await sql.connect(config.sql);
    await pool
      .request()
      .input("paymentIntent", sql.VarChar(), data.payment_intent)
      .input("productName", sql.VarChar(), item[0].Name)
      .input("productID", sql.Int, item[0].ID)
      .input("quantity", sql.Int, item[0].Quantity)
      .input(
        "shippingAddress",
        sql.VarChar(),
        data.customer_details.address.country
      )
      .input("totalAmount", sql.Int, data.amount_total / 100)
      .input("email", sql.VarChar, data.customer_details.email)
      .input("date", sql.DateTime, new Date())
      .input("city", sql.VarChar, data.customer_details.address.city)
      .input("phone", sql.VarChar, data.customer_details.phone)
      .input("user_id", sql.Int, customer.metadata.userID)
      .input("status", sql.VarChar, status)
      .query(
        "INSERT INTO Payment (paymentIntent, productName,productID, quantity, shippingAddress,totalAmount, email,date,city,phone,user_id, status) VALUES (@paymentIntent,@productName,@productID,  @quantity, @shippingAddress, @totalAmount, @email, @date,@city,@phone,@user_id, @status)"
      );
  } catch (error) {
    console.error("Error creating order:", error);
  }
};
//webhooks
// This is your Stripe CLI webhook secret for testing your endpoint locally.
let endpointSecret;
// endpointSecret = "whsec_113d78c5575576a5ad51e213337c7b108083c7039052f6f737ebe0689bc7cbc0";

export const webhookHandler = (request, response) => {
  const sig = request.headers["stripe-signature"];
  console.log("judy");

  let data;
  let eventType;
  if (endpointSecret) {
    console.log("josh");
    let event;

    try {
      event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
      console.log("verification success");
    } catch (err) {
      response.status(400).send(`Webhook Error: ${err.message}`);
      console.log(err);
      return;
    }
  } else {
    data = request.body.data.object;
    console.log("Reading");
    eventType = request.body.type;
  }

  // Handle the event
  if (eventType === "checkout.session.completed") {
    console.log("executing chechkout suces");
    stripe.customers
      .retrieve(data.customer)
      .then((customer) => {
        // const item = JSON.parse(customer.metadata.cart)
        // console.log(...item)
        // console.log(item[0].name)
        createOrder(customer, data);
        // console.log(data)
        // console.log(customer)
      })
      .catch((err) => console.log(err.message));
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send().end();
};
