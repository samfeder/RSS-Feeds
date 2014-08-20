NewReader.Views.FeedsIndexView = Backbone.View.extend({

  template: JST['feeds_index'],

  initialize: function(){

    this.listenTo(NewReader.feeds, 'sync', this.render);

  },

  render: function(){
    var content = this.template({ feeds: NewReader.feeds });

    this.$el.html(content);

    return this;
  }

});