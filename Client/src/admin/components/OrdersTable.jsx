import React, { useState, useEffect } from 'react';
import axios from 'axios'; // You may need to install this package if not already installed
import { apiDomain } from '../../utils/utilsDomain';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OrdersTable = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${apiDomain}/transaction`);
      setOrders(response.data); // Pass the response data to setOrders
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // Function to handle canceling an order
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
    <div className='container  px-4'>
      <h2 className="text-xl font-bold mb-4">Orders Table</h2>
      <table className="table-auto w-full border">
        {/* Table headers */}
        <thead>
          <tr className="px-4 py-2 bg-gray-200  border p-6">
            <th className="px- py-2 bg-gray-100 border">Order ID</th>
            <th className="px-4 py-2 bg-gray-100 border">User_ID</th>
            <th className="px-4 py-2 bg-gray-100 border">Name</th>
            <th className="px-4 py-2 bg-gray-100 border">Total Amount</th>
            <th className="px-4 py-2 bg-gray-100 border">Quantity</th>
            <th className="px-4 py-2 bg-gray-100 border">Email</th>
            <th className="px-4 py-2 bg-gray-100 border">Phone</th>
            <th className="px-4 py-2 bg-gray-100 border">Status</th>
            <th className="px-4 py-2 bg-gray-100 border">Actions</th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border w-full">
              <td className="px-4 py-2 border">{order.id}</td>
              <td className="px-4 py-2 border">{order.user_id}</td>
              <td className="px-4 py-2 border">{order.productName}</td>
              <td className="px-4 py-2 border">${order.totalAmount}</td>
              <td className="px-4 py-2 border">{order.quantity}</td>
              <td className="px-4 py-2 border">{order.email}</td>
              <td className="px-4 py-2 border">{order.phone}</td>
              <td className={`px-4 py-2 border ${order.status === 'Canceled' ? 'text-red-600' : 'text-green-600'}`}>
                {order.status}
              </td>
              <td className="px-4 py-2 border">
                {order.status !== 'Canceled' && (
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white px-4 rounded"
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
      {/* ToastContainer for displaying toast notifications */}
      <ToastContainer />
    </div>
  );
};

export default OrdersTable;
