/**
 * <Describe file contents>
 * @lobocroiden
 *
 */
(function (W) {
    'use strict';

	define(["app/models/menuModel","app/models/menuCollection",'hbs!app/templates/menu','json!app/data/pkgStory.json'],
	function(MenuModel,MenuCollection,PkgTemplate,PkgJSON){

		var ListStoryView = Backbone.View.extend({
			template:PkgTemplate,
			initialize : function (selView) {
				console.log('ListStoryView  initialize');
				_.bindAll(this, 'render', 'select');
				this.data=PkgJSON;
				this.collection = new MenuCollection();
				this.buildModel(MenuModel);
			},
			buildModel : function (myModel) {
				for(var i=0;i<this.data.length;i++){
					var menuModel = new myModel();
					menuModel.set({
			            imageTarget:this.data[i].imageTarget,
			            imageSrc:this.data[i].imageSrc,
			            dataTarget:this.data[i].dataTarget,
			            header:this.data[i].header,
			            description:this.data[i].description,
			            modal:this.data[i].modal,
			            id:this.data[i].id,
			            listClass:this.data[i].listClass,
			            heading:this.data[i].heading,
			            class:this.data[i].class
					});
					this.collection.add(menuModel);
					this.$el.append(this.template(menuModel.toJSON()));
				}

			},
			events : {
				'click .list-group-item' : 'select'
			},
			select : function (e) {
				$("#pageTitle").html($(e.currentTarget).find('h4').text());
			}
		});
		return ListStoryView;
	});
})(window);
