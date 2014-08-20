window.NewReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    console.log('Hello from Backbone!');
    NewReader.router = new NewReader.Routers.FeedsRouter({ $el: $('#content') });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  NewReader.initialize();
});
