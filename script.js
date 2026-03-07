// script.js

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // Se déclenche quand 15% de la section est visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Optionnel : arrêter d'observer une fois visible pour ne pas relancer l'animation
            // observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

const sections = document.querySelectorAll('.section');
sections.forEach(section => {
    observer.observe(section);
});