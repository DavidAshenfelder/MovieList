var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var MovieView = require('./movieView');

module.exports = Backbone.View.extend({
  el: '.pageWrapper',
  initialize: function() {
    console.log('collection view FTW!');
    this.addAll();
    this.listenTo(this.collection, 'change', this.reload)
  },

  reload: function(){
    this.$el.html('');
    this.addAll();
  },

  addAll: function(){
    _.each(this.collection.models, this.addOne, this)
  },
  addOne: function(movie){
    var movieView = new MovieView({model: movie});
    this.$el.append(movieView.render().el);
  }
})
