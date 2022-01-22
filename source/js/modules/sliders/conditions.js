export default () => {
	return new window.Swiper('.js-slider-conditions', {
		autoHeight: true,
		spaceBetween: 60,
		navigation: {
			nextEl: '.js-slider-conditions-next',
			prevEl: '.js-slider-conditions-prev',
		},
	});
};
