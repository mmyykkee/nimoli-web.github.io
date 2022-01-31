
        var navbar =document.getElementById("navbar")
            var menu =document.getElementById("menu")

            window.onscroll = function(){
                if(window.pageYOffset >= menu.offsetTop){
                    navbar.classList.add("sticky");
            }
            else{
                navbar.classList.remove("sticky");
            }
        }
      var swiper = new Swiper(".mySwiper", {
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
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });