import React, { useState, useEffect } from 'react';
import axios from 'axios'; // You may need to install this package if not already installed

// Mock data for demonstration purposes (replace with actual API calls to your backend)
const mockOrders = [
  {
    id: 1,
    customerName: 'John Doe',
    totalAmount: 100,
    status: 'Pending',
  },
  {
    id: 2,
    customerName: 'Jane Smith',
    totalAmount: 150,
    status: 'Shipped',
  },
  // Add more mock orders as needed
];

const OrdersTable = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from the backend (replace the URL with your actual API endpoint)
    // For demonstration, we are using mock data here
    // You should use axios or your preferred library for API calls
    // axios.get('your_api_endpoint')
    //   .then((response) => {
    //     setOrders(response.data);
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching orders:', error);
    //   });

    // For demonstration, we are using mock data
    setOrders(mockOrders);
  }, []);

  // Function to handle canceling an order
  const handleCancelOrder = (orderId) => {
    // Send a request to your backend to cancel the order
    // axios.put(`your_api_endpoint/${orderId}/cancel`)
    //   .then((response) => {
    //     // Update the orders state with the updated order status
    //     // setOrders([...]);
    //   })
    //   .catch((error) => {
    //     console.error('Error canceling order:', error);
    //   });

    // For demonstration, update the order status in the mock data
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: 'Canceled' } : order
      )
    );
  };

  return (
    <div className='container  px-4'>
    
      <h2 className="text-xl font-bold mb-4">Orders Table</h2>
      <table className="table-auto w-full border">
        <thead>
          <tr className="px-4 py-2 bg-gray-200  border p-6">

            <th className="px- py-2 bg-gray-100 border">Order ID</th>
            <th className="px-4 py-2 bg-gray-100 border">Name</th>
            <th className="px-4 py-2 bg-gray-100 border">Total Amount</th>
            <th className="px-4 py-2 bg-gray-100 border">Status</th>
            <th className="px-4 py-2 bg-gray-100 border">Actions</th>

          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-t">
              <td className="px-4 py-2 border">{order.id}</td>
              <td className="px-4 py-2 border">{order.customerName}</td>
              <td className="px-4 py-2 border">${order.totalAmount}</td>
              <td className={`px-4 py-2 border ${order.status === 'Canceled' ? 'text-red-600' : 'text-green-600'}`}>{order.status}</td>
              <td className="px-4 py-2 border">
                {order.status !== 'Canceled' && (
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
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
  );
};

export default OrdersTable;
