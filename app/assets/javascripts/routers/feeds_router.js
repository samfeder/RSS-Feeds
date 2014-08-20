NewReader.Routers.FeedsRouter = Backbone.Router.extend({

  initialize: function(options){
    this.$el = options.$el
  },

  routes: {
    "":           "index",
    "feeds/:id": "feedShow"
    // "/feeds/:id/entries": "entries"
  },

  index: function(){
    this.$el.html("");
    var feedsIndex = new NewReader.Views.FeedsIndexView();
    this.$el.html(feedsIndex.render().$el);
  },


  feedShow: function(id){
    this.$el.html("");
    this.feed = NewReader.feeds.getOrFetch(parseInt(id));
    var feedShow = new NewReader.Views.FeedShowView(this.feed);
    this.$el.html(feedShow.render().$el);
  }


  // entries: function () {
//
//   }

});