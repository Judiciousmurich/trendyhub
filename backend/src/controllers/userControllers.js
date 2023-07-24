import sql from 'mssql';
import config from '../config/config.js';
import { request } from 'express';

// Get all users
export const getUsers = async (req, res) => {
  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request().query('SELECT * FROM Users');
    if (!result.recordset[0]) {
      res.status(404).json({ message: 'Users not found' });
    } else {
      res.status(200).json(result.recordset);
    }
  } catch (error) {
    res.status(500).json({ error: `An error occurred while retrieving users... ${error.message}` });
  } finally {
    // sql.close(); // Close the SQL connection
  }
};

// Get a specific user by ID
export const getUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request().query(`SELECT * FROM Users WHERE id = ${userId}`);
    if (!result.recordset[0]) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(200).json(result.recordset[0]);
    }
  } catch (error) {
    res.status(500).json({ error: `An error occurred while retrieving the user... ${error.message}` });
  } finally {
    // sql.close(); // Close the SQL connection
  }
};

// Create a new user
export const createUser = async (req, res) => {
  const {  password, email } = req.body;
  console.log(req.body)
  const created_at = new Date().toDateString()
  try {
    const pool = await sql.connect(config.sql);
    const result = await pool
      .request()
      // .input('username', sql.NVarChar, username)
      .input('password', sql.NVarChar, password)
      .input('email', sql.NVarChar, email)
      .input('created_at', sql.NVarChar, created_at)
      .query('INSERT INTO Users (password, email, created_at) VALUES ( @password, @email, @created_at)');
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: `An error occurred while creating the user... ${error.message}` });
  } finally {
    // sql.close(); // Close the SQL connection
  }
};

// Update a user by ID
export const updateUser = async (req, res) => {
  const userId = req.params.id;
  const { password, email } = req.body;
  try {
    const pool = await sql.connect(config.sql);
    const result = await pool
      .request()
      // .input('username', sql.NVarChar, username)
      .input('password', sql.NVarChar, password)
      .input('email', sql.NVarChar, email)
      .input('id', sql.Int, userId)
      .query('UPDATE Users SET  password = @password, email = @email WHERE id = @id');
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    res.status(500).json({ error: `An error occurred while updating the user... ${error.message}` });
  } finally {
    // sql.close(); // Close the SQL connection
  }
};

// Delete a user by ID
export const deleteUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const pool = await sql.connect(config.sql);
    const result = await pool
      .request()
      .input('id', sql.Int, userId)
      .query('DELETE FROM Users WHERE id = @id');
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: `An error occurred while deleting the user... ${error.message}` });
  } finally {
    // sql.close(); // Close the SQL connection
  }
};
