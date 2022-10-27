const swiper = new Swiper(".swiper", {
  speed: 400,
  slidesPerView: 1,
  spaceBetween: 15,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  autoplay: {
    delay: 5000,
  },
});
