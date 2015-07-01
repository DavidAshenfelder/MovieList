var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');

module.exports = Backbone.View.extend({
  className: 'movieItemWrapper',
  template: _.template($('#movieTmpl').html()),
  events: {
    'click .delete': 'delete'
  },
  initialize: function() {
    console.log('model view create!');
    this.listenTo(this.model, 'destroy', this.remove)
  },

  delete: function(event) {
    event.preventDefault();
    this.model.destroy();
  },

  remove: function(){
    this.$el.remove();
  },

  render: function(){
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  }
})
