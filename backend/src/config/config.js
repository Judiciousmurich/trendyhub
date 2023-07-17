import dotenv from 'dotenv';

dotenv.config();

const { PORT, HOST, HOST_URL, SQL_USER, SQL_PWD, SQL_DB, SQL_SERVER } = process.env;

const sqlEncrypt = process.env.SQL_ENCRYPT === "true";


const config = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    sql: {
        server: SQL_SERVER,
        database: SQL_DB,
        user: SQL_USER,
        password: SQL_PWD,
        options: {
            encrypt: sqlEncrypt,
            enableArithAbort: true
        }
    }
};

export default config;