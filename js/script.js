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



/* modal lateliers */

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


// double click img modal

// Sélectionnez l'élément image
var image1 = document.getElementById("slide-1");

// Ajoutez un gestionnaire d'événements pour le double-clic sur l'image
image1.addEventListener("dblclick", function() {
    // Ouvrir l'image dans une nouvelle fenêtre
    window.open(this.src, "_blank");
});

var image2 = document.getElementById("slide-2");

// Ajoutez un gestionnaire d'événements pour le double-clic sur l'image
image2.addEventListener("dblclick", function() {
    // Ouvrir l'image dans une nouvelle fenêtre
    window.open(this.src, "_blank");
});

var image3 = document.getElementById("slide-3");

// Ajoutez un gestionnaire d'événements pour le double-clic sur l'image
image3.addEventListener("dblclick", function() {
    // Ouvrir l'image dans une nouvelle fenêtre
    window.open(this.src, "_blank");
});

var image4 = document.getElementById("slide-4");

// Ajoutez un gestionnaire d'événements pour le double-clic sur l'image
image4.addEventListener("dblclick", function() {
    // Ouvrir l'image dans une nouvelle fenêtre
    window.open(this.src, "_blank");
});

var image5 = document.getElementById("slide-5");

// Ajoutez un gestionnaire d'événements pour le double-clic sur l'image
image5.addEventListener("dblclick", function() {
    // Ouvrir l'image dans une nouvelle fenêtre
    window.open(this.src, "_blank");
});

var image6 = document.getElementById("slide-6");

// Ajoutez un gestionnaire d'événements pour le double-clic sur l'image
image6.addEventListener("dblclick", function() {
    // Ouvrir l'image dans une nouvelle fenêtre
    window.open(this.src, "_blank");
});

var image7 = document.getElementById("slide-7");

// Ajoutez un gestionnaire d'événements pour le double-clic sur l'image
image7.addEventListener("dblclick", function() {
    // Ouvrir l'image dans une nouvelle fenêtre
    window.open(this.src, "_blank");
});

var image8 = document.getElementById("slide-8");

// Ajoutez un gestionnaire d'événements pour le double-clic sur l'image
image8.addEventListener("dblclick", function() {
    // Ouvrir l'image dans une nouvelle fenêtre
    window.open(this.src, "_blank");
});

var image9 = document.getElementById("slide-9");

// Ajoutez un gestionnaire d'événements pour le double-clic sur l'image
image9.addEventListener("dblclick", function() {
    // Ouvrir l'image dans une nouvelle fenêtre
    window.open(this.src, "_blank");
});

var image10 = document.getElementById("slide-10");

// Ajoutez un gestionnaire d'événements pour le double-clic sur l'image
image10.addEventListener("dblclick", function() {
    // Ouvrir l'image dans une nouvelle fenêtre
    window.open(this.src, "_blank");
});

var image11 = document.getElementById("slide-11");

// Ajoutez un gestionnaire d'événements pour le double-clic sur l'image
image11.addEventListener("dblclick", function() {
    // Ouvrir l'image dans une nouvelle fenêtre
    window.open(this.src, "_blank");
});

var image12 = document.getElementById("slide-12");

// Ajoutez un gestionnaire d'événements pour le double-clic sur l'image
image12.addEventListener("dblclick", function() {
    // Ouvrir l'image dans une nouvelle fenêtre
    window.open(this.src, "_blank");
});

var image13 = document.getElementById("slide-13");

// Ajoutez un gestionnaire d'événements pour le double-clic sur l'image
image13.addEventListener("dblclick", function() {
    // Ouvrir l'image dans une nouvelle fenêtre
    window.open(this.src, "_blank");
});

var image14 = document.getElementById("slide-14");

// Ajoutez un gestionnaire d'événements pour le double-clic sur l'image
image14.addEventListener("dblclick", function() {
    // Ouvrir l'image dans une nouvelle fenêtre
    window.open(this.src, "_blank");
});
  
  
// modal projet

function togglePopupProjet1(){
    document.getElementById("myModal-1").classList.toggle("active");
    document.querySelector(".overlay").classList.toggle("active");
}

function togglePopupProjet2(){
    document.getElementById("myModal-2").classList.toggle("active");
    document.querySelector(".overlay2").classList.toggle("active");
}

function togglePopupProjet3(){
    document.getElementById("myModal-3").classList.toggle("active");
    document.querySelector(".overlay3").classList.toggle("active");
}

function togglePopupProjet4(){
    document.getElementById("myModal-4").classList.toggle("active");
    document.querySelector(".overlay4").classList.toggle("active");
}

function togglePopupProjet5(){
    document.getElementById("myModal-5").classList.toggle("active");
    document.querySelector(".overlay5").classList.toggle("active");
}