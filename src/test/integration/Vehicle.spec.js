const request = require('supertest');
const chai = require('chai');

const app = require('../../app');

const expect = chai.expect;

describe('Vehicle', () => {
  // it('should connect to the endpoint', done => {
  //   request(app)
  //     .get('/vehicles')
  //     .expect(200, done);
  // });
  // it('should fetch all the vehicles', done => {
  //   request(app)
  //     .get('/vehicles')
  //     .set('Accept', 'application/json')
  //     .expect(200, async (err, data) => {
  //       console.log('vehicles', data);
  //       // expect(data.body.data.length).to.be.equal(2);
  //       done();
  //     });
  // });
});
