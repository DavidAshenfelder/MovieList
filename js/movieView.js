var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var UpdateFormView = require('./updateFormView')

module.exports = Backbone.View.extend({
  className: 'movieItemWrapper',
  template: _.template($('#movieTmpl').html()),
  events: {
    'click .delete': 'delete',
    'click .update': 'update',
    'click .submitUpdate': 'submitUpdate'
  },
  initialize: function() {
    console.log('model view create!');
    this.listenTo(this.model, 'update', this.remove)
  },

  delete: function(event) {
    event.preventDefault();
    this.model.destroy();
  },

  remove: function(){
    this.$el.remove();
  },

  update: function() {
    var updateMovie = new UpdateFormView();
    $('input[name="title"]').val(this.model.get('title'));
    $('input[name="cover"]').val(this.model.get('cover'));
    $('input[name="year"]').val(this.model.get('releaseDate'));
    $('input[name="rating"]').val(this.model.get('rating'));
    $('input[name="plot"]').val(this.model.get('plot'));
    $('input[name="category"]').val(this.model.get('category'));
  },

  submitUpdate: function() {

      this.model.set({
        title: $('input[name="title"]').val(),
        cover: $('input[name="cover"]').val(),
        releaseDate: $('input[name="year"]').val(),
        rating: $('input[name="rating"]').val(),
        plot: $('input[name="plot"]').val(),
        category: $('input[name="category"]').val(),
      });
      this.model.save();
      $('input').val('')
  },

  render: function(){
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  }
})
