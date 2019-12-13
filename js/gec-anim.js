jQuery(function() {

  // jQuery.ajax({
  //   url: 'js/changelog.jsonp',
  //   dataType: 'jsonp'
  // })

  jQueryanimateIn = jQuery(".animate-in");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    jQueryanimateIn.addClass("pre-animate");
  }

  jQuery(window).scroll(function(e) {
    var windowHeight = jQuery(window).height(),
      windowScrollPosition = jQuery(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    jQueryanimateIn.each(function(i, element) {
      if (jQuery(element).offset().top + animateInOffset < bottomScrollPosition) {
        jQuery(element).removeClass('pre-animate');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    jQuery('body').addClass('unsupported-os');
  }
})
jQuery(function() {

  // jQuery.ajax({
  //   url: 'js/changelog.jsonp',
  //   dataType: 'jsonp'
  // })

  jQueryanimateIns = jQuery(".animate-ins");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    jQueryanimateIns.addClass("pre-animate1");
  }

  jQuery(window).scroll(function(e) {
    var windowHeight = jQuery(window).height(),
      windowScrollPosition = jQuery(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    jQueryanimateIns.each(function(i, element) {
      if (jQuery(element).offset().top + animateInOffset < bottomScrollPosition) {
        jQuery(element).removeClass('pre-animate1');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    jQuery('body').addClass('unsupported-os');
  }
})
jQuery(function() {

  // jQuery.ajax({
  //   url: 'js/changelog.jsonp',
  //   dataType: 'jsonp'
  // })

  jQueryanimateIn1 = jQuery(".animate-in1");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    jQueryanimateIn1.addClass("pre-animate");
  }

  jQuery(window).scroll(function(e) {
    var windowHeight = jQuery(window).height(),
      windowScrollPosition = jQuery(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    jQueryanimateIn1.each(function(i, element) {
      if (jQuery(element).offset().top + animateInOffset < bottomScrollPosition) {
        jQuery(element).removeClass('pre-animate');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    jQuery('body').addClass('unsupported-os');
  }
})
jQuery(function() {

  // jQuery.ajax({
  //   url: 'js/changelog.jsonp',
  //   dataType: 'jsonp'
  // })

  jQueryanimateIn1s = jQuery(".animate-in1s");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    jQueryanimateIn1s.addClass("pre-animate1");
  }

  jQuery(window).scroll(function(e) {
    var windowHeight = jQuery(window).height(),
      windowScrollPosition = jQuery(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    jQueryanimateIn1s.each(function(i, element) {
      if (jQuery(element).offset().top + animateInOffset < bottomScrollPosition) {
        jQuery(element).removeClass('pre-animate1');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    jQuery('body').addClass('unsupported-os');
  }
})
jQuery(function() {

  // jQuery.ajax({
  //   url: 'js/changelog.jsonp',
  //   dataType: 'jsonp'
  // })

  jQueryanimateIn2 = jQuery(".animate-in2");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    jQueryanimateIn2.addClass("pre-animate");
  }

  jQuery(window).scroll(function(e) {
    var windowHeight = jQuery(window).height(),
      windowScrollPosition = jQuery(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    jQueryanimateIn2.each(function(i, element) {
      if (jQuery(element).offset().top + animateInOffset < bottomScrollPosition) {
        jQuery(element).removeClass('pre-animate');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    jQuery('body').addClass('unsupported-os');
  }
})
jQuery(function() {

  // jQuery.ajax({
  //   url: 'js/changelog.jsonp',
  //   dataType: 'jsonp'
  // })

  jQueryanimateIn2s = jQuery(".animate-in2s");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    jQueryanimateIn2s.addClass("pre-animate1");
  }

  jQuery(window).scroll(function(e) {
    var windowHeight = jQuery(window).height(),
      windowScrollPosition = jQuery(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    jQueryanimateIn2s.each(function(i, element) {
      if (jQuery(element).offset().top + animateInOffset < bottomScrollPosition) {
        jQuery(element).removeClass('pre-animate1');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    jQuery('body').addClass('unsupported-os');
  }
})


jQuery(function() {

  // jQuery.ajax({
  //   url: 'js/changelog.jsonp',
  //   dataType: 'jsonp'
  // })

  jQueryanimateIn3s = jQuery(".animate-in3s");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    jQueryanimateIn3s.addClass("pre-animate1");
  }

  jQuery(window).scroll(function(e) {
    var windowHeight = jQuery(window).height(),
      windowScrollPosition = jQuery(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    jQueryanimateIn3s.each(function(i, element) {
      if (jQuery(element).offset().top + animateInOffset < bottomScrollPosition) {
        jQuery(element).removeClass('pre-animate1');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    jQuery('body').addClass('unsupported-os');
  }
})

jQuery(function() {

  // jQuery.ajax({
  //   url: 'js/changelog.jsonp',
  //   dataType: 'jsonp'
  // })

  jQueryanimateIn4s = jQuery(".animate-in4s");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    jQueryanimateIn4s.addClass("pre-animate1");
  }

  jQuery(window).scroll(function(e) {
    var windowHeight = jQuery(window).height(),
      windowScrollPosition = jQuery(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    jQueryanimateIn4s.each(function(i, element) {
      if (jQuery(element).offset().top + animateInOffset < bottomScrollPosition) {
        jQuery(element).removeClass('pre-animate1');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    jQuery('body').addClass('unsupported-os');
  }
})


jQuery(function() {

  // jQuery.ajax({
  //   url: 'js/changelog.jsonp',
  //   dataType: 'jsonp'
  // })

  jQueryanimateIn5s = jQuery(".animate-in5s");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    jQueryanimateIn5s.addClass("pre-animate1");
  }

  jQuery(window).scroll(function(e) {
    var windowHeight = jQuery(window).height(),
      windowScrollPosition = jQuery(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    jQueryanimateIn5s.each(function(i, element) {
      if (jQuery(element).offset().top + animateInOffset < bottomScrollPosition) {
        jQuery(element).removeClass('pre-animate1');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    jQuery('body').addClass('unsupported-os');
  }
})


jQuery(function() {

  // jQuery.ajax({
  //   url: 'js/changelog.jsonp',
  //   dataType: 'jsonp'
  // })

  jQueryanimateIn6s = jQuery(".animate-in6s");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    jQueryanimateIn6s.addClass("pre-animate1");
  }

  jQuery(window).scroll(function(e) {
    var windowHeight = jQuery(window).height(),
      windowScrollPosition = jQuery(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    jQueryanimateIn6s.each(function(i, element) {
      if (jQuery(element).offset().top + animateInOffset < bottomScrollPosition) {
        jQuery(element).removeClass('pre-animate1');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    jQuery('body').addClass('unsupported-os');
  }
})


jQuery(function() {


  // jQuery.ajax({
  //   url: 'js/changelog.jsonp',
  //   dataType: 'jsonp'
  // })

  jQueryanimateIn3 = jQuery(".animate-in3");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    jQueryanimateIn3.addClass("pre-animate");
  }

  jQuery(window).scroll(function(e) {
    var windowHeight = jQuery(window).height(),
      windowScrollPosition = jQuery(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    jQueryanimateIn3.each(function(i, element) {
      if (jQuery(element).offset().top + animateInOffset < bottomScrollPosition) {
        jQuery(element).removeClass('pre-animate');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    jQuery('body').addClass('unsupported-os');
  }
})
jQuery(function() {

  // jQuery.ajax({
  //   url: 'js/changelog.jsonp',
  //   dataType: 'jsonp'
  // })

  jQueryanimateIn4 = jQuery(".animate-in4");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    jQueryanimateIn4.addClass("pre-animate");
  }

  jQuery(window).scroll(function(e) {
    var windowHeight = jQuery(window).height(),
      windowScrollPosition = jQuery(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    jQueryanimateIn4.each(function(i, element) {
      if (jQuery(element).offset().top + animateInOffset < bottomScrollPosition) {
        jQuery(element).removeClass('pre-animate');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    jQuery('body').addClass('unsupported-os');
  }
})
jQuery(function() {

  // jQuery.ajax({
  //   url: 'js/changelog.jsonp',
  //   dataType: 'jsonp'
  // })

  jQueryanimateIn5 = jQuery(".animate-in5");
  var animateOutOffset = 1;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    jQueryanimateIn5.addClass("pre-animate2");
  }

  jQuery(window).scroll(function(e) {
    var windowHeight = jQuery(window).height(),
      windowScrollPosition = jQuery(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    jQueryanimateIn5.each(function(i, element) {
      if (jQuery(element).offset().top + animateOutOffset < bottomScrollPosition) {
        jQuery(element).removeClass('pre-animate2');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    jQuery('body').addClass('unsupported-os');
  }
})
jQuery(function() {

  // jQuery.ajax({
  //   url: 'js/changelog.jsonp',
  //   dataType: 'jsonp'
  // })

  jQueryanimatemirab = jQuery(".animate-mirab");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    jQueryanimatemirab.addClass("mirab-animate1");
  }

  jQuery(window).scroll(function(e) {
    var windowHeight = jQuery(window).height(),
      windowScrollPosition = jQuery(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    jQueryanimatemirab.each(function(i, element) {
      if (jQuery(element).offset().top + animateInOffset < bottomScrollPosition) {
        jQuery(element).removeClass('mirab-animate1');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    jQuery('body').addClass('unsupported-os');
  }
})
//-----------------------------------------------------------------------
jQuery(function() {

  // jQuery.ajax({
  //   url: 'js/changelog.jsonp',
  //   dataType: 'jsonp'
  // })

  jQueryanimatemirab2 = jQuery(".animate-mirab2");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    jQueryanimatemirab2.addClass("mirab-animate2");
  }

  jQuery(window).scroll(function(e) {
    var windowHeight = jQuery(window).height(),
      windowScrollPosition = jQuery(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    jQueryanimatemirab2.each(function(i, element) {
      if (jQuery(element).offset().top + animateInOffset < bottomScrollPosition) {
        jQuery(element).removeClass('mirab-animate2');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    jQuery('body').addClass('unsupported-os');
  }
})
//-----------------------------------------------------------------------
jQuery(function() {

  // jQuery.ajax({
  //   url: 'js/changelog.jsonp',
  //   dataType: 'jsonp'
  // })

  jQueryanimatemirab3 = jQuery(".animate-mirab3");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    jQueryanimatemirab3.addClass("mirab-animate3");
  }

  jQuery(window).scroll(function(e) {
    var windowHeight = jQuery(window).height(),
      windowScrollPosition = jQuery(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    jQueryanimatemirab3.each(function(i, element) {
      if (jQuery(element).offset().top + animateInOffset < bottomScrollPosition) {
        jQuery(element).removeClass('mirab-animate3');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    jQuery('body').addClass('unsupported-os');
  }
})
//-----------------------------------------------------------------------
jQuery(function() {

  // jQuery.ajax({
  //   url: 'js/changelog.jsonp',
  //   dataType: 'jsonp'
  // })

  jQueryanimatestr = jQuery(".animate-str");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    jQueryanimatestr.addClass("str-animate");
  }

  jQuery(window).scroll(function(e) {
    var windowHeight = jQuery(window).height(),
      windowScrollPosition = jQuery(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    jQueryanimatestr.each(function(i, element) {
      if (jQuery(element).offset().top + animateInOffset < bottomScrollPosition) {
        jQuery(element).removeClass('str-animate');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    jQuery('body').addClass('unsupported-os');
  }
})
//-----------------------------------------------------------------------
jQuery(function() {

  // jQuery.ajax({
  //   url: 'js/changelog.jsonp',
  //   dataType: 'jsonp'
  // })

  jQueryanimatestr2 = jQuery(".animate-str2");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    jQueryanimatestr2.addClass("str-animate2");
  }

  jQuery(window).scroll(function(e) {
    var windowHeight = jQuery(window).height(),
      windowScrollPosition = jQuery(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    jQueryanimatestr2.each(function(i, element) {
      if (jQuery(element).offset().top + animateInOffset < bottomScrollPosition) {
        jQuery(element).removeClass('str-animate2');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    jQuery('body').addClass('unsupported-os');
  }
})
//-----------------------------------------------------------------------
jQuery(function() {

  // jQuery.ajax({
  //   url: 'js/changelog.jsonp',
  //   dataType: 'jsonp'
  // })

  jQueryanimatestr3 = jQuery(".animate-str3");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    jQueryanimatestr3.addClass("str-animate3");
  }

  jQuery(window).scroll(function(e) {
    var windowHeight = jQuery(window).height(),
      windowScrollPosition = jQuery(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    jQueryanimatestr3.each(function(i, element) {
      if (jQuery(element).offset().top + animateInOffset < bottomScrollPosition) {
        jQuery(element).removeClass('str-animate3');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    jQuery('body').addClass('unsupported-os');
  }
})
//-----------------------------------------------------------------------
jQuery(function() {

  // jQuery.ajax({
  //   url: 'js/changelog.jsonp',
  //   dataType: 'jsonp'
  // })

  jQueryanimatestr4 = jQuery(".animate-str4");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    jQueryanimatestr4.addClass("str-animate4");
  }

  jQuery(window).scroll(function(e) {
    var windowHeight = jQuery(window).height(),
      windowScrollPosition = jQuery(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    jQueryanimatestr4.each(function(i, element) {
      if (jQuery(element).offset().top + animateInOffset < bottomScrollPosition) {
        jQuery(element).removeClass('str-animate4');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    jQuery('body').addClass('unsupported-os');
  }
})
//-----------------------------------------------------------------------
jQuery(function() {

  // jQuery.ajax({
  //   url: 'js/changelog.jsonp',
  //   dataType: 'jsonp'
  // })

  jQueryanimatemirab4 = jQuery(".animate-mirab4");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    jQueryanimatemirab4.addClass("mirab-animate4");
  }

  jQuery(window).scroll(function(e) {
    var windowHeight = jQuery(window).height(),
      windowScrollPosition = jQuery(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    jQueryanimatemirab4.each(function(i, element) {
      if (jQuery(element).offset().top + animateInOffset < bottomScrollPosition) {
        jQuery(element).removeClass('mirab-animate4');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    jQuery('body').addClass('unsupported-os');
  }
})
//-----------------------------------------------------------------------
jQuery(function() {

  // jQuery.ajax({
  //   url: 'js/changelog.jsonp',
  //   dataType: 'jsonp'
  // })

  jQueryanimatemirab5 = jQuery(".animate-mirab5");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    jQueryanimatemirab5.addClass("mirab-animate5");
  }

  jQuery(window).scroll(function(e) {
    var windowHeight = jQuery(window).height(),
      windowScrollPosition = jQuery(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    jQueryanimatemirab5.each(function(i, element) {
      if (jQuery(element).offset().top + animateInOffset < bottomScrollPosition) {
        jQuery(element).removeClass('mirab-animate5');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    jQuery('body').addClass('unsupported-os');
  }
})
//-----------------------------------------------------------------------
jQuery(function() {

  // jQuery.ajax({
  //   url: 'js/changelog.jsonp',
  //   dataType: 'jsonp'
  // })

  jQueryanimatemirab6 = jQuery(".animate-mirab6");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    jQueryanimatemirab6.addClass("mirab-animate6");
  }

  jQuery(window).scroll(function(e) {
    var windowHeight = jQuery(window).height(),
      windowScrollPosition = jQuery(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    jQueryanimatemirab6.each(function(i, element) {
      if (jQuery(element).offset().top + animateInOffset < bottomScrollPosition) {
        jQuery(element).removeClass('mirab-animate6');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    jQuery('body').addClass('unsupported-os');
  }
})
//-----------------------------------------------------------------------
jQuery(function() {

  // jQuery.ajax({
  //   url: 'js/changelog.jsonp',
  //   dataType: 'jsonp'
  // })

  jQueryanimatemirab7 = jQuery(".animate-mirab7");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    jQueryanimatemirab7.addClass("mirab-animate7");
  }

  jQuery(window).scroll(function(e) {
    var windowHeight = jQuery(window).height(),
      windowScrollPosition = jQuery(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    jQueryanimatemirab7.each(function(i, element) {
      if (jQuery(element).offset().top + animateInOffset < bottomScrollPosition) {
        jQuery(element).removeClass('mirab-animate7');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    jQuery('body').addClass('unsupported-os');
  }
})
//-----------------------------------------------------------------------
jQuery(function() {

  // jQuery.ajax({
  //   url: 'js/changelog.jsonp',
  //   dataType: 'jsonp'
  // })

  jQueryanimatemirab8 = jQuery(".animate-mirab8");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    jQueryanimatemirab8.addClass("mirab-animate8");
  }

  jQuery(window).scroll(function(e) {
    var windowHeight = jQuery(window).height(),
      windowScrollPosition = jQuery(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    jQueryanimatemirab8.each(function(i, element) {
      if (jQuery(element).offset().top + animateInOffset < bottomScrollPosition) {
        jQuery(element).removeClass('mirab-animate8');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    jQuery('body').addClass('unsupported-os');
  }
})
//-----------------------------------------------------------------------
jQuery(function() {

  // jQuery.ajax({
  //   url: 'js/changelog.jsonp',
  //   dataType: 'jsonp'
  // })

  jQueryanimatemirab9 = jQuery(".animate-mirab9");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    jQueryanimatemirab9.addClass("mirab-animate9");
  }

  jQuery(window).scroll(function(e) {
    var windowHeight = jQuery(window).height(),
      windowScrollPosition = jQuery(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    jQueryanimatemirab9.each(function(i, element) {
      if (jQuery(element).offset().top + animateInOffset < bottomScrollPosition) {
        jQuery(element).removeClass('mirab-animate9');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    jQuery('body').addClass('unsupported-os');
  }
})
//-----------------------------------------------------------------------
jQuery(function() {

  // jQuery.ajax({
  //   url: 'js/changelog.jsonp',
  //   dataType: 'jsonp'
  // })

  jQueryanimatemirab10 = jQuery(".animate-mirab10");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    jQueryanimatemirab10.addClass("mirab-animate10");
  }

  jQuery(window).scroll(function(e) {
    var windowHeight = jQuery(window).height(),
      windowScrollPosition = jQuery(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    jQueryanimatemirab10.each(function(i, element) {
      if (jQuery(element).offset().top + animateInOffset < bottomScrollPosition) {
        jQuery(element).removeClass('mirab-animate10');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    jQuery('body').addClass('unsupported-os');
  }
})
//-----------------------------------------------------------------------
jQuery(function() {

  // jQuery.ajax({
  //   url: 'js/changelog.jsonp',
  //   dataType: 'jsonp'
  // })

  jQueryanimatemirab11 = jQuery(".animate-mirab11");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    jQueryanimatemirab11.addClass("mirab-animate11");
  }

  jQuery(window).scroll(function(e) {
    var windowHeight = jQuery(window).height(),
      windowScrollPosition = jQuery(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    jQueryanimatemirab11.each(function(i, element) {
      if (jQuery(element).offset().top + animateInOffset < bottomScrollPosition) {
        jQuery(element).removeClass('mirab-animate11');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    jQuery('body').addClass('unsupported-os');
  }
})
//-----------------------------------------------------------------------
jQuery(function() {

  // jQuery.ajax({
  //   url: 'js/changelog.jsonp',
  //   dataType: 'jsonp'
  // })

  jQueryanimatemirab12 = jQuery(".animate-mirab12");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    jQueryanimatemirab12.addClass("mirab-animate12");
  }

  jQuery(window).scroll(function(e) {
    var windowHeight = jQuery(window).height(),
      windowScrollPosition = jQuery(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    jQueryanimatemirab12.each(function(i, element) {
      if (jQuery(element).offset().top + animateInOffset < bottomScrollPosition) {
        jQuery(element).removeClass('mirab-animate12');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    jQuery('body').addClass('unsupported-os');
  }
})
//-----------------------------------------------------------------------
jQuery(function() {

  // jQuery.ajax({
  //   url: 'js/changelog.jsonp',
  //   dataType: 'jsonp'
  // })

  jQueryanimatemirab13 = jQuery(".animate-mirab13");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    jQueryanimatemirab13.addClass("mirab-animate13");
  }

  jQuery(window).scroll(function(e) {
    var windowHeight = jQuery(window).height(),
      windowScrollPosition = jQuery(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    jQueryanimatemirab13.each(function(i, element) {
      if (jQuery(element).offset().top + animateInOffset < bottomScrollPosition) {
        jQuery(element).removeClass('mirab-animate13');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    jQuery('body').addClass('unsupported-os');
  }
})
//-----------------------------------------------------------------------
jQuery(function() {

  // jQuery.ajax({
  //   url: 'js/changelog.jsonp',
  //   dataType: 'jsonp'
  // })

  jQueryanimatemirab14 = jQuery(".animate-mirab14");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    jQueryanimatemirab14.addClass("mirab-animate14");
  }

  jQuery(window).scroll(function(e) {
    var windowHeight = jQuery(window).height(),
      windowScrollPosition = jQuery(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    jQueryanimatemirab14.each(function(i, element) {
      if (jQuery(element).offset().top + animateInOffset < bottomScrollPosition) {
        jQuery(element).removeClass('mirab-animate14');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    jQuery('body').addClass('unsupported-os');
  }
})
//-----------------------------------------------------------------------
jQuery(function() {

  // jQuery.ajax({
  //   url: 'js/changelog.jsonp',
  //   dataType: 'jsonp'
  // })

  jQueryanimatemirab15 = jQuery(".animate-mirab15");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    jQueryanimatemirab15.addClass("mirab-animate15");
  }

  jQuery(window).scroll(function(e) {
    var windowHeight = jQuery(window).height(),
      windowScrollPosition = jQuery(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    jQueryanimatemirab15.each(function(i, element) {
      if (jQuery(element).offset().top + animateInOffset < bottomScrollPosition) {
        jQuery(element).removeClass('mirab-animate15');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    jQuery('body').addClass('unsupported-os');
  }
})
//-----------------------------------------------------------------------
jQuery(function() {

  // jQuery.ajax({
  //   url: 'js/changelog.jsonp',
  //   dataType: 'jsonp'
  // })

  jQueryanimatemirab16 = jQuery(".animate-mirab16");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    jQueryanimatemirab16.addClass("mirab-animate16");
  }

  jQuery(window).scroll(function(e) {
    var windowHeight = jQuery(window).height(),
      windowScrollPosition = jQuery(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    jQueryanimatemirab16.each(function(i, element) {
      if (jQuery(element).offset().top + animateInOffset < bottomScrollPosition) {
        jQuery(element).removeClass('mirab-animate16');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    jQuery('body').addClass('unsupported-os');
  }
})
//-----------------------------------------------------------------------
jQuery(function() {

  // jQuery.ajax({
  //   url: 'js/changelog.jsonp',
  //   dataType: 'jsonp'
  // })

  jQueryanimatemirab17 = jQuery(".animate-mirab13");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    jQueryanimatemirab13.addClass("mirab-animate17");
  }

  jQuery(window).scroll(function(e) {
    var windowHeight = jQuery(window).height(),
      windowScrollPosition = jQuery(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    jQueryanimatemirab17.each(function(i, element) {
      if (jQuery(element).offset().top + animateInOffset < bottomScrollPosition) {
        jQuery(element).removeClass('mirab-animate17');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    jQuery('body').addClass('unsupported-os');
  }
})
//-----------------------------------------------------------------------
jQuery(function() {

  // jQuery.ajax({
  //   url: 'js/changelog.jsonp',
  //   dataType: 'jsonp'
  // })

  jQueryanimatemirab18 = jQuery(".animate-mirab18");
  var animateInOffset = 100;
  // Only animate in elements if the browser supports animations
  if (browserSupportsCSSProperty('animation') && browserSupportsCSSProperty('transition')) {
    jQueryanimatemirab18.addClass("mirab-animate18");
  }

  jQuery(window).scroll(function(e) {
    var windowHeight = jQuery(window).height(),
      windowScrollPosition = jQuery(window).scrollTop(),
      bottomScrollPosition = windowHeight + windowScrollPosition;

    jQueryanimatemirab18.each(function(i, element) {
      if (jQuery(element).offset().top + animateInOffset < bottomScrollPosition) {
        jQuery(element).removeClass('mirab-animate18');
      }
    });
  });

  if (isUsingUnsupportedOS()) {
    jQuery('body').addClass('unsupported-os');
  }
})
// Called from changelog.jsonp-------------------------------------------------------------------------------------------------------------------------------
function JsonParse(data) {
  buildReleaseNotesFromData(data);
}

function buildReleaseNotesFromData(data) {
  var releases = jQuery("<ul class='releases'/>")
    .append(jQuery.map(data.releases, createRelease));

  jQuery("#changelog").empty().append(releases);
}

function createRelease(r) {
  return jQuery("<li/>")
      .append(jQuery("<div class='release-header'/>")
        .append(jQuery("<span class='release-version'/>").text(r.version))
        .append(jQuery("<span class='release-name'/>").text(r.name ? r.name : r.description))
        .append(jQuery("<span class='release-date'/>").text(r.date ? r.date : "")))
      .append(jQuery("<ul class='changes'/>")
      .append(jQuery.map(r.changes, createChange)));
}

function createChange(changeText) {
  var m = changeText.match(/^(fixed|improved|removed|added)\s*:\s*(.*)/i);

  if (m) {
    return jQuery("<li/>")
      .append(jQuery("<div class='change-label-container'/>")
        .append(jQuery("<em/>").addClass('change-label change-' + m[1].toLowerCase()).text(m[1])))
      .append(document.createTextNode(m[2]));
  }

  return jQuery("<li/>").text(changeText);
}

function isUsingUnsupportedOS() {
  // Windows XP is not supported
  var userAgent = window.navigator.userAgent;
  return userAgent.indexOf('Windows NT 5.1') > -1 ||
    userAgent.indexOf('Windows NT 5.2') > -1;
}

function browserSupportsCSSProperty(propertyName) {
  var elm = document.createElement('div');
  propertyName = propertyName.toLowerCase();

  if (elm.style[propertyName] != undefined)
    return true;

  var propertyNameCapital = propertyName.charAt(0).toUpperCase() + propertyName.substr(1),
    domPrefixes = 'Webkit Moz ms O'.split(' ');

  for (var i = 0; i < domPrefixes.length; i++) {
    if (elm.style[domPrefixes[i] + propertyNameCapital] != undefined)
      return true;
  }

  return false;
}
