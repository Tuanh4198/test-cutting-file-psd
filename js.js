$(function() {

	let tab_btn = $(".content-2 .menu-content ul li"); 
	let tab = $(".content-2 .tabs .service");
	let up_btn = $("body .up");
	let body = $('body,html');
	

	console.log(tab_btn);
	console.log(tab);
	console.log(up_btn);

	tab_btn.on('click', function(event) {
		event.preventDefault();
		tab.removeClass('active');
		tab_btn.removeClass("active-btn");
		$(this).addClass('active-btn');
		vitritab = $(this).index();
		tab.eq(vitritab).addClass('active');
		// console.log(tab.eq(vitritab));
	});

	up_btn.click(function(event) {
		/* Act on the event */
		// console.log("da ok");
		body.scrollTop(0);
	});

	$(window).scroll(function(event) {
		let startpage = body.scrollTop();
		if(startpage > 10)
		{
			$('header .banner-top').addClass('fixed');
		}
		else{
			$('header .banner-top').removeClass('fixed');
		}
		console.log(startpage);
	});
});