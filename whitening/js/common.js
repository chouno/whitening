
/* readyEvent
------------------------------------------------------------------------*/

$(function(){



	// smoothScroll ---------------------------//
	var	speed = 1000,
		easing = 'swing',
		pcPosition = -0,
		tabPosition = -0,
		spPosition = -70;

	// outerPageAnchorLink ---------------------------//
	if(window.location.href.split('#')[1] == undefined || window.location.href.split('#')[1].indexOf('=') == -1) {
		var $target = $('#'+window.location.href.split('#')[1]),
			adjust = (abi.pc) ? pcPosition : (abi.tab) ? tabPosition : spPosition;

		if($target.length) {
			$w.load(function(){
				var targetPosition = $target.offset().top;
				$html.add($body).animate({scrollTop: String(targetPosition + adjust)}, 10);
			});
		}
	}

	$('a').not('.noscroll').click(function(){
		var href = $(this).attr('href'),
			case1 = href.charAt(0) == '#',
			case2 = location.href.split('#')[0] == href.split('#')[0];

		if(case1 || case2) {
			if(case2)
				href = '#'+href.split('#')[1];

			$target = $(href);

			if($target.length){
				$html.add($body).not(':animated').animate({scrollTop : String($target.offset().top + (abi.pc ? pcPosition : abi.tab ? tabPosition : spPosition))},speed,easing);

				return false;
			}
		}
	});

	$('.btn_menu a').click(function(e){
		e.preventDefault();
		$('body').toggleClass('open-menu');
		$('.con_menu_sp').toggleClass('active');
	})
	$('.con_menu_sp .box_menu_sp a').click(function(e){
		$('body').removeClass('open-menu');
		$('.con_menu_sp').removeClass('active');
	})

});
