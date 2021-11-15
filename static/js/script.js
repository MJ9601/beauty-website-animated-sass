
document.querySelector('.fas').addEventListener('click', () => {
  document.querySelector('.collapse-nav').classList.toggle('active');
  document.querySelector('.fas').classList.toggle('fa-times');
  document.querySelector(".navbar").classList.toggle("collapsed");
})

window.onscroll = () => {
  if(window.scrollY > 120){
    document.querySelector('.navbar').classList.add('active');
  }else{
    document.querySelector('.navbar.active').classList.remove('active');
  }
  document.querySelector('.collapse-nav.active').classList.remove('active');
  document.querySelector('.fas.fa-times').classList.remove('fa-times');
}


var swiper = new Swiper(".brandSwiper", {
  // slidesPerView: 1,
  // spaceBetween: 10,
  freeMode: true,
  loopFillGroupWithBlank: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});
var swiper = new Swiper(".modelSwiper", {
  // slidesPerView: 1,
  // spaceBetween: 10,
  freeMode: true,
  loopFillGroupWithBlank: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});