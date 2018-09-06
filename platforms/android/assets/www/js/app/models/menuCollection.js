/**
 * <Describe file contents>
 * @lobocroiden
 *
 */
 
 (function(W){
	 'use strict';
	 
	 define(['app/models/menuModel'],function(MenuModel){
		var menuCollection = Backbone.Collection.extend({
			initialize : function () {
				console.log('menuCollection initialize');
			},
			model : MenuModel
		});
		return menuCollection;
	 });
 })(window);