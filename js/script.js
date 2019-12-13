var rellax = new Rellax('.rellax', {
  speed: 35
});

// slider-one element
$('.slider-one').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  dots: false,
  // prevArrow: '.slider-two-prev',
  // nextArrow: '.slider-two-next',
  responsive: [{
    breakpoint: 1299,
    settings: {
      arrows: false,
      slidesToShow: 1,
      dots: true
    }
  }]
});

// slider-two element
$('.slider-two').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  dots: false,
  // prevArrow: '.slider-two-prev',
  // nextArrow: '.slider-two-next',
  responsive: [{
    breakpoint: 1299,
    settings: {
      arrows: false,
      slidesToShow: 1,
      dots: true
    }
  }]
});

