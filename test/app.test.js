// test/app.test.js
const request = require('supertest');
const app = require('../app'); // Import your Express app
const { expect } = require('chai'); // Import expect from Chai

describe('Express App', () => {
  it('should return "Hello, World!" on GET /', (done) => {
    request(app)
      .get('/')
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.text).to.equal('Hello, World!');
        done(); // Call done to signal that the async test is complete
      });
  });

  it('should return a list of users on GET /users', (done) => {
    request(app)
      .get('/users')
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.equal(2);
        expect(res.body[0]).to.have.property('name').and.to.equal('Alice');
        done();
      });
  });

  // Example of a failing test (uncomment to see it fail)
  /*
  it('should fail if an unknown route is accessed', (done) => {
    request(app)
      .get('/nonexistent-route')
      .end((err, res) => {
        expect(res.statusCode).to.equal(404); // Expecting 404 for a non-existent route
        done();
      });
  });
  */
});
