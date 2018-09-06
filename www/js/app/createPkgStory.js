/**
 * <Describe file contents>
 * @lobocroiden
 *
 */
(function (W) {

	define(["app/views/pkgStoryView"],
	function(PkgStoryView){

		var menu = new PkgStoryView({
			el : $('#pkgStoryItems')
		});

		$('.row-picture').click(function(){
			$("#imageFull").attr("src",$(this.children[0]).attr("src"));
			keySound();
		});

		$(".story-lang input[name='story-lang']").on('click', function(e){
			keySound();
		    $('#complete-dialog-story-lang').modal('hide');
		    if(this.value !== 'DEU'){
		    	requirejs(["app/createStory"]);
				$('#myStories').show();
				$('#'+pushArray[pushArray.length-1]).hide();
				pushArray[pushArray.length] = 'myStories';
				window.scrollTo(0,0);
		    }else{
		    	$('#complete-dialog-age').modal('show');
		    }
		});

		$(".story-age input[name='story-age']").on('click', function(e){
			keySound();
	    	requirejs(["app/createStory"]);
			$('#complete-dialog-age').modal('hide');
			$('#'+pushArray[pushArray.length-1]).hide();
			$('#myStories').show();
			pushArray[pushArray.length] = 'myStories';
			window.scrollTo(0,0);
		});

		$('#listenStory').on('click', function(e){
			keySound();
	    	requirejs(["app/createListStory"]);
			$('#'+pushArray[pushArray.length-1]).hide();
			$('#myListStories').show();
			pushArray[pushArray.length] = 'myListStories';
			window.scrollTo(0,0);
		});

		$.material.init();

	});

})(window);
