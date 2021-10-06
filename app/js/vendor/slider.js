const sliderBox = document.querySelector('.slider .swiper-container');
if(sliderBox){
  let slider = new Swiper(sliderBox, {
  spaceBetween: 20,
  slidesPerView: 3,
  loop: false,
  freeMode: true,
  allowTouchMove: false,
  setWrapperSize: true,
  navigation: {
    prevEl: '.swiper-btn-prev',
    nextEl: '.swiper-btn-next',
  },
  pagination: {
    el: '.swiper-pagination',
    type: "fraction",
  },
})
}
