let header = document.querySelector('header');
window.addEventListener('scroll', ()=>{
  header.classList.toggle('shadow', window.scrollY > 0);
});
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
 });
 var swiper = new Swiper(".coming-container", {
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints:{
    0:{
      slidesPerView: 2,
    },
    568:{
      slidesPerView: 3,
    },
    768:{
      slidesPerView: 4,
    },
    968:{
      slidesPerView: 5,
    },
  }
});