new Swiper('.new-map .swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 6000
  },
  slidePerview: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});