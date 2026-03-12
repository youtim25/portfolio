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

        }
    });
}, observerOptions);

const sections = document.querySelectorAll('.section');
sections.forEach(section => {
    observer.observe(section);
});
document.querySelectorAll('details').forEach((detail) => {
    detail.addEventListener('toggle', () => {
        if (detail.open) {
            // On attend un peu que l'animation d'ouverture commence
            setTimeout(() => {
                const rect = detail.getBoundingClientRect();
                // Si le menu est trop bas dans l'écran (plus bas que le milieu)
                if (rect.bottom > window.innerHeight * 0.8 || rect.top < 100) {
                    detail.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center' // Place le menu au centre de l'écran
                    });
                }
            }, 150); // Délai légèrement augmenté pour la fluidité
        }
    });
});

