MyApp = new Backbone.Marionette.Application();

MyApp.addRegions({
  mainRegion: "#content"
});

AngryCat = Backbone.Model.extend({});

AngryCats = Backbone.Collection.extend({
  model: AngryCat
});

AngryCatView = Backbone.Marionette.ItemView.extend({
  template: "#angry_cat-template",
  tagName: 'tr',
  className: 'angry_cat'
});

AngryCatsView = Backbone.Marionette.CompositeView.extend({
  tagName: "table",
  id: "angry_cats",
  className: "table-striped table-bordered",
  template: "#angry_cats-template",
  itemView: AngryCatView,
  
  appendHtml: function(collectionView, itemView){
    collectionView.$("tbody").append(itemView.el);
  }
});
