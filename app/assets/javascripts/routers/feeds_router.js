NewReader.Routers.FeedsRouter = Backbone.Router.extend({

  initialize: function(options){
    this.$el = options.$el
    console.log(this.$el);
  },

  routes: {
    "":                   "index",
    "/feeds/:id/entries": "entries"
  },

  index: function(){
    this.$el.html("");
    var feedsIndex = new NewReader.Views.FeedsIndexView();
    this.$el.html(feedsIndex.render().$el);
  },

  entries: function () {

  }

});