import * as webpFuncs from './modules/webpFunctions.js';

webpFuncs.isWebp();

$(document).ready(function () {
  $('.media-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          slidesToScroll: 1
        },
      },
    ],
  });
  $('.slick-prev').html('<img src="img/arrow-left.svg" />');
  $('.slick-next').html('<img src="img/arrow-right.svg" />');
});
