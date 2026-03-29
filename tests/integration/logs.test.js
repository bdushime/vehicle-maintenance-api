const request = require('supertest');
const app = require('../../app');
const logStore = require('../../logStore');

describe('Integration Tests: /logs endpoints', () => {
  
  beforeEach(() => {
    logStore.reset();
  });

  describe('GET /logs', () => {
    test('should return 200 and an empty array when no logs exist', async () => {
      const res = await request(app).get('/logs');
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([]);
    });

    test('should return 200 and an array of logs when they exist', async () => {
      
      logStore.createLog('2014 Toyota RAV4', 'Oil Change');
      
      const res = await request(app).get('/logs');
      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBe(1);
      expect(res.body[0].vehicle).toBe('2014 Toyota RAV4');
    });
  });
});