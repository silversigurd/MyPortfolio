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

    const images = [
        { src: "../dist/images/logos/sql.png", alt: "SQL Server", title: "SQL Server" },
        { src: "../dist/images/logos/aspx.png", alt: "Aspx logo", title: "Aspx" },
        { src: "../dist/images/logos/bootstrap.png", alt: "Bootstrap logo", title: "Bootstrap" },
        { src: "../dist/images/logos/csharp.png", alt: "C# Logo", title: "C#" },
        { src: "../dist/images/logos/css.png", alt: "CSS Logo", title: "CSS" },
        { src: "../dist/images/logos/git.png", alt: "Git", title: "Git" },
        { src: "../dist/images/logos/github.png", alt: "GitHub", title: "GitHub" },
        { src: "../dist/images/logos/gitlab.png", alt: "GitLab", title: "GitLab" },
        { src: "../dist/images/logos/html.png", alt: "HTML 5", title: "HTML 5" },
        { src: "../dist/images/logos/js.png", alt: "JavaScript", title: "JavaScript" },
        { src: "../dist/images/logos/postman.png", alt: "Postman", title: "Postman" },
        { src: "../dist/images/logos/net.png", alt: ".NET", title: ".NET" },
    ];
    
    // Selecciona el contenedor de la diapositiva
    const slide = document.getElementById('carousel-slide');
    
    // Crea las imágenes y añádelas al contenedor
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.alt;
        imgElement.title = image.title;
        imgElement.style.width = '100px'; // Ajusta el ancho según sea necesario
        imgElement.style.margin = '0 10px'; // Margen entre imágenes
        slide.appendChild(imgElement);
    });
    
    // Clonación de imágenes para el efecto infinito
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.alt;
        imgElement.title = image.title;
        imgElement.style.width = '100px'; // Ajusta el ancho según sea necesario
        imgElement.style.margin = '0 10px'; // Margen entre imágenes
        slide.appendChild(imgElement); // Añade las imágenes clonadas
    });
    
    // Carrusel
    if (slide) {
        const totalImages = slide.children.length; // Total de imágenes (incluidas las clonadas)
        const slideWidth = slide.children[0].offsetWidth + 20; // Ancho de cada imagen más el margen
        let position = 0; // Inicializa la posición
        const speed = 0.2; // Cambia la velocidad de desplazamiento aquí
    
        function moveCarousel() {
            position -= speed; // Desplaza hacia la izquierda
    
            // Resetea la posición al alcanzar la última imagen
            if (Math.abs(position) >= slideWidth * images.length) {
                position = 0; // Resetea a la primera imagen
            }
    
            slide.style.transform = `translateX(${position}px)`;
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