// tests/taskController.test.js
const request = require('supertest');
const app = require('../src/index');

describe('GET /api/tasks', () => {
  it('should return a list of tasks', async () => {
    const response = await request(app).get('/api/tasks');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('success');
    expect(Array.isArray(response.body.data)).toBe(true);
  });
});
