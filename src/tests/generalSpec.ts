import { Order, ordersStore } from '../models/orders';
import { User, usersStore } from '../models/users';
import { Product, ProductsStore } from '../models/products';
import client from '../database';

const user_Opertations = new usersStore();
const product_Opertations = new ProductsStore();
const order_Opertations = new ordersStore();

const user: User = {
  first_name: 'test',
  last_name: 'test',
  person_details: 'test',
  username: 'test',
  user_password: 'test',
};

const order: Order = {
  name: 'test',
  status: 'active',
  user_id: 1,
};

const product: Product = {
  name: 'test',
  price: 10,
  describe: 'test',
};

beforeAll(async () => {
  await product_Opertations.create(product);
  await user_Opertations.register(user);
  await order_Opertations.create(order);
});

afterAll(async () => {
  const conn = await client.connect();
  const sql =
    'DELETE FROM order_products;\n DELETE FROM orders;\n DELETE FROM products;\n DELETE FROM users;';
  await conn.query(sql);
  conn.release();
});
