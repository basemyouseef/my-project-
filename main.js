mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}

const navbar = document.querySelector(".navbar")
window.addEventListener("scroll", () => {
  if (scrollY > 62) {
    navbar.classList.add("fixed")
  } else {
    navbar.classList.remove("fixed")
    
  }
})