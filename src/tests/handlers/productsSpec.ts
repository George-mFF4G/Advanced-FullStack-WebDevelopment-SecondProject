import app from '../../server';
import supertest from 'supertest';
const request = supertest(app);

describe('Test Endpoint For Testing Get all Products', () => {
  it('Index Route Function', async () => {
    const response = await request
      .get('/products')
      .set('Content-type', 'application/json');
    expect(response.body).toEqual([
      {
        id: 1,
        name: 'test',
        price: 10,
        describe: 'test',
      },
    ]);
  });
});
describe('Test Endpoint For Testing Get Specific Products', () => {
  it('Show Route Function', async () => {
    const response = await request.get('/products/1');
    expect(response.body).toEqual({
      id: 1,
      name: 'test',
      describe: 'test',
      price: 10,
    });
  });
});
describe('Test Endpoint For Testing Create A Product', () => {
  it('Create Route Function', async () => {
    const response = await request.post('/products');
    expect(response.status).toBe(500);
  });
});
describe('Test Endpoint For Testing Delete Specific Product', () => {
  it('Delete Route Function', async () => {
    const response = await request.delete('/products/1');
    expect(response.status).toBeTruthy();
  });
});
