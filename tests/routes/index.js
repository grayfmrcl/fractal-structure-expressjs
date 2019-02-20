const chai = require('chai');
const request = require('supertest');

const app = require('../../app/routes');

const expect = chai.expect;

describe('GET /', () => {
  it("Should success when requested index.", (done) => {
    request(app).get('/')
    .then(response => {
      expect(response.statusCode).eql(200);
      expect(response.body.message).eql('Hello world!');
      done();
    });
  });
});

describe('Not found handler', () => {
  it("Should receive 404 status code when requested not existant resource", (done) => {
    request(app).get('/this-resource-is-not-exist')
    .then(response => {
      expect(response.statusCode).eql(404);
      expect(response.body.message).eql('Not found.');
      done();
    });
  });
});
