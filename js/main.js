
// 메인 1 애니메이션 효과 
const fadeEls = document.querySelectorAll('.dumpling .fade-in');

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
  },
  breakpoints: {
    100: {
      slidesPerView: 1,
    },
    900: {
      slidesPerView: 2,
    },
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
  },
  breakpoints: {
    100: {
      slidesPerView: 1,
    },
    900: {
      slidesPerView: 2,
    },
  }
});

// 슬라이드 속 좋아요 버튼
const favEls = document.querySelectorAll('.favorite .material-icons');
// const heartIcons = favEls.querySelectorAll('.material-icons')

favEls.forEach(function (favEl, index) {
  favEl.addEventListener('click', function () {
    if (favEl.classList.contains('active')) {
      favEl.classList.remove('active')
      favEl.textContent = 'favorite_border'
    } else {
      favEl.classList.add('active')
      favEl.textContent = 'favorite'
    }
  });
});


const toTopEl = document.querySelector('#to-top');
const favoriteIcon = document.querySelector('#favorite-icon');

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
    gsap.to(favoriteIcon, 0.6, {
      opacity: 1, 
      x: 0
    });
  } else {
    gsap.to(toTopEl, 0.6, {
      opacity: 0, 
      x: 100
    });
    gsap.to(favoriteIcon, 0.6, {
      opacity: 0, 
      x: 100
    });
  }
})

// 인포 연도 표시
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

// 즐겨찾기 창 
const favIcon = document.querySelector('#favorite-icon');
const favView = document.querySelector('.favorite-view');
const favClose = document.querySelector('.favorite-list .btn-close')

favIcon.addEventListener('click', function () {
  favView.classList.add('active');
});

favClose.addEventListener('click', function () {
  favView.classList.remove('active');
});

// 반응형 모바일 메뉴
const btnHamburger = document.querySelector('header .btn-hamburger');
const mMenu = document.querySelector('header .m-menu');
const btnClose = document.querySelector('header .btn-close')

btnHamburger.addEventListener('click', function () {
  mMenu.classList.add('active');
});

btnClose.addEventListener('click', function () {
  mMenu.classList.remove('active');
});

const spyEl = document.querySelector('section.scroll-spy');
new ScrollMagic
  .Scene({
    triggerElement: spyEl,
    triggerHook: 0.8
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
