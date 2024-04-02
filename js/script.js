/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


/*==================== scroll reveal ====================*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duraction: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .veille-container, .contact form, .headingP', { origin:
'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});


/*==================== typed js ====================*/



/* modal */

function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
    document.querySelector(".overlay").classList.toggle("active");
}

function togglePopup2(){
    document.getElementById("popup-2").classList.toggle("active");
    document.querySelector(".overlay2").classList.toggle("active");
}

function togglePopup3(){
    document.getElementById("popup-3").classList.toggle("active");
    document.querySelector(".overlay3").classList.toggle("active");
}

function togglePopup4(){
    document.getElementById("popup-4").classList.toggle("active");
    document.querySelector(".overlay4").classList.toggle("active");
}

function togglePopup5(){
    document.getElementById("popup-5").classList.toggle("active");
    document.querySelector(".overlay5").classList.toggle("active");
}










var slideIndex = 1;

function togglePopup2() {
    document.getElementById("popup-2").classList.toggle("active");
    document.querySelector(".overlay").classList.toggle("active");
}

function previousSlide() {
    showSlides(slideIndex -= 1);
}

function nextSlide() {
    showSlides(slideIndex += 1);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}


// Récupérez le modal et les images
var modal = document.getElementById('popup-2');
var images = document.querySelectorAll('#slider img');

// Définissez une variable pour suivre l'index de l'image actuellement affichée
var currentSlideIndex = 0;

// Fonction pour afficher l'image appropriée dans le modal
function showSlide(slideIndex) {
    // Cachez toutes les images
    images.forEach(function(image) {
        image.style.display = 'none';
    });

    // Affichez l'image correspondant à l'index donné
    images[slideIndex].style.display = 'block';
}

// Fonction pour ouvrir le modal et afficher la première image
function openModal() {
    modal.style.display = 'block';
    showSlide(currentSlideIndex);
}

// Appeler la fonction openModal() lorsque le bouton est cliqué, ou n'importe quel autre événement pour ouvrir le modal




