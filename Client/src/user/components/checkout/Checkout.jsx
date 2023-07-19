import React, { useState } from "react";
import Clients from "../../../shared/Clients";

const CheckoutPage = () => {
  // Sample checkout data (you can replace this with your actual data)
  const checkoutItems = [
    { id: 1, name: "Product 1", price: 10, quantity: 2 },
    { id: 2, name: "Product 2", price: 20, quantity: 1 },
    // Add more checkout items as needed
  ];

  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [shippingAddress, setShippingAddress] = useState({
    name: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
  });

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleShippingAddressChange = (e) => {
    setShippingAddress({
      ...shippingAddress,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
    <div className="mx-auto">
      <h1 className="text-2xl font-bold mb-4 ">Checkout</h1>
      
      {/* Checkout items table */}
      <div className="max-w-md mx-auto">
      </div>


      {/* Shipping Address */}
      <div className="mt-8 m-6 w-[30%]  ">
        <h2 className="text-xl font-bold mb-2">Shipping Address</h2>
        <div className="">
          <label>Name</label>
          <input
            type="text" 
            name="name"
            value={shippingAddress.name}
            onChange={handleShippingAddressChange}
            className="border px-4 py-2 w-full "
          />
        </div>
        <div>
          <label>Address Line 1</label>
          <input
            type="text"
            name="addressLine1"
            value={shippingAddress.addressLine1}
            onChange={handleShippingAddressChange}
            className="border px-4 py-2 w-full"
          />
        </div>
        <div>
          <label>Address Line 2</label>
          <input
            type="text"
            name="addressLine2"
            value={shippingAddress.addressLine2}
            onChange={handleShippingAddressChange}
            className="border px-4 py-2 w-full "
          />
        </div>
        <div>
          <label>City</label>
          <input
            type="text"
            name="city"
            value={shippingAddress.city}
            onChange={handleShippingAddressChange}
            className="border px-4 py-2 w-full"
          />
        </div>
        <div>
          <label>State</label>
          <input
            type="text"
            name="state"
            value={shippingAddress.state}
            onChange={handleShippingAddressChange}
            className="border px-4 py-2 w-full "
          />
        </div>
        <div>
          <label>Postal Code</label>
          <input
            type="text"
            name="postalCode"
            value={shippingAddress.postalCode}
            onChange={handleShippingAddressChange}
            className="border px-4 py-2 w-full"
          />
        </div>
      </div>

      
      {/* Payment Method */}
      <div className="mt-8 ">
        <h2 className="text-xl font-bold mb-2 m-4 ">Payment Method</h2>
        <div className="gap-4 m-4 font-bold ">
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="creditCard"
              checked={paymentMethod === "creditCard"}
              onChange={handlePaymentMethodChange}
            />
            Credit Card
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod" 
              value="paypal"
              checked={paymentMethod === "paypal"}
              onChange={handlePaymentMethodChange}
            />
            PayPal
          </label>
        </div>
      </div>

      {/* Add the 'Place Order' button or any other necessary elements */}
  
    </div>
        <Clients/>
        </>

  );
};

export default CheckoutPage;
