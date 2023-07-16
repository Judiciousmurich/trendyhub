
import sql from 'mssql';
import config from '../config/config.js';

// Get all users
export const getUsers = async (req, res) => {
  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request().query('SELECT * FROM Users');
    res.status(200).json(result.recordset);
  } catch (error) {
    res.status(500).json({ error: `An error occurred while retrieving users... ${error.message}` });
  } finally {
    sql.close();
  }
};

// Get a single user by ID
export const getUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request()
      .input('userId', sql.Int, userId)
      .query('SELECT * FROM Users WHERE ID = @userId');

    if (!result.recordset[0]) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(200).json(result.recordset[0]);
    }
  } catch (error) {
    res.status(500).json({ error: `An error occurred while retrieving the user... ${error.message}` });
  } finally {
    sql.close();
  }
};

// Create a new user
export const createUser = async (req, res) => {
  const { Name, Email, Password, Address } = req.body;

  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request()
      .input('Name', sql.VarChar, Name)
      .input('Email', sql.VarChar, Email)
      .input('Password', sql.VarChar, Password)
      .input('Address', sql.VarChar, Address)
      .query('INSERT INTO Users (Name, Email, Password, Address) VALUES (@Name, @Email, @Password, @Address)');

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: `An error occurred while creating the user... ${error.message}` });
  } finally {
    sql.close();
  }
};

// Update a user
export const updateUser = async (req, res) => {
  const userId = req.params.id;
  const { Name, Email, Password, Address } = req.body;

  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request()
      .input('userId', sql.Int, userId)
      .input('Name', sql.VarChar, Name)
      .input('Email', sql.VarChar, Email)
      .input('Password', sql.VarChar, Password)
      .input('Address', sql.VarChar, Address)
      .query('UPDATE Users SET Name = @Name, Email = @Email, Password = @Password, Address = @Address WHERE ID = @userId');

    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    res.status(500).json({ error: `An error occurred while updating the user... ${error.message}` });
  } finally {
    sql.close();
  }
};

// Delete a user
export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const pool = await sql.connect(config.sql);
    const result = await pool.request()
      .input('userId', sql.Int, userId)
      .query('DELETE FROM Users WHERE ID = @userId');

    if (result.rowsAffected[0] === 0) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(200).json({ message: 'User deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: `An error occurred while deleting the user... ${error.message}` });
  } finally {
    sql.close();
  }
};
