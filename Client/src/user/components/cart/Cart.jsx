import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { apiDomain } from "../../../utils/utilsDomain";
import { FaTrash } from "react-icons/fa";
import CartFallback from "./FallBack";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Context } from "../../../context/Context";
import Payment from "../payment/Payment";


const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const { setCartItems: updateItemsCount } = useContext(Context);
  const [totalPrice, setTotalPrice] = useState(0);

  // Function to get the cart items using Axios
  const getCartItems = async () => {
    try {
      const response = await axios.get(`${apiDomain}/cart`);
      setCartItems(response.data);
      updateItemsCount(response.data)
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  useEffect(() => {
    getCartItems();
    console.log(cartItems);
  }, []);






  const handleRemoveItem = async (cartItemId) => {
    try {
      // Send a DELETE request to the server to remove the item from the cart
      await axios.delete(`${apiDomain}/cart/${cartItemId}`);

      // Refresh the cart items by calling the getCartItems function again
      getCartItems();
      // Get the name of the removed item to show it in the notification
      const removedItem = cartItems.find((item) => item.cart_id === cartItemId);

      // Show the success notification

      toast.success(`${removedItem.Name} has been removed from the cart.`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  useEffect(() => {
    // Calculate the total price whenever cartItems change
    const calculateTotalPrice = () => {
      console.log(cartItems)
      const totalPrice = cartItems.reduce(
        (sum, item) => sum + (item.Quantity * item.Price || 0), // Use optional chaining to safely access item.price
        0
      );
      return totalPrice;
    };

    // Call the calculateTotalPrice function and update the totalPrice state
    setTotalPrice(calculateTotalPrice());
  }, [cartItems]);

  return (
    <>
      <ToastContainer />


      <div className="cart sm:flex justify-around p-4">
        <div className="flex flex-col gap-4">
          {!cartItems[0] && <CartFallback />}
          {cartItems.map((item) => (
            <div key={item.cart_id} className="flex gap-10 cursor-pointer select align-middle">
              <div className="rounded-[5px] h-[10rem]">
                <img
                  className="rounded-[10px] h-full object-contain mb-4"
                  src={item.ImageLink}
                  alt="product"
                />
              </div>


              <div>
                <h3 className="font-bold hover:text-red-500 transition-all duration-300">
                  {item.Name}
                </h3>
                <p className="relative inline-block group font-bold">
                  <span className="font-bold ">${item.Price}</span>
                </p>
                <br />
                <button className="bg-[gray] px-3 py-1 w-fit flex items-center gap-2" onClick={() => handleRemoveItem(item.cart_id)}>
                  <FaTrash /> Remove
                </button>

              </div>
            </div>
          ))}
        </div>
        <div>
          <h3 className="font-bold mb-4 hover:text-red-500 cursor-pointer">
            Cart Summary
          </h3>
          <hr />
          <div>
            <p className="mb-4 font-bold">Total Price:</p>
            <p className="font-bold mb-4">$ {totalPrice.toFixed(2)}</p>
            {/* Use the handleProceedToCheckout function to navigate to the CheckoutPage */}
            
            <Payment cartItems={cartItems} />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Cart;
