MyApp = new Backbone.Marionette.Application();

MyApp.addRegions({
  mainRegion: "#content"
});

AngryCat = Backbone.Model.extend({});

AngryCats = Backbone.Collection.extend({
  model: AngryCat
});
