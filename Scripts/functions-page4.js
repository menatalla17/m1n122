const SignUp1 = document.getElementById('SignUpID');
const SignUp2 = document.getElementById('SignupID');
const slides = document.querySelectorAll('.slide');
let current = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
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
    window.location.href = "SignUp.html"; // link to signUp
})

SignUp2.addEventListener("click", () => {
    window.location.href = "SignUp.html"; // link to signUp
})