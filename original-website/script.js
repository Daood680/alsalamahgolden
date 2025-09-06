let Navbar = document.querySelector('.navbar');
let Fabars = document.querySelector('.fa-bars');

Fabars.onclick = () =>{
    Navbar.classList.toggle("active")
};




var swiper = new Swiper(".home-slid", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});



var swiper = new Swiper(".team-slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      "0": {
        slidesPerView: 1,
        autoplay:{
            delay:700,
            disableOnInteraction:false,
        },
      },
      "768": {
        slidesPerView: 2,
          
      },
      "1020": {
        slidesPerView: 3,
          
      },
    },
  });

  /*===== MENU SHOW Y HIDDEN =====*/ 
const navMenu = document.getElementById('nav-menu'),
toggleMenu = document.getElementById('nav-toggle'),
closeMenu = document.getElementById('nav-close')

/*SHOW*/ 
toggleMenu.addEventListener('click', ()=>{
navMenu.classList.toggle('show')
})

/*HIDDEN*/
closeMenu.addEventListener('click', ()=>{
navMenu.classList.remove('show')
})

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
/*Active link*/
navLink.forEach(n => n.classList.remove('active'));
this.classList.add('active');

/*Remove menu mobile*/
navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));