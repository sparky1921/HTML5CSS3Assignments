const mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  effect: 'coverflow', 
  autoplay: {
      delay: 5000,
      disableOnInteraction: false,
  },

  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  }
});

  

  