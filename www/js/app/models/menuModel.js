/**
 * <Describe file contents>
 * @lobocroiden
 *
 */

 (function(W){
	 'use strict';

	 define(['Backbone'],function(Backbone){
		var menuModel = Backbone.Model.extend({
			initialize : function () {
				console.log('menuModel initialize');
			},
			defaults : {
				imageTarget:"",
				imageSrc:"",
				dataTarget:"",
				header:"",
				description:"",
				modal:true,
				id:'',
        listClass:'',
        heading:'',
        class:''
			}
		});
		return menuModel;
	 });
 })(window);
