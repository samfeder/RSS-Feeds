NewReader.Collections.Entries = Backbone.Collection.extend({
  // initialize: function (options) {
//     this.feed = options.feed;
//   },

  url: "/api/feeds/",

  model: NewReader.Models.Entry
});

NewReader.Entries = new NewReader.Collections.Entries();