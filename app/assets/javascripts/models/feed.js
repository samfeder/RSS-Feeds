NewReader.Models.Feed = Backbone.Model.extend({
  urlRoot: "api/feeds",

  entries: function () {
    if (!this._entries) {
      this._entries = new NewReader.Collections.Entries({}, { feed: this });
    }

    return this._entries;
  },

  parse: function (response) {
    if (response.latest_entries) {
      console.log("parsing feed");
      this.entries().set(response.latest_entries, { parse: true });
      delete response.latest_entries;
    }
    return response;
  }
});