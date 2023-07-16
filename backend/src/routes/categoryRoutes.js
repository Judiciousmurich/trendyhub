import express from 'express';
import {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} from '../controllers/categoryController.js';

const categoryRoutes = (app) => {
  app.route('/categories')
    .get(getCategories)
    .post(createCategory);

  app.route('/categories/:id')
    .get(getCategoryById)
    .put(updateCategory)
    .delete(deleteCategory);
};

export default categoryRoutes;
