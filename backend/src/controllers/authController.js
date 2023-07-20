import sql from 'mssql';
import config from '../config/config.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const loginRequired = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        return res.status(401).json({ message: 'Unauthorized user!' });
    }
};

// Register a new User

export const Register = async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const created_at = new Date().toLocaleString();
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .input('email', sql.VarChar, email)
            .query('SELECT * FROM Users WHERE  email = @email');
        const user = result.recordset[0];
        if (user) {
            res.status(409).json({ error: 'User already exists' });
        } else {
            await pool.request()
                .input('email', sql.VarChar, email)
                .input('hashedPassword', sql.VarChar, hashedPassword)
                .input('created_at', sql.VarChar, created_at)
                .query('INSERT INTO Users (email, password, created_at) VALUES ( @email , @hashedpassword,@created_at)');
            res.status(200).send({ message: 'User created successfully' });
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'An error occurred while creating the user' + error});
    } finally {
        sql.close();
    }

};


export const login = async (req, res) => {
    const { email, password } = req.body;
    let pool = await sql.connect(config.sql);
    const result = await pool.request()
        .input('email', sql.VarChar, email)
        .query('SELECT * FROM Users WHERE email = @email');
    const user = result.recordset[0];
    if (!user) {
        res.status(401).json({ error: 'Authentication failed. Wrong credentials.' });
    } else {
        if (!bcrypt.compareSync(password, user.password)) {
            res.status(401).json({ error: 'Authentication failed. Wrong credentials.' });
        } else {
            const token = `JWT ${jwt.sign({ username: user.username, email: user.email }, "amos")}`;
            res.status(200).json({ email: user.email, username: user.username, id: user.user_id, token: token });
        }
    }

};