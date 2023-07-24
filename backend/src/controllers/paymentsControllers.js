import sql from 'mssql';
import config from '../config/config.js';

// Get all payments
export const getPayments = async (req, res) => {
  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request().query('SELECT * FROM Payments');
    res.status(200).json(result.recordset);
  } catch (error) {
    res.status(500).json({ error: `An error occurred while retrieving payments... ${error.message}` });
  } finally {
    // sql.close();
  }
};

// Get a single payment by ID
export const getPaymentById = async (req, res) => {
  const paymentId = req.params.id;

  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request()
      .input('paymentId', sql.Int, paymentId)
      .query('SELECT * FROM Payments WHERE ID = @paymentId');

    if (!result.recordset[0]) {
      res.status(404).json({ message: 'Payment not found' });
    } else {
      res.status(200).json(result.recordset[0]);
    }
  } catch (error) {
    res.status(500).json({ error: `An error occurred while retrieving the payment... ${error.message}` });
  } finally {
    // sql.close();
  }
};

// Create a new payment
export const createPayment = async (req, res) => {
  const { OrderID, Amount, PaymentDate } = req.body;

  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request()
      .input('OrderID', sql.Int, OrderID)
      .input('Amount', sql.Decimal, Amount)
      .input('PaymentDate', sql.Date, PaymentDate)
      .query('INSERT INTO Payments (OrderID, Amount, PaymentDate) VALUES (@OrderID, @Amount, @PaymentDate)');

    res.status(201).json({ message: 'Payment created successfully' });
  } catch (error) {
    res.status(500).json({ error: `An error occurred while creating the payment... ${error.message}` });
  } finally {
    // sql.close();
  }
};

// Update a payment
export const updatePayment = async (req, res) => {
  const paymentId = req.params.id;
  const { OrderID, Amount, PaymentDate } = req.body;

  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request()
      .input('paymentId', sql.Int, paymentId)
      .input('OrderID', sql.Int, OrderID)
      .input('Amount', sql.Decimal, Amount)
      .input('PaymentDate', sql.Date, PaymentDate)
      .query('UPDATE Payments SET OrderID = @OrderID, Amount = @Amount, PaymentDate = @PaymentDate WHERE ID = @paymentId');

    res.status(200).json({ message: 'Payment updated successfully' });
  } catch (error) {
    res.status(500).json({ error: `An error occurred while updating the payment... ${error.message}` });
  } finally {
    // sql.close();
  }
};

// Delete a payment
export const deletePayment = async (req, res) => {
  try {
    const paymentId = req.params.id;
    const pool = await sql.connect(config.sql);
    const result = await pool.request()
      .input('paymentId', sql.Int, paymentId)
      .query('DELETE FROM Payments WHERE ID = @paymentId');

    if (result.rowsAffected[0] === 0) {
      res.status(404).json({ message: 'Payment not found' });
    } else {
      res.status(200).json({ message: 'Payment deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: `An error occurred while deleting the payment... ${error.message}` });
  } finally {
    // sql.close();
  }
};
