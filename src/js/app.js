import * as webpFuncs from './modules/webpFunctions.js';

webpFuncs.isWebp();

$(document).ready(function () {
  $('.media-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  });
  $('.slick-prev').html('<img src="img/arrow-left.svg" />');
  $('.slick-next').html('<img src="img/arrow-right.svg" />');
});
