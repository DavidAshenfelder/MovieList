var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.Model.extend({

    urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/dwab2',
    idAttribute: '_id',
    defaults: function() {
      return{
        title: "Sucks Ass",
        releaseDate: "NEVER",
        rating: "0",
        plot: "far off in never never land Peter Pan Died",
        category: "family"
      }
    },
    initialize: function (options) {
      console.log("Model is a Go!");
    },
});
