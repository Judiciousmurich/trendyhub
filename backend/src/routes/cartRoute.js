import express from 'express';
import {
  getCart,
  getCartById,
  createCart,
  updateCart,
  deleteCart,
} from '../controllers/cartController.js';

const cartRoutes = (app) => {
  app.route('/cart')
    .get(getCart)
    .post(createCart);

  app.route('/cart/:id')
    .get(getCartById)
    .put(updateCart)
    .delete(deleteCart);
};

export default cartRoutes;
