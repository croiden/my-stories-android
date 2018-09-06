/**
 * <Describe file contents>
 * @lobocroiden
 *
 */
(function (W) {
    'use strict';

	define(["app/models/menuModel","app/models/menuCollection",'hbs!app/templates/menu','json!app/data/menu.json'],
	function(MenuModel,MenuCollection,MenuTemplate,MenuJSON){

		var MenuView = Backbone.View.extend({
			template:MenuTemplate,
			initialize : function (selView) {
				console.log('MenuView  initialize');
				_.bindAll(this, 'render', 'select');
				this.data=MenuJSON;
				this.collection = new MenuCollection();
				this.buildModel(MenuModel);
			},
			buildModel : function (myModel) {
				var color = false;
				for(var i=0;i<this.data.length;i++){
					var menuModel = new myModel();

					if(this.data[i].heading === 'Neue Geschichtenpakete'){
						color = true;
					}
					if(color){
						if(i % 2 === 0){
							this.data[i].listClass = 'pink-back';
						}else{
							this.data[i].listClass = 'light-back';
						}
					}
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
				'click .just-story' : 'select'
			},
			select : function (e) {
				$("#pageTitle").html($(e.currentTarget).find('h4').text());
			}
		});
		return MenuView;
	});
})(window);
