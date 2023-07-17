import sql from 'mssql';
import config from '../config/config.js';

// Get all orders
export const getOrders = async (req, res) => {
  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request().query('SELECT * FROM Orders');
    res.status(200).json(result.recordset);
  } catch (error) {
    res.status(500).json({ error: `An error occurred while retrieving orders... ${error.message}` });
  } finally {
    sql.close();
  }
};

// Get a single order by ID
export const getOrderById = async (req, res) => {
  const orderId = req.params.id;

  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request()
      .input('orderId', sql.Int, orderId)
      .query('SELECT * FROM Orders WHERE ID = @orderId');

    if (!result.recordset[0]) {
      res.status(404).json({ message: 'Order not found' });
    } else {
      res.status(200).json(result.recordset[0]);
    }
  } catch (error) {
    res.status(500).json({ error: `An error occurred while retrieving the order... ${error.message}` });
  } finally {
    sql.close();
  }
};

// Create a new order
export const createOrder = async (req, res) => {
  const { CustomerID, OrderDate, TotalAmount } = req.body;

  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request()
      .input('CustomerID', sql.Int, CustomerID)
      .input('OrderDate', sql.Date, OrderDate)
      .input('TotalAmount', sql.Decimal, TotalAmount)
      .query('INSERT INTO Orders (CustomerID, OrderDate, TotalAmount) VALUES (@CustomerID, @OrderDate, @TotalAmount)');

    res.status(201).json({ message: 'Order created successfully' });
  } catch (error) {
    res.status(500).json({ error: `An error occurred while creating the order... ${error.message}` });
  } finally {
    sql.close();
  }
};

// Update an order
export const updateOrder = async (req, res) => {
  const orderId = req.params.id;
  const { CustomerID, OrderDate, TotalAmount } = req.body;

  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request()
      .input('orderId', sql.Int, orderId)
      .input('CustomerID', sql.Int, CustomerID)
      .input('OrderDate', sql.Date, OrderDate)
      .input('TotalAmount', sql.Decimal, TotalAmount)
      .query('UPDATE Orders SET CustomerID = @CustomerID, OrderDate = @OrderDate, TotalAmount = @TotalAmount WHERE ID = @orderId');

    res.status(200).json({ message: 'Order updated successfully' });
  } catch (error) {
    res.status(500).json({ error: `An error occurred while updating the order... ${error.message}` });
  } finally {
    sql.close();
  }
};

// Delete an order
export const deleteOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const pool = await sql.connect(config.sql);
    const result = await pool.request()
      .input('orderId', sql.Int, orderId)
      .query('DELETE FROM Orders WHERE ID = @orderId');

    if (result.rowsAffected[0] === 0) {
      res.status(404).json({ message: 'Order not found' });
    } else {
      res.status(200).json({ message: 'Order deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: `An error occurred while deleting the order... ${error.message}` });
  } finally {
    sql.close();
  }
};
