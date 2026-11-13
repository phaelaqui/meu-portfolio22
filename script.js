
const elementos = document.querySelectorAll(
    ".hero-content, .about-content, .project-card, .contact-section"
);

const observer = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

elementos.forEach(elemento => {
    elemento.classList.add("hidden");
    observer.observe(elemento);
});
