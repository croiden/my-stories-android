/**
 * <Describe file contents>
 * @lobocroiden
 *
 */
(function (W) {

	define(["app/views/menuView"],
	function(MenuView){

		var menu = new MenuView({
			el : $('#menuItems')
		});

		pushArray[0] = 'mainPageStory';

		$('#promoConfirm').on('touchstart click', function(e){
			e.stopPropagation(); e.preventDefault();
			keySound();
			$('#complete-dialog-promocode').modal('hide');
			$('#complete-dialog-register').modal('show');
		});

		$('#regisConfirm').on('touchstart click', function(e){
			e.stopPropagation(); e.preventDefault();
			$('#complete-dialog-register').modal('hide');
			hideMainPage('myPkgStories');
			requirejs(["app/createPkgStory"]);
		});

		$('#regisSkip').on('touchstart click', function(e){
			e.stopPropagation(); e.preventDefault();
			$('#complete-dialog-register').modal('hide');
			hideMainPage('myPkgStories');
			requirejs(["app/createPkgStory"]);
		});
		$('#videoStory').on('click', function(e){
			hideMainPage('myVidStories');
			requirejs(["app/createVidStory"]);
		});

		$('.just-story').on('click', function(e){
			hideMainPage('myStories');
			requirejs(["app/createStory"]);
		});

		$.material.init();
	});

})(window);
