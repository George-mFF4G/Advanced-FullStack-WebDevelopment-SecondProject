import app from '../../server';
import supertest from 'supertest';
const request = supertest(app);

describe('Test Endpoint For Testing Get all Orders By User Id', () => {
  it('OrderByUser Route Function', async () => {
    const response = await request.get('/services/1');
    expect(response.status).toBeTruthy();
  });
});

describe('Test Endpoint For Testing Get all Active Orders By User Id', () => {
  it('ActiveOrderByUser Route Function', async () => {
    const response = await request.get('/services/active/1');
    expect(response.status).toBeTruthy();
  });
});
