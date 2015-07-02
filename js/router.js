var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var MovieCollection = require('./movieCollection');
var MovieCollectionView = require('./movieColView');
var FormView = require('./formView');
var Movie = require('./movie');
var MovieView = require('./movieView');

module.exports = Backbone.Router.extend({
  routes: {
    "": "home",
    "home": "home",
    "movie/:id": "detailView",
    "*anything": "notfound"
  },

  notfound: function(stuff) {
    $('body').html('sorry, but this: ' + stuff + ' is not found');
  },

  detailView: function (id) {
    var movie = new Movie({_id: id})
    movie.fetch().then(function(){
      var movieView = new MovieView({model: movie});
      $('body').html(movieView.render().el);
    });
  },

  home: function () {
    var collection = new MovieCollection();
    collection.fetch().then(function(data){
      var AppView = new MovieCollectionView({collection: collection});
      var newMovieForm = new FormView({collection: collection, el: '.pageWrapper'});
    });
  }
});
