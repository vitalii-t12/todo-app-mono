import request from 'supertest';
import app from '../src/index'; // Assuming you export the Express app from src/index.ts

describe('GET /', () => {
  it('should return 200 and Hello, TypeScript with Express!', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Hello, World!');
  });
});
