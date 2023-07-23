import { Link } from "react-router-dom";
import "./cart.css";
import Clients from "../../../shared/Clients";
import Product from "../product/Product";
import CheckoutPage from "../checkout/Checkout";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { apiDomain } from "../../../utils/utilsDomain";
import { FaTrash } from "react-icons/fa";
import CartFallback from "./FallBack";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  // Function to get the cart items using Axios
  const getCartItems = async () => {
    try {
      const response = await axios.get(`${apiDomain}/cart`);
      setCartItems(response.data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  useEffect(() => {
    getCartItems();
    console.log(cartItems);
  }, []);

  const handleProceedToCheckout = () => {
    navigate("/checkout");
  };

  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return totalPrice.toFixed(2);
  };

  return (
    <>
      {/* Display cart items */}
      {/* {cartItems.map((item) => (
        <div key={item.cart_id}>
          <p>{item.name}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${item.price}</p>
          <button onClick={() => handleRemoveItem(item.cart_id)}>Remove</button>
        </div>
      ))} */}

      <div className="cart">
        <div>
          {

            !cartItems[0] && <CartFallback />
          }
          {
            cartItems.map((item) => (
              <div key={item.cart_id} className="flex  gap-10 cursor-pointer select align-middle">
                <div className=" rounded-[5px]  h-[10rem]">
                  <img
                    className="rounded-[10px] h-full object-contain mb-4"
                    src="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Group-1269-935x701.jpg"
                    alt="product"
                  />
                </div>

                <div>
                  <h3 className="font-bold  hover:text-red-500 transition-all duration-300">
                    {item.Name}
                  </h3>
                  <p className="relative inline-block group font bold">
                    <span className="font-bold ">${item.Price}</span>
                  </p>
                  <br />
                  <button className="bg-[gray] px-3 py-1 w-full flex items-center gap-2" onClick={() => handleRemoveItem(item.cart_id)}> <FaTrash />Remove</button>
                </div>
              </div>
            ))
          }

        </div>
        <div>
          <h3 className="font-bold mb-4 hover:text-red-500 cursor-pointer">
            cart summarry
          </h3>
          <hr />
          <div>
            <p className="mb-4 font bold">Total Price:</p>
            <p className="font-bold mb-4">$0.000</p>
            {/* Use the handleProceedToCheckout function to navigate to the CheckoutPage */}
            <button
              className="bg-black text-white px-8 py-2 rounded mb-4"
              onClick={handleProceedToCheckout}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Cart;
