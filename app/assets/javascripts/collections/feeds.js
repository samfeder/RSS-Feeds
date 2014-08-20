NewReader.Collections.Feeds = Backbone.Collection.extend({
  url: "/api/feeds",

  model: NewReader.Models.Feed,

  getOrFetch: function(id){
    var that = this;
    if (this.get(id)){
      return this.get(id);
    } else {
      var feed = new NewReader.Models.Feed({id: id});
      feed.fetch({
        success: function () {
          that.add(feed);
        }
      });

      return feed;
    }
  }
});

NewReader.feeds = new NewReader.Collections.Feeds();
NewReader.feeds.fetch();