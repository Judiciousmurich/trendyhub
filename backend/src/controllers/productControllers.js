import sql from 'mssql';
import config from '../config/config.js';

// Get all products
export const getProducts = async (req, res) => {
  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request().query('SELECT * FROM Products');
    res.status(200).json(result.recordset);
  } catch (error) {
    res.status(500).json({ error: `An error occurred while retrieving products... ${error.message}` });
  } finally {
    sql.close();
  }
};

// Get a single product by ID
export const getProductById = async (req, res) => {
  const productId = req.params.id;

  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request()
      .input('productId', sql.Int, productId)
      .query('SELECT * FROM Products WHERE ID = @productId');

    if (!result.recordset[0]) {
      res.status(404).json({ message: 'Product not found' });
    } else {
      res.status(200).json(result.recordset[0]);
    }
  } catch (error) {
    res.status(500).json({ error: `An error occurred while retrieving the product... ${error.message}` });
  } finally {
    sql.close();
  }
};

// Create a new product
export const createProduct = async (req, res) => {
  const { Name, Description, Price, Quantity, Category, Manufacturer } = req.body;

  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request()
      .input('Name', sql.VarChar, Name)
      .input('Description', sql.Text, Description)
      .input('Price', sql.Decimal, Price)
      .input('Quantity', sql.Int, Quantity)
      .input('Category', sql.VarChar, Category)
      .input('Manufacturer', sql.VarChar, Manufacturer)
      .query('INSERT INTO Products (Name, Description, Price, Quantity, Category, Manufacturer) VALUES (@Name, @Description, @Price, @Quantity, @Category, @Manufacturer)');

    res.status(201).json({ message: 'Product created successfully' });
  } catch (error) {
    res.status(500).json({ error: `An error occurred while creating the product... ${error.message}` });
  } finally {
    sql.close();
  }
};

// Update a product
export const updateProduct = async (req, res) => {
  const productId = req.params.id;
  const { Name, Description, Price, Quantity, Category, Manufacturer } = req.body;

  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request()
      .input('productId', sql.Int, productId)
      .input('Name', sql.VarChar, Name)
      .input('Description', sql.Text, Description)
      .input('Price', sql.Decimal, Price)
      .input('Quantity', sql.Int, Quantity)
      .input('Category', sql.VarChar, Category)
      .input('Manufacturer', sql.VarChar, Manufacturer)
      .query('UPDATE Products SET Name = @Name, Description = @Description, Price = @Price, Quantity = @Quantity, Category = @Category, Manufacturer = @Manufacturer WHERE ID = @productId');

    res.status(200).json({ message: 'Product updated successfully' });
  } catch (error) {
    res.status(500).json({ error: `An error occurred while updating the product... ${error.message}` });
  } finally {
    sql.close();
  }
};

// Delete a product
export const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const pool = await sql.connect(config.sql);
    const result = await pool.request()
      .input('productId', sql.Int, productId)
      .query('DELETE FROM Products WHERE ID = @productId');

    if (result.rowsAffected[0] === 0) {
      res.status(404).json({ message: 'Product not found' });
    } else {
      res.status(200).json({ message: 'Product deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: `An error occurred while deleting the product... ${error.message}` });
  } finally {
    sql.close();
  }
};
