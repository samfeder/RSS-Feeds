NewReader.Collections.Feeds = Backbone.Collection.extend({
  url: "/api/feeds",

  model: NewReader.Models.Feed
});

NewReader.feeds = new NewReader.Collections.Feeds();
NewReader.feeds.fetch();