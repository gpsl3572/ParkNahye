AOS.init();
    
var swiper = new Swiper(".mySwiper", {
        loop: false,
        spaceBetween: 30,
        slidesPerView: 1.2,
        pagination: {
        el: ".swiper-pagination",
      },
});


// mo btn 

const btnEl = document.querySelector('.mo_menubtn');
const Menu = document.querySelector('.mo_menuwrap');
const delEl = document.querySelector('.mo_delbtn');
const motextAll = document.querySelectorAll('.mo_menutext');


btnEl.addEventListener('click',()=>{
    Menu.classList.add("pop");
});

delEl.addEventListener('click',()=>{
    Menu.classList.remove("pop");
});



for( let i = 0; i<motextAll.length; i++ ){
    motextAll[i].addEventListener('click',()=>{
        Menu.classList.remove("pop");
    });
};


