/**
 * <Describe file contents>
 * @lobocroiden
 *
 */
(function (W) {

	define(["app/views/listStoryView"],
	function(ListStoryView){

		var menu = new ListStoryView({
			el : $('#listStoryItems')
		});

		$.material.init();

	});

})(window);
