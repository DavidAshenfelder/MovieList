// var mockData = require('./data');
var MovieCollection = require('./movieCollection');
var MovieCollectionView = require('./movieColView');
var $ = require('jquery');
var FormView = require('./formView')

module.exports = $(function() {
  var collection = new MovieCollection();
  collection.fetch().then(function(data){
    console.log('here be Daaatttaaaaa', data);
    new MovieCollectionView({collection: collection});
    var newMovieForm = new FormView({collection: collection});
});
});
