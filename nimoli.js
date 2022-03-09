$('.btns').click(function(){
  $(this).toggleClass("click");
  $('.sidebar').toggleClass("show");
});
  $('.feat-btn').click(function(){
    $('nav ul .feat-show').toggleClass("show");
    $('nav ul .first').toggleClass("rotate");
  });
  $('.serv-btn').click(function(){
    $('nav ul .serv-show').toggleClass("show1");
    $('nav ul .second').toggleClass("rotate");
  });
  $('nav ul li').click(function(){
    $(this).addClass("actives").siblings().removeClass("actives");
  });


const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
  navbar.classList.add("sticky")
  } else {
  navbar.classList.remove("sticky");
  }
};
var Swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
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
var container = document.getElementById("containers");
var slider = document.getElementById("slider");
var slides = document.getElementsByClassName("sliders").length;
var buttons = document.getElementsByClassName("btn");

var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var containerWidth = container.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
  containerWidth = container.offsetWidth;
  setParams(containerWidth);
}

function setParams(w) {
  if (w < 551) {
    slidesPerPage = 1;
  } else {
    if (w < 901) {
      slidesPerPage = 2;
    } else {
      if (w < 1101) {
        slidesPerPage = 3;
      } else {
        slidesPerPage = 4;
      }
    }
  }
  slidesCount = slides - slidesPerPage;
  if (currentPosition > slidesCount) {
    currentPosition -= slidesPerPage;
  }
  currentMargin = -currentPosition * (100 / slidesPerPage);
  slider.style.marginLeft = currentMargin + "%";
  if (currentPosition > 0) {
    buttons[0].classList.remove("inactive");
  }
  if (currentPosition < slidesCount) {
    buttons[1].classList.remove("inactive");
  }
  if (currentPosition >= slidesCount) {
    buttons[1].classList.add("inactive");
  }
}

setParams();

function slideRight() {
  if (currentPosition != 0) {
    slider.style.marginLeft = currentMargin + 100 / slidesPerPage + "%";
    currentMargin += 100 / slidesPerPage;
    currentPosition--;
  }
  if (currentPosition === 0) {
    buttons[0].classList.add("inactive");
  }
  if (currentPosition < slidesCount) {
    buttons[1].classList.remove("inactive");
  }
}

function slideLeft() {
  if (currentPosition != slidesCount) {
    slider.style.marginLeft = currentMargin - 100 / slidesPerPage + "%";
    currentMargin -= 100 / slidesPerPage;
    currentPosition++;
  }
  if (currentPosition == slidesCount) {
    buttons[1].classList.add("inactive");
  }
  if (currentPosition > 0) {
    buttons[0].classList.remove("inactive");
  }
}

var menu = document.querySelector("#menu");
var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
  menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
    
