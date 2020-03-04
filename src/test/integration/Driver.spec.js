const request = require('supertest');
const chai = require('chai');

const app = require('../../app');

const expect = require('chai').expect;

describe('Driver', () => {
  it('should test', done => {
    expect(2).to.be.equal(2);
  });

  // it('should connect to the endpoint', done => {
  //   expect(2).to.be.equal(2)
  //   request(app)
  //     .get('/drivers')
  //     .expect(200, done);
  // });

  // it('should fetch all the drivers', done => {
  //   request(app)
  //     .get('/drivers')
  //     .set('Accept', 'application/json')
  //     .expect(200, (err, data) => {
  //       console.log('drivers', data);
  //       // expect(data.body.data.length).to.be.equal(2);
  //       done();
  //     });
  // });
});
