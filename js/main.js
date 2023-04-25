
// 메인 1 애니메이션 효과 
const fadeEls = document.querySelectorAll('.dumpling .fade-in')

fadeEls.forEach( function (fadeEls, index) {
  gsap.to(fadeEls, 1, {
    delay: (index + 1) * 0.6,
    opacity: 1
  })
});

// 메인 3 슬라이드
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

// 메인 4 슬라이드 
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

const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click', function () {
  gsap.to(window, 0.3, {
    scrollTo: 0
  });
});

window.addEventListener('scroll', function () {
  if (window.scrollY > 500) {
    gsap.to(toTopEl, 0.6, {
      opacity: 1, 
      x: 0
  });
  } else {
    gsap.to(toTopEl, 0.6, {
      opacity: 0, 
      x: 100
    });
  }
})

// 반응형 모바일 메뉴
const btnHamburger = document.querySelector('header .btn-hamburger');
const mMenu = document.querySelector('header .m-menu');
const btnClose = document.querySelector('header .btn-close')

btnHamburger.addEventListener('click', function () {
  mMenu.classList.add('active');
} );

btnClose.addEventListener('click', function () {
  mMenu.classList.remove('active');
})