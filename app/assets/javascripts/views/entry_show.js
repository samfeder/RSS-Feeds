NewReader.Views.EntryShowView = Backbone.View.extend({

  template: JST['entry_show'],

  initialize: function(entry){
    this.entry = entry
    this.listenTo(this, "sync", this.render);
  },

  render: function(){
    var content = this.template({ entry: this.entry });

    this.$el.html(content);

    return this;
  }
});