/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/csvs              ->  index
 * POST    /api/csvs              ->  create
 * GET     /api/csvs/:id          ->  show
 * PUT     /api/csvs/:id          ->  update
 * DELETE  /api/csvs/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import {Csv} from '../../sqldb';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    return entity.updateAttributes(updates)
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.destroy()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Csvs
export function index(req, res) {
  return Csv.findAll()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Csv from the DB
export function show(req, res) {
  return Csv.find({
    where: {
      _MD5: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Csv in the DB
export function create(req, res) {
  return Csv.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Csv in the DB
export function update(req, res) {
  if (req.body._MD5) {
    delete req.body._MD5;
  }
  return Csv.find({
    where: {
      _MD5: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Csv from the DB
export function destroy(req, res) {
  return Csv.find({
    where: {
      _MD5: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
