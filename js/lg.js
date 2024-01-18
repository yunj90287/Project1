$(function(){
	/* main slider */
	let mainCurrent, mainTotal;
	const mainSwiper=new Swiper(".mainSwiper",{
		autoplay: {
			delay: 5000
		},
		pagination: {
			el: ".mainSwiper .swiper-pagination",
			clickable: true,
		},
		on: {
			init: function() {
				mainCurrent=this.realIndex+1;
				mainTotal=this.slides.length;
				$(".main_slider .account .current").text(mainCurrent);
				$(".main_slider .account .total").text(mainTotal);
			},

			slideChangeTransitionEnd: function(){
				mainCurrent=this.realIndex+1;
				$(".main_slider .account .current").text(mainCurrent);
			}
		},
		observer: true,	
		observeParents: true,
	});

	$(".main_slider .prev").click(function(e){
		e.preventDefault();
		mainSwiper.slidePrev();
	});
	$(".main_slider .next").click(function(e){
		e.preventDefault();
		mainSwiper.slideNext();
	});

	$("#pause_play").click(function(e){
		e.preventDefault();

		if($(this).hasClass("play")){
			$(this).removeAttr("class");
			$(this).addClass("pause");
			$(this).text("pause");
			mainSwiper.autoplay.start();
		}
		else{
			$(this).removeAttr("class");
			$(this).addClass("play");
			$(this).text("play");
			mainSwiper.autoplay.stop();
		}
	});

	/* gnb */
	
	$("#gnb > ul > li").hover(
		function(){
			$("#main header").addClass("active")
		},
		function(){
			$("#main header").removeClass("active")
		}
	);

	let totalLi=$("#gnb > ul > li").length;

	$("#gnb > ul > li > a").focusin(function(){
		$(this).parent().addClass("active");

		if($(this).parent().index() === 0){
			$("#main header").addClass("active");
		}
	});


	let wint=0;

	$("#gnb li li:last-child").focusout(function(){
		$(this).parent().parent().removeClass("active");

		if($(this).parent().parent().index() === (totalLi-1)){
			$("#main header").removeClass("active");
		}
	});

	/* sub slider */
	const subSwiper=new Swiper(".subSwiper", {
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},

		scrollbar: {
			el:'.subSwiper .swiper-scrollbar',
			draggable: true,
			hide: false
		},
		slidesPerView: 1,	
		spaceBetween: 20,
		centeredSlides: true,
		pagination: {
			el: ".subSwiper .swiper-pagination",
			clickable: true,
			type: "fraction"
		},	
		breakpoints: {
			600: {	
				slidesPerView: 1.5,
				initialSlide: 1,
				centeredSlides: true,
				
			},
			797: {
				slidesPerView: 3,
				centeredSlides: false,
			},

			985: { 
				slidesPerView: 4,
				centeredSlides: false,
			},
		}
	});
	$(".sub_slider .prev").click(function(e){
		e.preventDefault();
		subSwiper.slidePrev();
	});
	$(".sub_slider .next").click(function(e){
		e.preventDefault();
		subSwiper.slideNext();
	
});

/* family site */

	$(".family_site a").click(function(e){
		e.preventDefault();

		if($(".popup ul").hasClass("active") == false){
			$(".popup ul").addClass("active");
			$(".popup ul").slideDown(300);
			$(".family_site img").addClass("active");
		}
		else{
			$(".popup ul").removeClass("active");
			$(".popup ul").slideUp(300);
			$(".family_site img").removeClass("active");
		}
	});

/* mobile list */

	$("#mobile nav > ul > li").click(function(e){
		e.preventDefault();

		if($(this).hasClass("active") == false) {
			$("#mobile nav > ul > li").removeClass("active"); 
			$(this).addClass("active");
			$("#mobile nav ul ul").slideUp(300);
			$(this).children("ul").slideDown(300);
		}
		else{
			$(this).removeClass("active");
			$(this).children("ul").slideUp(300);
		}
	});


/* sitemap resize */
	let mobile=false;
	let dw;

	$(window).resize(function(){
	dw=$(window).width();

	if(dw < 1280){
		if($("#sitemap").hasClass("active")){
			$("#sitemap").removeClass("active");
			$("body").removeClass("fixed");
			$(this).removeClass("close");
			$(".dim").removeClass("active");
		}
		if(mobile === false) mobile=true;
		
		}
		else{
			if(mobile === true) mobile=false;
			$("body").removeClass("fixed");
		}

		if(dw > 900){
			if($("#mobile").hasClass("active")) $("#mobile").removeClass("active");
			$(".dim").removeClass("active");
		}
	});

	$(window).trigger("resize");

	/* tab, exit, dim */
	$("#tab").click(function(e){ 
		e.preventDefault();

		if(mobile === false){
			$("#sitemap").addClass("active");
			$(".dim").addClass("active");
		}
		else {
			$("#sitemap").removeClass("active");
			$("#mobile").addClass("active");
			$("body").addClass("fixed");
			$(".dim").addClass("active");
		}
	});


	$("#exit").click(function(e){
	e.preventDefault();
		$("#sitemap").removeClass("active");
		$(".dim").removeClass("active");
		$("#mobile").removeClass("active");	
		
	});

	$("#m_exit").click(function(e){
	e.preventDefault();
		$("#mobile").removeClass("active");	
		$(".dim").removeClass("active");
		$("body").removeClass("fixed");
	});

	$(".dim").click(function(e){
		e.preventDefault();
		$("#sitemap").removeClass("active");
		$("#mobile").removeClass("active");
		$(".dim").removeClass("active");
		$("body").removeClass("fixed");
	});


});