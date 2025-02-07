// Fonction d'animation au défilement
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.appear-on-scroll');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight) {
            section.classList.add('visible');
        }
    });
});

// Fonction pour afficher une navigation sticky lors du défilement
const navbar = document.querySelector('.navbar');
const sticky = navbar.offsetTop;

// Ajout de la classe sticky lorsque l'on fait défiler la page
window.addEventListener('scroll', function() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// Fonction pour faire disparaître la barre de navigation sticky lorsque l'on remonte
document.addEventListener('scroll', function() {
    if (window.scrollY < 50) {
        navbar.classList.remove('sticky');
    }
});

// Fonction pour gérer les animations lors du chargement de la page (faire apparaître les éléments en fade-in)
window.addEventListener('load', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        element.classList.add('visible');
    });

    const sections = document.querySelectorAll('.appear-on-scroll');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight) {
            section.classList.add('visible');
        }
    });
});

// Fonction pour afficher un "Back to Top" button après un certain défilement
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

// Fonction pour faire défiler la page jusqu'en haut quand le bouton "Back to Top" est cliqué
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});