window.NewReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    NewReader.router = new NewReader.Routers.FeedsRouter({ $el: $('#content') });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  NewReader.initialize();
});
