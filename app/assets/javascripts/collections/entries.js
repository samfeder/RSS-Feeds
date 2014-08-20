NewReader.Collections.Entries = Backbone.Collection.extend({
  url: "/api/feeds/",

  model: NewReader.Models.Entry
});