const fadeEls = document.querySelectorAll('.dumpling .fade-in')

fadeEls.forEach( function (fadeEls, index) {
  gsap.to(fadeEls, 1, {
    delay: (index + 1) * 0.6,
    opacity: 1
  })
});

new Swiper('.new-map .swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 6000
  },
  slidesPerView: 2,
  spaceBetween: 0,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

new Swiper('.best-product .swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 6000
  },
  slidesPerView: 2,
  spaceBetween: 0,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});