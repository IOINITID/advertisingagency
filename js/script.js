// header parallax
var rellax = new Rellax('.rellax', {
  speed: 35
});
// slider-one
$('.slider-one').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  dots: false,
  responsive: [{
    breakpoint: 1299,
    settings: {
      arrows: false,
      slidesToShow: 1,
      dots: true
    }
  }]
});
// slider-two
$('.slider-two').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  dots: false,
  responsive: [{
    breakpoint: 1299,
    settings: {
      arrows: false,
      slidesToShow: 1,
      dots: true
    }
  }]
});

