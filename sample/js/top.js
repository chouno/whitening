
/* Settings
------------------------------------------------------------------------*/




/* Functions
------------------------------------------------------------------------*/




/* readyEvent
------------------------------------------------------------------------*/

$(function(){

/* load & resize & scroll & firstLoad
------------------------------------------------------------------------*/
	$w.on({
		//load
		'load' : function(){
			$('.box_gallery').magnificPopup({
				delegate: 'a',
				type: 'image',
				gallery: {
					enabled:true
				}
			});
		},
		//scroll
		'scroll' : function(){

		}
	}).superResize({
		//resize
		resizeAfter : function(){

		}
	}).firstLoad({
		//firstLoad
		pc_tab : function(){
			$(".loopSlider").slick({
				autoplay: true,
				autoplaySpeed: 0,
				arrows : false,
				dots : false,
				slidesToShow: 1,
				adaptiveHeight: true,
				speed: 20000,
				cssEase: 'linear',
			});
		},
		sp : function(){

		}
	});



});