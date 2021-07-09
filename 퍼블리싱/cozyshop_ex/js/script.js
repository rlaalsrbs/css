window.onload = function() {
	var swiper = new Swiper(".main_banner .mySwiper", {
		navigation: {
			nextEl: ".main_banner .next",
			prevEl: ".main_banner .prev",
		},
		pagination: {
          el: ".main_banner .swiper-pagination",
		  clickable : true,
        },
	});
	
	 var swiper2 = new Swiper(".tv_movie .mySwiper", {
        slidesPerView: 5,
        spaceBetween: 0,
		navigation: {
			nextEl: ".tv_movie .next",
			prevEl: ".tv_movie .prev",
		},
        pagination: {
          el: ".tv_movie .swiper-pagination",
          clickable: true,
        },
      });
};