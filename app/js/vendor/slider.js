const sliderBox = document.querySelector('.slider .swiper');
if (sliderBox) {
  let slider = new Swiper(sliderBox, {
    slidesPerView: 3,
        spaceBetween: 20,
    loop: false,
    allowTouchMove: false,
    setWrapperSize: true,
    
    breakpoints: {
      320: {
        slidesPerView: 1,
        allowTouchMove: true,
        spaceBetween: 40,
        navigation: {
          prevEl: '.swiper-btn-prev',
          nextEl: '.swiper-btn-next',
        },
        pagination: {
          el: '.swiper-pagination',
          type: "fraction",
        },
      },
      1320: {
        slidesPerView: 3,
        spaceBetween: 20,
      }
    }
  })
}