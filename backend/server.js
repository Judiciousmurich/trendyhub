import express from 'express';
import bodyParser from 'body-parser';
import config from './src/config/config.js';
import categoryRoutes from './src/routes/categoryRoutes.js';
import orderItemRoutes from './src/routes/orderItemsRoutes.js';
import productRoutes from './src/routes/productRoutes.js';
import orderRoutes from './src/routes/orderRoutes.js';
import paymentRoutes from './src/routes/paymentRoutes.js';
import userRoutes from './src/routes/userRoutes.js';

const app = express();
//
app.use(bodyParser.json());

// my-routes
categoryRoutes(app)
orderItemRoutes(app)
orderRoutes(app)
productRoutes(app)
userRoutes(app)
paymentRoutes(app)
app.get('/', (req, res) => {
    res.send("Hello😁 Welcome ecommerce API!");
});

app.listen(config.port, () => {
    console.log(`Server is running on ${config.url}`);
});