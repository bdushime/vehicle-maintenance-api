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

describe('POST /logs', () => {
    test('should return 201 and the created log for a valid request', async () => {
      const res = await request(app)
        .post('/logs')
        .send({ vehicle: '2014 Toyota RAV4', serviceType: 'Brake Pad Replacement' });

      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty('id');
      expect(res.body.vehicle).toBe('2014 Toyota RAV4');
      expect(res.body.serviceType).toBe('Brake Pad Replacement');
    });

    test('should return 400 if vehicle or serviceType is missing', async () => {
      const res = await request(app)
        .post('/logs')
        .send({ serviceType: 'Oil Change' }); // intentionally missing 'vehicle'

      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty('error');
    });
  });

  describe('GET /logs/:id', () => {
    test('should return 200 and the log if the ID exists', async () => {
      // Seed the database first
      const createdLog = logStore.createLog('2014 Toyota RAV4', 'Tire Rotation');
      
      const res = await request(app).get(`/logs/${createdLog.id}`);
      expect(res.statusCode).toBe(200);
      expect(res.body.serviceType).toBe('Tire Rotation');
    });

    test('should return 404 if the ID does not exist', async () => {
      const res = await request(app).get('/logs/999');
      expect(res.statusCode).toBe(404);
      expect(res.body).toHaveProperty('error');
    });
  });

  describe('DELETE /logs/:id', () => {
    test('should return 204 and delete the log if ID exists', async () => {
      
      const createdLog = logStore.createLog('2014 Toyota RAV4', 'Tire Rotation');
      
      const res = await request(app).delete(`/logs/${createdLog.id}`);
      expect(res.statusCode).toBe(204);
      
      const getRes = await request(app).get(`/logs/${createdLog.id}`);
      expect(getRes.statusCode).toBe(404);
    });

    test('should return 404 if trying to delete a non-existent ID', async () => {
      const res = await request(app).delete('/logs/999');
      expect(res.statusCode).toBe(404);
      expect(res.body).toHaveProperty('error');
    });
  });

