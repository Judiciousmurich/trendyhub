import express from 'express';
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productControllers.js';

const productRoutes = (app) => {
  app.route('/products')
    .get(getProducts)
    .post(createProduct);

  app.route('/products/:id')
    .get(getProductById)
    .put(updateProduct)
    .delete(deleteProduct);
};

export default productRoutes;
