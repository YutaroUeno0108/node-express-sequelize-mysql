'use strict'
var Sequelize = require('sequelize');
var Promise = require('bluebird')
var fs = require('fs');
var path = require('path');
var helper = require(path.join(__src_root,'modules/helper'));
var config = helper.requireModule('config')();

var dbconfig = config.dbconfig

var sequelize = new Sequelize(dbconfig.database, dbconfig.user, dbconfig.password, {
  host: dbconfig.host,
  port: 3306,
  dialect: 'mysql'
});

module.exports = sequelize;
