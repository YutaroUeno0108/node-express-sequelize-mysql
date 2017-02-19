'use strict'

var model = module.exports = {};

var Sequelize = require('sequelize');
var helper = require('../modules/helper');
var db = helper.requireModule('database');

var Sample = db.define('sample_t', {
  sample_id:{type:Sequelize.INTEGER,primaryKey: true},
  sample_name: {type:Sequelize.STRING}
},{
  freezeTableName: true , id:false, timestamps: false
});

model.find = function(id) {
  return Sample.find({
    where:{
      sample_id:id
    }
  });
};

model.findAll = function() {
  return Sample.findAll();
};
