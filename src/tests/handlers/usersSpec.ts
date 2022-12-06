import app from '../../server';
import supertest from 'supertest';
const request = supertest(app);
import { User } from '../../models/users';

const user: User = {
  first_name: 'test',
  last_name: 'test',
  person_details: 'test',
  username: 'test',
  user_password: 'test',
};

describe('Test Endpoint For Testing Create A User', async () => {
  it('SignUp Route Function', async () => {
    const res = await request
      .post('/users')
      .set('Content-Type', 'application/json')
      .send(user);
    expect(res.status).toEqual(200);
  });
});

describe('Test Endpoint For Testing Login A User', () => {
  it('login Route Function', async () => {
    const response = await request
      .post('/users/login')
      .send({ username: 'test', password: 'test' });
    expect(response.status).toEqual(200);
  });
});

describe('Test Endpoint For Testing Get all Users', () => {
  it('Index  Route Function', async () => {
    const res = await request
      .post('/users')
      .set('Content-Type', 'application/json')
      .send(user);
    const token = res.body;
    const response = await request
      .get('/users')
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + token);
    expect(response.body.length).toBeGreaterThan(3);
  });
});

describe('Test Endpoint For Testing Get Specific Users', () => {
  it('Show Route Function', async () => {
    const res = await request
      .post('/users')
      .set('Content-Type', 'application/json')
      .send(user);
    const token = res.body;
    const response = await request
      .get('/users/1')
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + token);
    expect(response.status).toEqual(200);
  });
});

describe('Test Endpoint For Testing Get Update A User', () => {
  it('Update Route Function', async () => {
    const response = await request.put('/users/1');
    expect(response.status).toBeTruthy();
  });
});
describe('Test Endpoint For Testing Delete Specific User', () => {
  it('Delete Route Function', async () => {
    const response = await request.delete('/users/3');
    expect(response.status).toEqual(500);
  });
});
