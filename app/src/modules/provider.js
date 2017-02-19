
var helper = require('./helper');

module.exports = function(app) {

  app.use('/sample', helper.requireRoute('sample'));

};
