document.addEventListener('DOMContentLoaded', () => {
    const langElements = document.querySelectorAll('.lang');

    // Default language
    let currentLanguage = 'es';

    // Translations
    const translations = {
        es: {
            welcome: "Bienvenido a mi Portafolio",
            proyectos_title: "Mis Proyectos",
            project1_description: "Descripción del proyecto 1...",
            project2_description: "Descripción del proyecto 2...",
            project3_description: "Descripción del proyecto 3...",
            sobre_mi_title: "Sobre mí",
            sobre_mi_paragraph1: "Actualmente me desempeño como Desarrollador de Software...",
            contacto_title: "Información de Contacto",
            contact_message: "¿Quieres contactarme?",
            contact_message_paragraph: "Estoy siempre abierto a nuevas oportunidades y colaboraciones. No dudes en enviarme un mensaje.",
            contact_button: "Enviar correo",
        },
        en: {
            welcome: "Welcome to my Portfolio",
            proyectos_title: "My Projects",
            project1_description: "Description of project 1...",
            project2_description: "Description of project 2...",
            project3_description: "Description of project 3...",
            sobre_mi_title: "About Me",
            sobre_mi_paragraph1: "Currently working as a Software and Application Developer...",
            contacto_title: "Contact Information",
            contact_message: "Want to contact me?",
            contact_message_paragraph: "I am always open to new opportunities and collaborations. Feel free to send me a message.",
            contact_button: "Send Email",
        },
    };

    // Update page content
    const updateContent = (language) => {
        langElements.forEach(element => {
            const key = element.getAttribute('key');
            if (translations[language][key]) {
                element.textContent = translations[language][key];
            }
        });

        // Update project titles and descriptions
        const projectTitles = document.querySelectorAll('#proyectos .proyecto h3');
        const projectDescriptions = document.querySelectorAll('#proyectos .proyecto p');

        projectTitles[0].textContent = language === 'es' ? 'Proyecto 1' : 'Project 1';
        projectTitles[1].textContent = language === 'es' ? 'Proyecto 2' : 'Project 2';
        projectTitles[2].textContent = language === 'es' ? 'Proyecto 3' : 'Project 3';

        projectDescriptions[0].textContent = translations[language]['project1_description'];
        projectDescriptions[1].textContent = translations[language]['project2_description'];
        projectDescriptions[2].textContent = translations[language]['project3_description'];

        // Update About Me section title
        const aboutMeTitle = document.querySelector('#sobre-mi h2');
        aboutMeTitle.textContent = translations[language]['sobre_mi_title'];

        // Update Contact section 
        const contactTitle = document.querySelector('#contacto h2');
        contactTitle.textContent = translations[language]['contacto_title'];

        // Update contact section message
        const contactMessage = document.querySelector('.contacto-mensaje h3');
        const contactMessageParagraph = document.querySelector('.contacto-mensaje p');
        const contactButton = document.querySelector('.contacto-mensaje .btn');

        contactMessage.textContent = translations[language]['contact_message'];
        contactMessageParagraph.textContent = translations[language]['contact_message_paragraph'];
        contactButton.textContent = translations[language]['contact_button'];

        // Update the active button class
        const spanishButton = document.getElementById('language-toggle-es');
        const englishButton = document.getElementById('language-toggle-en');

        if (language === 'es') {
            spanishButton.classList.add('active');
            englishButton.classList.remove('active');
        } else {
            englishButton.classList.add('active');
            spanishButton.classList.remove('active');
        }

        // Store current language in localStorage
        localStorage.setItem('selectedLanguage', language);
        currentLanguage = language;
    };

    // Language toggle buttons
    const spanishButton = document.getElementById('language-toggle-es');
    const englishButton = document.getElementById('language-toggle-en');

    spanishButton.addEventListener('click', () => {
        updateContent('es');
    });

    englishButton.addEventListener('click', () => {
        updateContent('en');
    });

    // Initialize language from localStorage or default to Spanish
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'es';
    updateContent(savedLanguage);
});
