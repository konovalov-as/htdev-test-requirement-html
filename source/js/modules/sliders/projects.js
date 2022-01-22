export default () => {
	return new window.Swiper('.js-slider-projects', {
		navigation: {
			nextEl: '.js-slider-projects-next',
			prevEl: '.js-slider-projects-prev',
		},
	});
};
