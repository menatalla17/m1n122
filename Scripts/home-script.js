const SignUp1 = document.getElementById('SignUpID');
const SignUp2 = document.getElementById('SignupID');
const slides = document.querySelectorAll('.slide'); // >> [slide1,slide2,slide3] >> [0,1,2]
let current = 0;

function showSlide(current) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === current) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

setInterval(nextSlide, 5000);
showSlide(current);

SignUp1.addEventListener("click", () => {
    window.location.href = "signup-login.html";
    })

SignUp2.addEventListener("click", () => {
    window.location.href = "signup-login.html";
    })