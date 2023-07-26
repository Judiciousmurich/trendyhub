import sql from 'mssql';
import config from '../config/config.js';

// Get all Transactions

export const getLatestTransactions = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request().query("SELECT * FROM Payment ORDER BY date DESC");

        !result.recordset[0] ? res.status(404).json({ message: 'Orders not found' }) :
            res.status(200).json(result.recordset);
    } catch (error) {
        console.log(error)
        res.status(201).json({ error: 'an error occurred while retrieving orders' });
    } finally {
        // sql.close(); // Close the SQL connection
    }
};
export const getUserOrders = async (req, res) => {
    const { user_id } = req.params
    try {
        // console.log("user_id:", user_id);

        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .input("user_id", sql.Int, user_id)
            .query("SELECT  order_id, email, productName, status FROM Payment WHERE user_id = @user_id ORDER BY date DESC");

        !result.recordset[0] ? res.status(404).json({ message: 'You have not made any Order Yet!!!' }) :
            res.status(200).json(result.recordset);

    } catch (error) {
        console.log("error:", error);
        res.status(201).json({ error: 'an error occurred while retrieving orders' });
    } finally {
        // sql.close(); // Close the SQL connection
    }
}

export const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params; // Corrected typo from "oder_id" to "order_id"
        const pool = await sql.connect(config.sql);
        const result = await pool
            .request()
            .input("id", sql.Int, id)
            .query("DELETE FROM Payment WHERE id = @id");

        // Check if any rows were affected by the deletion
        if (result.rowsAffected[0] > 0) {
            res.status(200).json({ message: 'Order deleted successfully' });
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while cancelling an Order' });
    } finally {
        // sql.close();
    }
};

//update Order status
export const updateOrder = async (req, res) => {
    try {
        const { order_id } = req.params;
        const { status } = req.body;
        let pool = await sql.connect(config.sql);
        await pool.request()
            .input("order_id", sql.Int, order_id)
            .input("status", sql.VarChar, status)
            .query("UPDATE Payment SET  status = @status WHERE order_id = @order_id");
        res.status(200).json({ message: 'Status updated successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while updating status' });
    } finally {
        // sql.close();
    }
};