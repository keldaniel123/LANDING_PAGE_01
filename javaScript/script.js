// const Swiper = document.getElementsByClassName ('.swiper');
var mySwiper = new Swiper (".comment", {
  slidesPerView: 1,
  grabCursor: true,
  centerSlide: true,
  spaceBetween: 15,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var mySwiper = new Swiper (".stories", {
  slidesPerView: 4,
  grabCursor: true,
  centerSlide: true,
  spaceBetween: 25,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1.2,
      spaceBetween: 40, 
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  1024: {
    slidesPerView: 3,
    spaceBetween: 25,
  },
  1076: {
    slidesPerView: 4,
    spaceBetween: 15,
  }
    
  }
});

const accordionContent = document.getElementsByClassName ('accordion-content');

for (i = 0; i < accordionContent.length; i++){
    accordionContent[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}

