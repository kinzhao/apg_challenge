/**
 * Sequelize initialization module
 */

'use strict';

import path from 'path';
import config from '../config/environment';
import Sequelize from 'sequelize';

var db = {
  Sequelize,
  sequelize: new Sequelize('apg_challenge', 'root', '', {
  	dialect: 'mysql',
  	port: 3306
  })
  //sequelize: new Sequelize(config.sequelize.uri, config.sequelize.options)
};

// Insert models below
// db.Thing = db.sequelize.import('../api/thing/thing.model');
// db.User = db.sequelize.import('../api/user/user.model');

module.exports = db;
