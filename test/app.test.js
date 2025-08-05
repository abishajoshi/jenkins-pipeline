const request = require('supertest');
const app = require('../app');
const expect = require('chai').expect;

describe('GET /', function () {
  it('should return status 200 and text', function (done) {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /text/)
      .end(function (err, res) {
        if (err) return done(err);
        expect(res.text).to.equal('Hello, Jenkins!');
        done();
      });
  });
});