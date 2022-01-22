import {iosVhFix} from './utils/ios-vh-fix';
import './vendor/swiper';
import './modules/header/bvi';

import projectsSlider from './modules/sliders/projects';
import conditionsSlider from './modules/sliders/conditions';
import offersSlider from './modules/sliders/offers';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
	// Utils
	// ---------------------------------

	iosVhFix();

	// Modules
	// ---------------------------------

	// все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
	// в load следует добавить скрипты, не участвующие в работе первого экрана
	window.addEventListener('load', () => {
		projectsSlider();
		conditionsSlider();
		offersSlider();
	});
});

// ---------------------------------

// используйте .closest(el)

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// привязывайте js не на бэм, а на data-cookie

// выносим все в data-attr - url до пинов карты, настройки автопрокрутки, url к json и т.д.


// Переключение карточек стран
