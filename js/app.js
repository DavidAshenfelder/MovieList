// var mockData = require('./data');
var MovieCollection = require('./movieCollection');
var MovieCollectionView = require('./movieColView');
var $ = require('jquery');
var Backbone = require('backbone');
var FormView = require('./formView');
var Router = require('./router');
module.exports = $(function() {
 new Router();

 Backbone.history.start()
});
