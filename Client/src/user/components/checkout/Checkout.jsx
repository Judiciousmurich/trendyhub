import React, { useState } from 'react';
import { RiCheckboxCircleLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Clients from '../../../shared/Clients';

const Checkout = () => {
  const [shoppingFrequency, setShoppingFrequency] = useState('');

  const handlePaymentSuccess = () => {
    toast.success('Payment Successful', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  const handleFrequencyChange = (event) => {
    setShoppingFrequency(event.target.value);
  };

  return (
    <>
    {/* <div className="bg-[#e2e2e2] w-screen p-16  mt-2 ">
        <i className="flex flex-col items-center w-full">
          <Link to="/" className=" text-[#666666]">Home / Checkout</Link>
          <h1 className="font-bold text-4xl ">Checkout</h1>
        </i>
      </div> */}
    <div className="flex flex-col items-center">
      <RiCheckboxCircleLine size={80} className="text-green-500 my-4" />
      <h1 className="font-bold text-4xl tracking-wide text-center ">Payment Successful</h1>
      <div className="mt-4">
        <p className="text-center text-1xl font-bold mb-8">How often do you shop with us?</p>
        <div className="flex justify-center items-center mb-10">
          <label className="mr-4 ">
            <input
              type="radio"
              name="shoppingFrequency" className='gap-4'
              value="First Time"
              checked={shoppingFrequency === 'First Time'}
              onChange={handleFrequencyChange}
            />
            First Time
          </label>
          <label className="mr-4 ">
            <input
              type="radio"
              name="shoppingFrequency"
              value="Occasionally"
              checked={shoppingFrequency === 'Occasionally'}
              onChange={handleFrequencyChange}
            />
            Occasionally
          </label>
          <label>
            <input
              type="radio"
              name="shoppingFrequency"
              value="Regularly"
              checked={shoppingFrequency === 'Regularly'}
              onChange={handleFrequencyChange}
            />
            Regularly
          </label>
        </div>
        {shoppingFrequency && (
          <p className="text-center text-gray-600 font-bold">
            {shoppingFrequency}{' '}
            {shoppingFrequency === 'First Time' ? '🎉' : shoppingFrequency === 'Occasionally' ? '🙂' : '😊'}
          </p>
        )}
      </div>
      {/* ToastContainer for displaying toast notifications */}
      <ToastContainer />
    </div>
    <hr />
    </>
  );
};

export default Checkout;
