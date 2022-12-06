import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

import productRoutes from './handlers/products';
import usersRoutes from './handlers/users';
import ordersRoutes from './handlers/orders';
import dashboardRoutes from './handlers/dashboard';
import order_ProductsRoutes from './handlers/order_products';

const port = process.env.PORT;

const app: express.Application = express();
const address = `0.0.0.0:${port as string}`;

app.use(bodyParser.json());

app.use('/products', productRoutes);
app.use('/users', usersRoutes);
app.use('/orders', ordersRoutes);
app.use('/orders-products', order_ProductsRoutes);
app.use('/services', dashboardRoutes);

app.get('/test-api', (req, res) => {
  res.send('Server Works!');
});

app.listen(port || 3000, () => {
  console.log(`server started at localhost:${address}`);
});

export default app;
