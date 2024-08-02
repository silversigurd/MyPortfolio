document.addEventListener('DOMContentLoaded', (event) => {
    // Scroll suave para los enlaces del navbar
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Efecto parallax para la sección de inicio
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('#inicio');
        parallax.style.transform = `translateY(${scrolled * 0.3}px)`;
    });

    // Animación de entrada para los elementos
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {threshold: 0.1});

    document.querySelectorAll('.seccion').forEach(section => {
        observer.observe(section);
    });
});

// Añade la clase 'visible' a los elementos cuando entran en el viewport
function handleScroll() {
    const sections = document.querySelectorAll('.seccion');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0);
        if (isVisible) {
            section.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);


document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-container');
    const slide = document.querySelector('.carousel-slide');
    
    // Clonar los elementos para crear un efecto infinito
    slide.innerHTML += slide.innerHTML;

    let position = 0;
    const speed = 1; // píxeles por frame

    function moveCarousel() {
        position -= speed;
        
        // Si hemos desplazado todo el ancho original, reseteamos la posición
        if (position <= -slide.offsetWidth / 2) {
            position += slide.offsetWidth / 2;
        }
        
        carousel.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(moveCarousel);
    }

    moveCarousel();

    // Pausar el carrusel cuando el mouse está sobre él
    carousel.addEventListener('mouseenter', () => {
        speed = 0;
    });

    // Reanudar el carrusel cuando el mouse sale
    carousel.addEventListener('mouseleave', () => {
        speed = 1;
    });
});