import express from 'express';
import {
  getOrderItems,
  getOrderItemById,
  createOrderItem,
  updateOrderItem,
  deleteOrderItem,
} from '../controllers/orderItemsControllers.js';

const orderItemRoutes = (app) => {
  app.route('/order-items')
    .get(getOrderItems)
    .post(createOrderItem);

  app.route('/order-items/:id')
    .get(getOrderItemById)
    .put(updateOrderItem)
    .delete(deleteOrderItem);
};

export default orderItemRoutes;
