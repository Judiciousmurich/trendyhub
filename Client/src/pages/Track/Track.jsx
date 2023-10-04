import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiDomain } from '../../utils/utilsDomain';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Track = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${apiDomain}/transaction`);
      setOrders(response.data); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleCancelOrder = async (order_id) => {
    try {
      await axios.delete(`${apiDomain}/transaction/${order_id}`);

      // Remove the deleted order from the orders state
      setOrders((prevOrders) => prevOrders.filter((order) => order.id !== order_id));

      toast.success('Order Cancelled successfully', {
        position: 'top-right',
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-[#e2e2e2] w-screen p-16  mb-8 ">
        <i className="flex flex-col items-center w-full">
          <Link to="/" className=" text-[#666666]">
            Home / Track
          </Link>
          <h1 className="font-bold text-4xl ">Track Order</h1>
        </i>
      </div>
      <div className="container  px-4">
        <h2 className="text-xl font-bold mb-4">Orders Table</h2>
        <table className="table-auto w-full border mb-10">
          <thead>
            <tr className="px-4 py-2 bg-gray-200  border ">
              <th className="px- py-2 text-left bg-gray-100 border">Order ID</th>
              <th className="px-4 py-2 text-left bg-gray-100 border">Product</th>
              <th className="px-4 py-2 text-left bg-gray-100 border">Email</th>
              <th className="px-4 py-2 text-left bg-gray-100 border"> Order Status</th>
              <th className="px-4 py-2 text-left bg-gray-100 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border w-full">
                <td className="px-4 py-2 border">{order.id}</td>
                <td className="px-4 py-2 border">{order.productName}</td>
                <td className="px-4 py-2 border">{order.email}</td>
                <td className={`px-4 py-2 border ${order.status === 'Canceled' ? 'text-red-600' : 'text-green-600'}`}>
                  {order.status}
                </td>
                <td className="px-4 py-2 border">
                  {order.status !== 'Canceled' && (
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white   px-4 rounded"
                      onClick={() => handleCancelOrder(order.id)}
                    >
                      Cancel Order
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     
      <ToastContainer />
      <hr />
    </>
  );
};

export default Track;
