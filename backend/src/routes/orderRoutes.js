import express from 'express';
import {
  getOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
} from '../controllers/ordersControllers.js';

const orderRoutes = (app) => {
  app.route('/orders')
    .get(getOrders)
    .post(createOrder);

  app.route('/orders/:id')
    .get(getOrderById)
    .put(updateOrder)
    .delete(deleteOrder);
};

export default orderRoutes;
