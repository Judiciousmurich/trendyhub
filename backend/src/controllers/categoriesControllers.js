import sql from 'mssql';
import config from '../config/config.js';

// Get all categories
export const getCategories = async (req, res) => {
  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request().query('SELECT * FROM Categories');
    res.status(200).json(result.recordset);
  } catch (error) {
    res.status(500).json({ error: `An error occurred while retrieving categories... ${error.message}` });
  } finally {
    sql.close();
  }
};

// Get a single category by ID
export const getCategoryById = async (req, res) => {
  const categoryId = req.params.id;

  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request()
      .input('categoryId', sql.Int, categoryId)
      .query('SELECT * FROM Categories WHERE ID = @categoryId');

    if (!result.recordset[0]) {
      res.status(404).json({ message: 'Category not found' });
    } else {
      res.status(200).json(result.recordset[0]);
    }
  } catch (error) {
    res.status(500).json({ error: `An error occurred while retrieving the category... ${error.message}` });
  } finally {
    sql.close();
  }
};

// Create a new category
export const createCategory = async (req, res) => {
  const { Name, Description } = req.body;

  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request()
      .input('Name', sql.VarChar, Name)
      .input('Description', sql.Text, Description)
      .query('INSERT INTO Categories (Name, Description) VALUES (@Name, @Description)');

    res.status(201).json({ message: 'Category created successfully' });
  } catch (error) {
    res.status(500).json({ error: `An error occurred while creating the category... ${error.message}` });
  } finally {
    sql.close();
  }
};

// Update a category
export const updateCategory = async (req, res) => {
  const categoryId = req.params.id;
  const { Name, Description } = req.body;

  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request()
      .input('categoryId', sql.Int, categoryId)
      .input('Name', sql.VarChar, Name)
      .input('Description', sql.Text, Description)
      .query('UPDATE Categories SET Name = @Name, Description = @Description WHERE ID = @categoryId');

    res.status(200).json({ message: 'Category updated successfully' });
  } catch (error) {
    res.status(500).json({ error: `An error occurred while updating the category... ${error.message}` });
  } finally {
    sql.close();
  }
};

// Delete a category
export const deleteCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const pool = await sql.connect(config.sql);
    const result = await pool.request()
      .input('categoryId', sql.Int, categoryId)
      .query('DELETE FROM Categories WHERE ID = @categoryId');

    if (result.rowsAffected[0] === 0) {
      res.status(404).json({ message: 'Category not found' });
    } else {
      res.status(200).json({ message: 'Category deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: `An error occurred while deleting the category... ${error.message}` });
  } finally {
    sql.close();
  }
};
