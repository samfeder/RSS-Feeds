NewReader.Routers.FeedsRouter = Backbone.Router.extend({

  initialize: function(options){
    this.$el = options.$el
    console.log(this.$el);
  },

  routes: {
    "": "index"
  },

  index: function(){
    var that = this;
    that.$el.html("");
    var feedsIndex = new NewReader.Views.FeedsIndexView();
    that.$el.html(feedsIndex.render().$el);
  }

});