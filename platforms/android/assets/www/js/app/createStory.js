/**
 * <Describe file contents>
 * @lobocroiden
 *
 */
(function (W) {

	define(["app/views/storyView"],
	function(StoryView){

		var menu = new StoryView({
			el : $('#storyItems')
		});

		$('.comp-story').on('click', function(e){
			keySound();
			$('#compStory').show();
			$('#'+pushArray[pushArray.length-1]).hide();
			$("#story-div").show();
			$("#floatBtn").hide();
			pushArray[pushArray.length] = 'compStory';

			if(storyFont === "1"){
				$( '#zoom-story' ).attr('style','font-size:10px');
			}else if(storyFont === "2"){
				$( '#zoom-story' ).attr('style','font-size:16px');
			}else if(storyFont === "3"){
				$( '#zoom-story' ).attr('style','font-size:30px');
			}

			if(storyBackground === "2"){
				$('body').toggleClass('light-font');
				$('#storyBtn').toggleClass('btn-white');
			}
		});

		$("#storyBtn").on('touchstart click',function(e){
			e.stopPropagation(); e.preventDefault();
			$('body').toggleClass('light-font');
			$('#storyBtn').toggleClass('btn-white');
		});

		$("#favBtn").on('touchstart click',function(e){
			e.stopPropagation(); e.preventDefault();
			if($("#favBtn").find('i').hasClass('mdi-action-favorite-outline')){
				$("#favBtn").find('i').addClass('mdi-action-favorite');
				$("#favBtn").find('i').removeClass('mdi-action-favorite-outline');
			}else{
				$("#favBtn").find('i').addClass('mdi-action-favorite-outline');
				$("#favBtn").find('i').removeClass('mdi-action-favorite');
			}
		});

		$.material.init();

	});

})(window);
