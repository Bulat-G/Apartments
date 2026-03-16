// burger menu
$('.burger').click(function (event) {
  $('.burger, .menu__list').toggleClass('active');
});

// slider variants
var swiper = new Swiper(".slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});
