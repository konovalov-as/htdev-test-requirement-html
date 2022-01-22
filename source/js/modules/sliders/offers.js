export default () => {
	return new window.Swiper('.js-slider-offers', {
		autoHeight: true,
		spaceBetween: 60,
		navigation: {
			nextEl: '.js-slider-offers-next',
			prevEl: '.js-slider-offers-prev',
		},
	});
};
