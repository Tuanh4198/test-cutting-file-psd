$(function() {
	let tab_btn = $(".content-2 .menu-content ul li"); 
	let tab = $(".content-2 .tabs .service");
	let up_btn = $("body .up");
	let body = $('body,html');
	let control_menu = $("header .main-menu .logo-menu i");

	// slick slider
	$(".slides").slick({
		dots: true,
		arrows: true,
		accessibility: true,
		// autoplay: true,
		// autoplaySpeed: 5000,
		nextArrow: '.next',
        prevArrow: '.prev'
	});

	// Hiệu ứng tab
	tab_btn.on('click', function(event) {
		event.preventDefault();
		tab.removeClass('active');
		tab_btn.removeClass("active-btn");
		$(this).addClass('active-btn');
		vitritab = $(this).index();
		tab.eq(vitritab).addClass('active');
		// console.log(tab.eq(vitritab));
	});

	// nút cuộn top
	up_btn.click(function() {
		/* Act on the event */
		$('html,body').animate({scrollTop: 0}, 1000);
	});
	

	// Hiệu ứng cuộn chuột cho menu

	// $(window).scroll(function(event) {
	// 	let startpage = body.scrollTop();
	// 	if(startpage > 10)
	// 	{
	// 		$('header .banner-top').addClass('fixed');
	// 	}
	// 	else{
	// 		$('header .banner-top').removeClass('fixed');
	// 	}
	// 	console.log(startpage);
	// });

	// nut hiện menu ở màn điện thoai 
	control_menu.on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$("header .banner-top .main-menu ul").toggleClass('start-menu');
	});
});
