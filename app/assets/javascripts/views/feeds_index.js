NewReader.Views.FeedsIndexView = Backbone.View.extend({

  template: JST['feeds_index'],

  initialize: function(){
    this.listenTo(NewReader.feeds, 'add remove sync', this.render);
  },

  events: {
    'click .delete-button':  "destroy",
    'submit #new-feed-form':  "addFeed"
  },

  render: function(){
    var content = this.template({ feeds: NewReader.feeds });

    this.$el.html(content);

    return this;
  },

  destroy: function (event) {
    var id = event.currentTarget.id;
    console.log(id);
    var feed = NewReader.feeds.get(id);
    feed.destroy({
      success: function () {
        console.log("destroyed!");
      }
    })
  },

  addFeed: function (event) {
    event.preventDefault();
    var newFeed = new NewReader.Models.Feed($("#new-feed-form").serializeJSON());

    NewReader.feeds.create(this._massageData(newFeed), {
      wait: true,
      success: function(){
        console.log("This works")
      }
    });
  },

  _massageData: function (formData) {
    var FU = {"feed": formData.attributes};
    return FU;
  }

});