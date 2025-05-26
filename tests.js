const requests = require('supertest');
const app = require('../index');

describe('User API', () => {
    it('should return all users', async () => {
        const response = await request(app).get('/users');

        expect(response.status).toBe(200);
        expect(response.body.users).toHaveLength(2);
    });
});