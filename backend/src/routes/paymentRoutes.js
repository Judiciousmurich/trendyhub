import express from 'express';
import {
  getPayments,
  getPaymentById,
  createPayment,
  updatePayment,
  deletePayment,
} from '../controllers/paymentController.js';

const paymentRoutes = (app) => {
  app.route('/payments')
    .get(getPayments)
    .post(createPayment);

  app.route('/payments/:id')
    .get(getPaymentById)
    .put(updatePayment)
    .delete(deletePayment);
};

export default paymentRoutes;
