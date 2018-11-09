import "jquery";
import sayHello from "./lib/sayHello.js";
import "owl.carousel";

sayHello();

function stopDefAction(evt) {
  evt.preventDefault();
}

// contact more map btn
$(document).on("click", ".js--contact-more", function(e) {
  //console.log($(this));
  let map = $(this)
    .parent()
    .parent()
    .find(".contact__more-map");
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
    map.slideUp();
    $(this).text("Смотреть на карте");
  } else {
    $(this).addClass("active");
    map.slideDown();
    $(this).text("Свернуть");
  }
  console.log(map);
});

// pti review carousel
$(".js--pti-review").owlCarousel({
  loop: false,
  margin: 10,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
      stagePadding: 0,
      nav: true
    },
    576: {
      items: 1,
      stagePadding: 0,
      margin: 20,
      nav: false
    },
    992: {
      items: 1,
      stagePadding: 0,
      margin: 20,
      nav: false
    }
  }
});

// pti portfolio carousel
$(".js--pti-slider").owlCarousel({
  loop: false,
  margin: 10,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
      stagePadding: 0,
      nav: true
    },
    576: {
      items: 2,
      stagePadding: 0,
      margin: 20,
      nav: false
    },
    992: {
      items: 3,
      stagePadding: 0,
      margin: 20,
      nav: false
    }
  }
});

// product carousel
$(".js--pcslider-product").owlCarousel({
  loop: false,
  margin: 10,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
      stagePadding: 0
    },
    576: {
      items: 2,
      stagePadding: 0,
      margin: 20
    },
    992: {
      items: 3,
      stagePadding: 0,
      margin: 20
    }
  }
});

// product carousel
$(".js--pcslider-product-width").owlCarousel({
  loop: false,
  margin: 10,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
      stagePadding: 0
    },
    576: {
      items: 3,
      stagePadding: 0,
      margin: 20
    },
    992: {
      items: 4,
      stagePadding: 0,
      margin: 20
    }
  }
});

// tabs
$(document).on("click", "[data-tabs-nav]", function() {
  let nTab = $(this).data("tabs-nav");

  $("[data-tabs-nav]").removeClass("active");
  $("[data-tabs-content]").removeClass("active");

  $("[data-tabs-nav=" + nTab + "]").addClass("active");
  $("[data-tabs-content=" + nTab + "]").addClass("active");
});

// plus and minus button
if ($("#num_count").length > 0) {
  var numCount = document.getElementById("num_count");
  var plusBtn = document.getElementById("button_plus");
  var minusBtn = document.getElementById("button_minus");
  plusBtn.onclick = function() {
    var qty = parseInt(numCount.value);
    qty = qty + 1;
    numCount.value = qty;
  };
  minusBtn.onclick = function() {
    var qty = parseInt(numCount.value);
    qty = qty - 1;
    numCount.value = qty;
  };
}
