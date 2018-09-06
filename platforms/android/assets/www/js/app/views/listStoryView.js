/**
 * <Describe file contents>
 * @lobocroiden
 *
 */
(function (W) {
    'use strict';
	
	define(["app/models/menuModel","app/models/menuCollection",'hbs!app/templates/listStory','json!app/data/listStory.json'],
	function(MenuModel,MenuCollection,MenuTemplate,MenuJSON){
		
		var ListStoryView = Backbone.View.extend({
			template:MenuTemplate,
			initialize : function (selView) {
				console.log('ListStoryView  initialize');
				_.bindAll(this, 'render', 'select');
				this.data=MenuJSON;
				this.collection = new MenuCollection();
				this.buildModel(MenuModel);
			},
			buildModel : function (myModel) {
				for(var i=0;i<this.data.length;i++){
					var menuModel = new myModel();
					menuModel.set({
						dataTarget:this.data[i].dataTarget,
						header:this.data[i].header,
						description:this.data[i].description,
						listClass:i%2 === 0?'pink-back':'light-back'
					});
					this.collection.add(menuModel);
					this.$el.append(this.template(menuModel.toJSON()));
				}
				
			},
			events : {
				'click button' : 'select'
			},
			select : function (e) {
				if ($(e.currentTarget).val() === this.model.get('data')) {
					this.model.set('data','');
				} else {
					this.model.set('data',$(e.currentTarget).val());
				}
				this.render();
			}
		});
		return ListStoryView;
	});
})(window);