NewReader.Views.FeedShowView = Backbone.View.extend({

  template: JST['feed_show'],

  initialize: function(feed){
    this.feed = feed
    this.listenTo(this.feed, 'sync', function() {
      console.log("synced!");
      this.render();
    });
    this.entryViews = [];
  },

  events: {
    'click #refresh-button': "refresh"
  },

  render: function(){
    var that = this;
    var content = this.template({ feed: this.feed });

    this.$el.html(content);
    this.feed.entries().models.forEach(function(entry){
      var entryView = new NewReader.Views.EntryShowView(entry);
      that.entryViews.push(entryView);
      var content = entryView.render().$el;
      $('#entries-list').append(content);
    });

    return this;
  },

  refresh: function(){
    this.feed.fetch();
  },

  remove: function () {
    var that = this
    this.entryViews.forEach(function(entryView) {
      entryView.remove();
      var i = that.entryViews.indexOf(entryView);
      that.entryViews.splice(i, 1);
    });

    this.$el.remove();
    this.stopListening();
    return this;
  }

});