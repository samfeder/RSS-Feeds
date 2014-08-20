NewReader.Views.FeedShowView = Backbone.View.extend({

  template: JST['feed_show'],

  initialize: function(options){
    this.feed = options.feed;
    this.listenTo(this.feed, 'sync', this.render);
    this.entryViews = [];
  },

  events: {
    'click #refresh-button': "refresh",
    'click #delete-button':  "delete"
  },

  render: function(){
    var that = this;
    var content = this.template({ feed: this.feed });
    console.log("entries", this.feed.entries().length);

    this.$el.html(content);
    this.feed.entries().each(function(entry){
      var entryView = new NewReader.Views.EntryShowView(entry);
      that.entryViews.push(entryView);
      var content = entryView.render().$el;
      that.$('#entries-list').append(content);
    });

    return this;
  },

  refresh: function(){
    this.feed.fetch();
  },

  remove: function (event) {
    var that = this
    this.entryViews.forEach(function(entryView) {
      entryView.remove();
      var i = that.entryViews.indexOf(entryView);
      that.entryViews.splice(i, 1);
    });

    this.$el.remove();
    this.stopListening();
    return this;
  },

  delete: function (event) {
    var id = event.currentTarget.attr('id');
    var feed = NewReader.feeds.get(id);
    feed.destroy({
      success: function () {
        console.log("destroyed!");
      }
    })
  }

});