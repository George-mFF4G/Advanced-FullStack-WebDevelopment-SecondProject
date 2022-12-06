import supertest from 'supertest';
import app from '../server';

const request = supertest(app);

describe('Test Endpoint For Testing The Server Work', () => {
  it('Gets The API Endpoint Test To Test The Server Work', async () => {
    const response = await request.get('/test-api');
    expect(response.status).toBe(200);
  });
});
