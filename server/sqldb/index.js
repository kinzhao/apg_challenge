/**
 * Sequelize initialization module
 */

'use strict';

import path from 'path';
import config from '../config/environment';
import Sequelize from 'sequelize';

var db = {
  Sequelize,
  sequelize: new Sequelize('database', 'username', 'password', {
  	dialect: 'mysql',
  	port: portnumber
  })
  //sequelize: new Sequelize(config.sequelize.uri, config.sequelize.options)
};

// Insert models below
db.Csv = db.sequelize.import('../api/csv/csv.model');
// db.Thing = db.sequelize.import('../api/thing/thing.model');
// db.User = db.sequelize.import('../api/user/user.model');

module.exports = db;
