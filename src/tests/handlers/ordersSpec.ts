import app from '../../server';
import supertest from 'supertest';
const request = supertest(app);

import { User } from '../../models/users';
import { Order } from '../../models/orders';

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

describe('Test Endpoint For Testing Get all Orders', () => {
  it('Index Route Function', async () => {
    const res = await request
      .post('/users')
      .set('Content-Type', 'application/json')
      .send(user);
    const token = res.body;
    const response = await request
      .get('/orders')
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + token);
    expect(response.body[0].name).toContain('test');
  });
});

describe('Test Endpoint For Testing Get Specific Orders', () => {
  it('Show Route Function', async () => {
    const res = await request
      .post('/users')
      .set('Content-Type', 'application/json')
      .send(user);
    const token = res.body;
    const response = await request
      .get('/orders/1')
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + token);
    expect(response.body.id).toEqual(1);
  });
});
describe('Test Endpoint For Testing Create A Order', () => {
  it('Create Route Function', async () => {
    const res = await request
      .post('/users')
      .set('Content-Type', 'application/json')
      .send(user);
    const token = res.body;
    const response = await request
      .post('/orders')
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + token)
      .send(order);
    expect(response.status).toEqual(200);
  });
});
describe('Test Endpoint For Testing Get Update A Order', () => {
  it('Update Route Function', async () => {
    const res = await request
      .post('/users')
      .set('Content-Type', 'application/json')
      .send(user);
    const token = res.body;
    const response = await request
      .put('/orders/1')
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + token)
      .send(order);
    expect(response.status).toBeTruthy();
  });
});
describe('Test Endpoint For Testing Delete Specific Order', () => {
  it('Delete Route Function', async () => {
    const response = await request.delete('/orders/2');
    expect(response.status).toEqual(500);
  });
});
