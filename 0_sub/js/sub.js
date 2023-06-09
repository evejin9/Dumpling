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

// 스토어 이미지 슬라이드
new Swiper('.store-slide .swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  navigation: {
    nextEl: '.store-slide .swiper-button-next',
    prevEl: '.store-slide .swiper-button-prev',
  }
})

// 좋아요 버튼 누를 때 
const storeFvEl = document.querySelector('.store-btns .favorite.btn');
const fvBtn  = storeFvEl.querySelector('.material-icons');
const fvNumber = storeFvEl.querySelector('.favorite-number');
  
  storeFvEl.addEventListener('click', function () {
    if (fvBtn.classList.contains('active')) {
      fvBtn.classList.remove('active');
      fvBtn.textContent = 'favorite_border';
      fvNumber.textContent = '좋아요(176)'
    } else {
      fvBtn.classList.add('active');
      fvBtn.textContent = 'favorite';
      fvNumber.textContent = '좋아요(177)'
    }
  })

// 공유 모달창
const storeShareEl  = document.querySelector('.store-btns .share.btn');
const shareModal  = document.querySelector('#share-modal');
const shareClose = shareModal.querySelector('.share-modal_bg .btn-close');

storeShareEl.addEventListener('click', function () {
  shareModal.classList.add('active');
});

shareClose.addEventListener('click', function () {
  shareModal.classList.remove('active');
});
  
  
// 리뷰 더보기 버튼

const commentMore = document.querySelectorAll('.comments .comment.more');
const moreEl = document.querySelector('.more-review');
const moreBtn = moreEl.querySelector('.material-icons');

console.log(commentMore);


commentMore.forEach(function (comment, index) {
  moreEl.addEventListener('click', function () {
    if (comment.classList.contains('hide')) {
      comment.classList.remove('hide')
      moreBtn.textContent = 'arrow_drop_up';
    } else {
      comment.classList.add('hide')
      moreBtn.textContent = 'arrow_drop_down';
    }
  })
})

// 스크롤 시 보이기
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