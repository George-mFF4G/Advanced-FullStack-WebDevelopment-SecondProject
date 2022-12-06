import { Order_Products } from '../../models/order_products';
import { Order } from '../../models/orders';
import { User } from '../../models/users';
import app from '../../server';
import supertest from 'supertest';
const request = supertest(app);

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
const orderProduct: Order_Products = {
  order_id: 1,
  product_id: 1,
  quantity: 3,
};

describe('Test Endpoint For Testing Create Orders Products', () => {
  it('Create Route Function', async () => {
    const res = await request
      .post('/users')
      .set('Content-Type', 'application/json')
      .send(user);
    const token = res.body;
    const response = await request
      .post('/orders-products')
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + token)
      .send(orderProduct);
    expect(response.body.id).toEqual(1);
  });
});

describe('Test Endpoint For Testing Get all Orders Products', () => {
  it('Index Route Function', async () => {
    const res = await request
      .post('/users')
      .set('Content-Type', 'application/json')
      .send(user);
    const token = res.body;
    const response = await request
      .get('/orders-products')
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + token);
    expect(response.body.length).toBeGreaterThanOrEqual(1);
  });
});

describe('Test Endpoint For Testing Get Specific Orders Product', () => {
  it('Show Route Function', async () => {
    const res = await request
      .post('/users')
      .set('Content-Type', 'application/json')
      .send(user);
    const token = res.body;
    const response = await request
      .get('/orders-products/1')
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + token);
    expect(response.body.id).toEqual(1);
  });
});
describe('Test Endpoint For Testing Get Update A Order Products', () => {
  it('Update Route Function', async () => {
    const res = await request
      .post('/users')
      .set('Content-Type', 'application/json')
      .send(user);
    const token = res.body;
    const response = await request
      .put('/orders-products/1')
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + token)
      .send(order);
    expect(response.status).toBeTruthy();
  });
});
describe('Test Endpoint For Testing Delete Specific Order Products', () => {
  it('Delete Route Function', async () => {
    const res = await request
      .post('/users')
      .set('Content-Type', 'application/json')
      .send(user);
    const token = res.body;
    const response = await request
      .delete('/orders-products/2')
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + token);
    expect(response.status).toEqual(200);
  });
});
