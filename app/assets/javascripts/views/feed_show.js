NewReader.Views.FeedShowView = Backbone.View.extend({

  template: JST['feed_show'],

  initialize: function(feed){
    this.feed = feed
    this.listenTo(this.feed, 'sync', function() {
      console.log("synced!");
      this.render();
    });
  },

  events: {
    'click #refresh-button': "refresh"
  },

  render: function(){
    var content = this.template({ feed: this.feed });

    this.$el.html(content);

    return this;
  },

  refresh: function(){
    this.feed.fetch();
  }

});