import sql from "mssql";
import config from "../config/config.js";

// Get all order items
export const getOrderItems = async (req, res) => {
  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request().query(`
    SELECT 
    oi.ID AS OrderItemID,
    u.id AS UserID,
    u.email AS UserEmail,
    p.Name AS ProductName,
    oi.Quantity AS Quantity,
    oi.Price AS Price
FROM
    OrderItems oi
JOIN
    Users u ON oi.ID = u.id
JOIN
    Products p ON oi.ProductID = p.ID;
    `);
    res.status(200).json(result.recordset);
  } catch (error) {
    res
      .status(500)
      .json({
        error: `An error occurred while retrieving order items... ${error.message}`,
      });
  } finally {
    // sql.close();
  }
};

// Get a single order item by ID
export const getOrderItemById = async (req, res) => {
  const orderItemId = req.params.id;

  try {
    const pool = await sql.connect(config.sql);
    const result = await pool
      .request()
      .input("orderItemId", sql.Int, orderItemId)
      .query("SELECT * FROM OrderItems WHERE ID = @orderItemId");

    if (!result.recordset[0]) {
      res.status(404).json({ message: "Order item not found" });
    } else {
      res.status(200).json(result.recordset[0]);
    }
  } catch (error) {
    res
      .status(500)
      .json({
        error: `An error occurred while retrieving the order item... ${error.message}`,
      });
  } finally {
    // sql.close();
  }
};

// Create a new order item
export const createOrderItem = async (req, res) => {
  const { OrderID, ProductID, Quantity, Price } = req.body;

  try {
    const pool = await sql.connect(config.sql);
    const result = await pool
      .request()
      .input("OrderID", sql.Int, OrderID)
      .input("ProductID", sql.Int, ProductID)
      .input("Quantity", sql.Int, Quantity)
      .input("Price", sql.Decimal, Price)
      .query(
        "INSERT INTO OrderItems (OrderID, ProductID, Quantity, Price) VALUES (@OrderID, @ProductID, @Quantity, @Price)"
      );

    res.status(201).json({ message: "Order item created successfully" });
  } catch (error) {
    res
      .status(500)
      .json({
        error: `An error occurred while creating the order item... ${error.message}`,
      });
  } finally {
    // sql.close();
  }
};

// Update an order item
export const updateOrderItem = async (req, res) => {
  const orderItemId = req.params.id;
  const { OrderID, ProductID, Quantity, Price } = req.body;

  try {
    const pool = await sql.connect(config.sql);
    const result = await pool
      .request()
      .input("orderItemId", sql.Int, orderItemId)
      .input("OrderID", sql.Int, OrderID)
      .input("ProductID", sql.Int, ProductID)
      .input("Quantity", sql.Int, Quantity)
      .input("Price", sql.Decimal, Price)
      .query(
        "UPDATE OrderItems SET OrderID = @OrderID, ProductID = @ProductID, Quantity = @Quantity, Price = @Price WHERE ID = @orderItemId"
      );

    res.status(200).json({ message: "Order item updated successfully" });
  } catch (error) {
    res
      .status(500)
      .json({
        error: `An error occurred while updating the order item... ${error.message}`,
      });
  } finally {
    // sql.close();
  }
};

// Delete an order item
export const deleteOrderItem = async (req, res) => {
  try {
    const orderItemId = req.params.id;
    const pool = await sql.connect(config.sql);
    const result = await pool
      .request()
      .input("orderItemId", sql.Int, orderItemId)
      .query("DELETE FROM OrderItems WHERE ID = @orderItemId");

    if (result.rowsAffected[0] === 0) {
      res.status(404).json({ message: "Order item not found" });
    } else {
      res.status(200).json({ message: "Order item deleted successfully" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        error: `An error occurred while deleting the order item... ${error.message}`,
      });
  } finally {
    // sql.close();
  }
};
