NewReader.Routers.FeedsRouter = Backbone.Router.extend({

  initialize: function(options){
    this.$el = options.$el
  },

  routes: {
    "":           "index",
    "feeds/:id":  "feedShow"
  },

  index: function(){
    var feedsIndex = new NewReader.Views.FeedsIndexView();
    this._swapView(feedsIndex);
  },


  feedShow: function(id){
    this.feed = NewReader.feeds.getOrFetch(id);
    var feedShow = new NewReader.Views.FeedShowView({ feed: this.feed });
    this._swapView(feedShow);
  },

  _swapView: function(newView){
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    this.$el.html(newView.render().$el);
  }

});