

document.addEventListener('DOMContentLoaded', () => {
    let menu = document.getElementById("menu-bars");
    let navbar = document.querySelector(".navbar");


    menu.addEventListener('click', () => {
        menu.classList.toggle("fa-times");
        navbar.classList.toggle("active");
    });

    menu.addEventListener('scroll', () => {
        menu.classList.remove("fa-times");
        navbar.classList.remove("active");
    });

    document.getElementById('search-icon').onclick = ()=>{
        document.getElementById('search-form').classList.add('active');
    }

    document.getElementById('close').onclick = ()=>{
        document.getElementById('search-form').classList.remove('active');
    }

    var swiper = new Swiper(".home-slider", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 7500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        loop:true,
      });

      var swiper = new Swiper(".review-slider", {
        spaceBetween: 20,
        centeredSlides: true,
        autoplay: {
          delay: 7500,
          disableOnInteraction: false,
        },
        loop:true,
        breakpoints:{
          0:{
            slidesPerView:1,
          },
          640:{
            slidesPerView:2,
          },
          768:{
            slidesPerView:2,
          },
          1024:{
            slidesPerView:3,
          },
        },
      });


      let section = document.querySelectorAll('section');
      let navLinks = document.querySelectorAll('header .navbar a');

      window.onscroll = ()=>{
        menu.classList.remove("fa-times");
        navbar.classList.remove("active");

        section.forEach(sec =>{
          let top = window.scrollY;
          let height = sec.offsetHeight - 150;
          let offset = sec.offsetTop - 150;
          let id = sec.getAttribute("id");

          if(top >= offset){
            navLinks.forEach(links =>{
              links.classList.remove('active');
              document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
            })
          }
        })
      }
});

function loader() {
  document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeOut(){
  setInterval(loader,3000)
}

window.onload = fadeOut;


// menu.onclick = ()=>{
//     menu.classList.toggle("fa-times");
//     navbar.classList.toggle("active");
// }

