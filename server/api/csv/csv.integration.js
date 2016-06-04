'use strict';

var app = require('../..');
import request from 'supertest';

var newCsv;

describe('Csv API:', function() {

  describe('GET /api/csvs', function() {
    var csvs;

    beforeEach(function(done) {
      request(app)
        .get('/api/csvs')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          csvs = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(csvs).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/csvs', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/csvs')
        .send({
          name: 'New Csv',
          info: 'This is the brand new csv!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newCsv = res.body;
          done();
        });
    });

    it('should respond with the newly created csv', function() {
      expect(newCsv.name).to.equal('New Csv');
      expect(newCsv.info).to.equal('This is the brand new csv!!!');
    });

  });

  describe('GET /api/csvs/:id', function() {
    var csv;

    beforeEach(function(done) {
      request(app)
        .get('/api/csvs/' + newCsv._MD5)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          csv = res.body;
          done();
        });
    });

    afterEach(function() {
      csv = {};
    });

    it('should respond with the requested csv', function() {
      expect(csv.name).to.equal('New Csv');
      expect(csv.info).to.equal('This is the brand new csv!!!');
    });

  });

  describe('PUT /api/csvs/:id', function() {
    var updatedCsv;

    beforeEach(function(done) {
      request(app)
        .put('/api/csvs/' + newCsv._MD5)
        .send({
          name: 'Updated Csv',
          info: 'This is the updated csv!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedCsv = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedCsv = {};
    });

    it('should respond with the updated csv', function() {
      expect(updatedCsv.name).to.equal('Updated Csv');
      expect(updatedCsv.info).to.equal('This is the updated csv!!!');
    });

  });

  describe('DELETE /api/csvs/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/csvs/' + newCsv._MD5)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when csv does not exist', function(done) {
      request(app)
        .delete('/api/csvs/' + newCsv._MD5)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
