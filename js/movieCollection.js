var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var MovieModel = require('./movie');

module.exports = Backbone.Collection.extend({
  model: MovieModel,
  url: 'http://tiy-fee-rest.herokuapp.com/collections/dwab2',
  initialize: function(){
    console.log('collections are awesome!');
  },
  comparator: function() {
    ///return a < b
  }
})
