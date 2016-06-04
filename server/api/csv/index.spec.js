'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var csvCtrlStub = {
  index: 'csvCtrl.index',
  show: 'csvCtrl.show',
  create: 'csvCtrl.create',
  update: 'csvCtrl.update',
  destroy: 'csvCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var csvIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './csv.controller': csvCtrlStub
});

describe('Csv API Router:', function() {

  it('should return an express router instance', function() {
    expect(csvIndex).to.equal(routerStub);
  });

  describe('GET /api/csvs', function() {

    it('should route to csv.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'csvCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/csvs/:id', function() {

    it('should route to csv.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'csvCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/csvs', function() {

    it('should route to csv.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'csvCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/csvs/:id', function() {

    it('should route to csv.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'csvCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/csvs/:id', function() {

    it('should route to csv.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'csvCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/csvs/:id', function() {

    it('should route to csv.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'csvCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
