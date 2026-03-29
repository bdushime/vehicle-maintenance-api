const request = require('supertest');
const app = require('../../app');

describe('Integration Tests: /health endpoint', () => {
  test('should return 200 with status, uptime, and timestamp', async () => {
    const res = await request(app).get('/health');
    
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
    expect(res.body).toHaveProperty('uptime');
    expect(res.body).toHaveProperty('timestamp');
  });
});