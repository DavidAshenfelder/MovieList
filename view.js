var MovieView = Backbone.View.extend({
  template: _.template($('#postTmpl').html()),
  className: "movieItemWrapper",

  initialize: function() {
    console.log('view created');
    console.log("in initialize:", this.el);
    console.log();
  },
  render: function() {
    var markup = this.template(this.model.toJSON())
    this.$el.html(markup)
    console.log("in render:", this.el);
    return this;
    this.save;

  },
});



var MovieCollectionView = Backbone.View.extend({
  el: '.pageWrapper',
  collection: null,
  events: {
    'click .delete': 'alertMe',
  },

  initialize: function() {
    this.addAll();
  },

  alertMe: function(){
    alert("hi from alerMe");
  },

  addAll: function() {
    _.each(this.collection.models, this.addOne, this);
  },

  addOne: function(movie) {
    var movieView = new MovieView({model: movie});
    this.$el.append(movieView.render().el);
  }
});
