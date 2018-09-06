/**
 * <Describe file contents>
 * @lobocroiden
 *
 */
(function (W) {

	define(["app/views/vidStoryView"],
	function(VidStoryView){

		var menu = new VidStoryView({
			el : $('#vidStoryItems')
		});
		$.material.init();

	});

})(window);
