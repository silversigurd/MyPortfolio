document.addEventListener('DOMContentLoaded', (event) => {
    // Smooth scroll for navbar links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Parallax effect for the intro section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('#inicio');
        if (parallax) {
            parallax.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });

    // Carousel animation
    const carousel = document.querySelector('.carousel-container');
    const slide = document.querySelector('.carousel-slide');

    if (carousel && slide) {
        // Clone elements for infinite effect
        slide.innerHTML += slide.innerHTML;

        let position = 0;
        const speed = 1; // pixels per frame

        function moveCarousel() {
            position -= speed;

            // Reset position when full width is scrolled
            if (position <= -slide.offsetWidth / 2) {
                position += slide.offsetWidth / 2;
            }

            carousel.style.transform = `translateX(${position}px)`;
            requestAnimationFrame(moveCarousel);
        }

        moveCarousel();
    }

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            console.log('Menu button clicked');
            navLinks.classList.toggle('active');
        });
    } else {
        console.log('Menu button or nav links not found');
    }
});