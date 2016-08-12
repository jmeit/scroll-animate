/* -------------------------------
-----   Scroll Slideshow   -----
--------------------------------*/
var $scrollLoop = $('.myLoopingSlideshow');

if ($scrollLoop.length > 0) {

	var wH = window.innerHeight,
		scrollY = $(window).scrollTop(),
		bufferH = Math.floor(wH / 5),
		loopWrapBottomY = $scrollLoop.offset().top + $scrollLoop.outerHeight(),
		$lis = $scrollLoop.find('li'),
		calcH = wH + scrollY - bufferH;

	if (calcH > loopWrapBottomY) {
		$lis.siblings('.active').removeClass('active');
		$lis.last().addClass('active');
	}

	$(window).scroll(function (e) {
		scrollLoop();
	});
}

});

function scrollLoop(t) {
	requestAnimationFrame(function(t){
		var wH = window.innerHeight,
			scrollY = $(window).scrollTop(),
			bufferH = Math.floor(wH / 5),
			$scrollLoop = $('.myLoopingSlideshow'),
			loopH = $scrollLoop.outerHeight(),
			loopWrapTopY = $scrollLoop.offset().top,
			loopWrapBottomY = loopWrapTopY + loopH,
			$lis = $scrollLoop.find('li'),
			segH = loopH / $lis.length,
			calcH = wH + scrollY - bufferH,
			i = 0;

		if (calcH > loopWrapTopY && calcH < loopWrapBottomY) {
			for (var i = 0; i <= $lis.length; i++) {
				if (calcH > loopWrapTopY + (i * segH) && calcH < loopWrapTopY + ((i + 1) * segH)) {
					var $activeSlide = $lis.eq(i);
					if (!$activeSlide.hasClass('active')) {
						$lis.siblings('.active').removeClass('active');
						$activeSlide.addClass('active');
					}
				}
			}
		}
	});
}
