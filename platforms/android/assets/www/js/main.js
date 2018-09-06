requirejs(["cordova.js"]);

requirejs.config({
    baseUrl: 'js/libs',
    paths: {
        app: '../app',
    		'hbs':'hbs',
    		json : 'json',
    },
    shim: {
        Backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'bootstrap'
        },
        material: {
            deps: ['jquery'],
            exports: 'material'
        },
        ripples: {
            deps: ['jquery'],
            exports: 'ripples'
        },
        hammer: {
            deps: ['jquery'],
            exports: 'hammer'
        },
        underscore: {
            exports: '_'
        },
        nouislider: {
            deps: ['jquery'],
            exports: 'nouislider'
          
        }
    },
	hbs: {
            templateExtension: 'html',
            disableHelpers: false,
            disableI18n: true,
            compileOptions: {}
        }
});

define(["bootstrap","material","ripples","hammer","nouislider"],function(bootstrap,material,ripples,Hammer,noUiSlider){
    $(function() {
        $.material.init();
        var speedSlider = '';
        flag = 0; flagStory = false;
        pushArray[0] = 'mainPageStory';

        function testAnim(id,x) {
          $('#'+id).removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass();
          });
         };

         testAnim('logo','bounceInRig');
         setTimeout(function(){
          testAnim('logo','swing');
           setTimeout(function(){
            testAnim('logo','swing');
           },2000);
         },1500);

        requirejs(["app/create"]);

        var myElement = document.getElementById('zoom-story');
        var mc = new Hammer.Manager(myElement);
        var pinch = new Hammer.Pinch();
        mc.add([pinch]);
        var min = 8,max = 60,size = 16.0;

        mc.on("pinchout pinchin", function(e) {
            e.preventDefault();
            if(e.type === "pinchin"){
              tempWidth = size - Number(zoomSpeed);
            }else{
              tempWidth = size + Number(zoomSpeed);
            }
            if ( tempWidth > max ) tempWidth = max;
            if ( tempWidth < min ) tempWidth = min;

            size = tempWidth;
            $( '#zoom-story' ).attr('style','font-size:'+size + 'px');
        });

        $('.button-floating').on('touchstart click', function(e){
          e.stopPropagation(); e.preventDefault();
          vibrate();
          keySound();
          callFloatButton();
        });

         function callFloatButton(){
           var $wrapper = $("#floatBtn");
            if (!$wrapper.hasClass("button-floating-clicked"))
            {
                $wrapper.attr("class", "center");
                $wrapper.toggleClass("button-floating-clicked-out");
                $(".button-sub-menu").show();
            }else{
                $(".button-sub-menu").hide();
            }
			      $('.story-mask').toggleClass("display-object");
            $wrapper.toggleClass("button-floating-clicked");
         }
		$('.button-sub').on('touchstart click', function(e){
		   e.stopPropagation(); e.preventDefault();
           if($("#floatBtn").hasClass("button-floating-clicked")){
               var color = $(this).data("color");
               var $wrapper = $("#floatBtn");
               keySound();
               $(".button-sub-menu").hide();
               $wrapper.attr("class", "center button-floating-clicked button-floating-clicked-out");
               $wrapper.addClass("button-sub-" + color + "-clicked");
               if(color === 'green'){
                 window.open('http://www.geschichtenbox.com', '_system');
                 callFloatButton();
               }else if(color === "purple"){
                 $("#complete-dialog-info").modal("show");
               }else if(color === "pink"){
                 window.open('https://www.facebook.com/geschichtenbox','_system');
                 callFloatButton();
               }
            }
         });

         $(document).mouseup(function (e)
          {
              var container = $("#floatBtn");

              if (!container.is(e.target) // if the target of the click isn't the container...
                  && container.has(e.target).length === 0) // ... nor a descendant of the container
              {
                  if(container.hasClass("button-floating-clicked")){
                    /*container=$("#complete-dialog-info");

                    if (!container.is(e.target) // if the target of the click isn't the container...
                        && container.has(e.target).length === 0) // ... nor a descendant of the container
                    {*/
                      callFloatButton();
                      keySound();
                    //}
                  }
              }
          });

        modalWindow =  function(){
          if(window.localStorage.getItem("storyLanguage")=== 'null' || window.localStorage.getItem("storyLanguage")===null){
            $("#complete-dialog-language").modal('show');
          }
          $("input[name='font-back'][value="+storyBackground+"]").prop("checked",true);
          $("input[name='font-size'][value="+storyFont+"]").prop("checked",true);
        }

        backButton = function(){
          if($(".modal").hasClass('in')){
            $(".modal").modal("hide");
            var container = $("#floatBtn");
            if(container.hasClass("button-floating-clicked")){
                callFloatButton();
            }
            return false;
          }

          var container = $("#floatBtn");
          if(container.hasClass("button-floating-clicked")){
              callFloatButton();
              return false;
          }
          appBackButton();
          return false;
        }
		    $('#readLang').on('touchstart click', function(e){
		      e.stopPropagation(); e.preventDefault();
          window.localStorage.setItem("storyLanappBackButton()guage",$("input:radio[name ='sample1']:checked").val());
        })

		    $('#mainBtn').on('touchstart click', function(e){
		      e.stopPropagation(); e.preventDefault();
          vibrate();
          keySound();
          appBackButton();
        });

        function appBackButton(){
          if(pushArray.length === 2){
            $("#mainPageStory").toggleClass("display-object");
            $('#mainBtn').hide();
            $("#pageTitle").html('');
            $("#"+pushArray[1]).hide();
            $('.navbar-img').css('left','0px');
            
          }else{
            $("#"+pushArray[pushArray.length-1]).hide();
            $("#"+pushArray[pushArray.length-2]).show();

            if(pushArray[pushArray.length-2] === 'compStory'){
              $("#story-div").show();
              $("#floatBtn").hide();
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
            }
          }

          if(pushArray[pushArray.length-1] === 'compStory'){
              $("#story-div").hide();
              $("#floatBtn").show();
              $('#storyBtn').removeClass('btn-white');
              $('body').removeClass('light-font');
          }else if(pushArray[pushArray.length-1] === 'setting'){
              $('#setBtnNav').prop('disabled', false);
          }
          window.scrollTo(0,0);
          pushArray.splice(pushArray.length-1,1);
          $("#pageTitle").html(''); 
        }
        $('#focusedInput').keyup(function(){
          if ($(this).val().length > 3)
          {
            $("#promoConfirm").prop('disabled',false);
          }else{
            $("#promoConfirm").prop('disabled',true);
          }

        });

		    $('#appClose').on('touchstart click', function(e){
		      e.stopPropagation(); e.preventDefault();
          keySound();
          navigator.app.exitApp();
        });

        $('#setBtnNav').on('touchstart click',function(e){
          e.stopPropagation();e.preventDefault();
          if(pushArray[pushArray.length-1] !== 'setting'){
            if(pushArray.length === 1){
              hideMainPage('setting');   
            } else{
              $("#"+pushArray[pushArray.length-1]).hide();
              keySound();
              $("#setting").show();
              if(pushArray[pushArray.length-1] === 'compStory'){
                $("#story-div").hide();
                $("#floatBtn").show();
                $('#storyBtn').removeClass('btn-white');
                $('body').removeClass('light-font');
              }
              pushArray[pushArray.length] = "setting";
            }  
            $("#pageTitle").html(''); 
            window.scrollTo(0,0);
            if(speedSlider === ''){
                speedSlider = document.getElementById('speedSlider');

                noUiSlider.create(speedSlider, {
                  start: [zoomSpeed],
                  range: {
                    'min': 0,
                    'max': 0.5
                  }
                });

                speedSlider.noUiSlider.on('change', function(){
                  zoomSpeed = speedSlider.noUiSlider.get();;
                  window.localStorage.setItem("zoomSpeed",zoomSpeed);
                });
              }
            } 
        });


        $(".font-back input[name='font-back']").on('click', function(e){
            keySound();
            storyBackground = this.value;
            window.localStorage.setItem("storyBackground",storyBackground);
        });


        $(".font-size input[name='font-size']").on('click', function(e){
            keySound();
            storyFont = this.value;
            window.localStorage.setItem("storyFont",storyFont);
        });

        hideMainPage = function(page){
          keySound();
          $("#mainPageStory").toggleClass("display-object");
          $('#mainBtn').show();
          $("#"+page).show();
          $('.navbar-img').css('left','60px');
          $('.navbar-img').css('position','absolute');
          pushArray[pushArray.length] = page;
          window.scrollTo(0,0);
        }

         /*$('#complete-dialog-video').on('shown.bs.modal', function() {
             $("#myVideo").html('');
         });*/
         $('#complete-dialog-video').on('hidden.bs.modal', function () {
              $('video')[0].pause();
          });

         $('#complete-dialog-listen').on('hidden.bs.modal', function () {
              $('audio')[0].pause();
          });

      });
});
