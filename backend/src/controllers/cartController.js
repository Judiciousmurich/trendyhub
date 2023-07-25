import sql from 'mssql';
import config from '../config/config.js';

// Get all cart items
export const getCart = async (req, res) => {
  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request().query('SELECT * FROM cart c INNER JOIN Products p ON c.product_id = p.ID');
    res.status(200).json(result.recordset);
  } catch (error) {
    res.status(500).json({ error: `An error occurred while retrieving cart items... ${error.message}` });
  } finally {
    // sql.close();
  }
};

// Get a single cart item by ID
export const getCartById = async (req, res) => {
  const cartItemId = req.params.id;

  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request()
      .input('cartItemId', sql.Int, cartItemId)
      .query('SELECT * FROM cart WHERE cart_id = @cartItemId');

    if (!result.recordset[0]) {
      res.status(404).json({ message: 'Cart item not found' });
    } else {
      res.status(200).json(result.recordset[0]);
    }
  } catch (error) {
    res.status(500).json({ error: `An error occurred while retrieving the cart item... ${error.message}` });
  } finally {
    // sql.close();
  }
};

// Create a new cart item
export const createCart = async (req, res) => {
  const { id, product_id,} = req.body;

  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request()
      .input('id', sql.Int, id)
      .input('product_id', sql.Int, product_id)
      
      .query('INSERT INTO cart (id, product_id) VALUES (@id, @product_id)');

    res.status(201).json({ message: 'Cart item created successfully' });
  } catch (error) {
    res.status(500).json({ error: `An error occurred while creating the cart item... ${error.message}` });
  } finally {
    // sql.close();
  }
};

// Update a cart item
export const updateCart = async (req, res) => {
  const cartItemId = req.params.id;
  const { id, product_id, name, price, quantity } = req.body;

  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request()
      .input('cartItemId', sql.Int, cartItemId)
      .input('id', sql.Int, id)
      .input('product_id', sql.Int, product_id)
      .input('name', sql.VarChar(255), name)
      .input('price', sql.Decimal(10, 2), price)
      .input('quantity', sql.Int, quantity)
      .query('UPDATE cart SET id = @id, product_id = @product_id, name = @name, price = @price, quantity = @quantity WHERE cart_id = @cartItemId');

    res.status(200).json({ message: 'Cart item updated successfully' });
  } catch (error) {
    res.status(500).json({ error: `An error occurred while updating the cart item... ${error.message}` });
  } finally {
    // sql.close();
  }
};

// Delete a cart item
export const deleteCart = async (req, res) => {
  try {
    const cartItemId = req.params.id;
    const pool = await sql.connect(config.sql);
    const result = await pool.request()
      .input('cartItemId', sql.Int, cartItemId)
      .query('DELETE FROM cart WHERE cart_id = @cartItemId');

    if (result.rowsAffected[0] === 0) {
      res.status(404).json({ message: 'Cart item not found' });
    } else {
      res.status(200).json({ message: 'Cart item deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: `An error occurred while deleting the cart item... ${error.message}` });
  } finally {
    // sql.close();
  }
};
