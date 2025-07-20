// Language system
let currentLanguage = 'es';

const translations = {
    es: {
        // Navigation
        'Sobre mí': 'Sobre mí',
        'Estudios': 'Estudios',
        'Experiencia': 'Experiencia',
        'Proyectos': 'Proyectos',
        'Habilidades': 'Habilidades',
        'Contacto': 'Contacto',
        
        // Hero section
        'Hola, soy': 'Hola, soy',
        'Desarrollador Full Stack & Analista de Datos': 'Desarrollador Full Stack & Analista de Datos',
        'Apasionado por la tecnología, con experiencia en desarrollo web, análisis de datos y automatización. Siempre buscando nuevos desafíos y oportunidades para crecer profesionalmente.': 'Apasionado por la tecnología, con experiencia en desarrollo web, análisis de datos y automatización. Siempre buscando nuevos desafíos y oportunidades para crecer profesionalmente.',
        'Contáctame': 'Contáctame',
        'Ver Proyectos': 'Ver Proyectos',
        
        // About section
        'Sobre mí': 'Sobre mí',
        'Soy un desarrollador apasionado con experiencia en tecnologías web modernas y análisis de datos. Me especializo en crear soluciones eficientes y user-friendly que resuelvan problemas reales.': 'Soy un desarrollador apasionado con experiencia en tecnologías web modernas y análisis de datos. Me especializo en crear soluciones eficientes y user-friendly que resuelvan problemas reales.',
        'Años de Experiencia': 'Años de Experiencia',
        'Proyectos Completados': 'Proyectos Completados',
        'Tecnologías Dominadas': 'Tecnologías Dominadas',
        
        // Education section
        'Educación': 'Educación',
        'Grado Superior en Desarrollo de Aplicaciones Web': 'Grado Superior en Desarrollo de Aplicaciones Web',
        'Formación completa en desarrollo web, incluyendo frontend, backend, bases de datos y metodologías ágiles.': 'Formación completa en desarrollo web, incluyendo frontend, backend, bases de datos y metodologías ágiles.',
        'Certificaciones Técnicas': 'Certificaciones Técnicas',
        'Múltiples certificaciones en JavaScript, Python, React, Node.js y análisis de datos.': 'Múltiples certificaciones en JavaScript, Python, React, Node.js y análisis de datos.',
        
        // Experience section
        'Experiencia Profesional': 'Experiencia Profesional',
        'Desarrollador Full Stack': 'Desarrollador Full Stack',
        'Proyectos Freelance': 'Proyectos Freelance',
        'Desarrollo de aplicaciones web con React y Node.js': 'Desarrollo de aplicaciones web con React y Node.js',
        'Implementación de bases de datos y APIs RESTful': 'Implementación de bases de datos y APIs RESTful',
        'Optimización de rendimiento y SEO': 'Optimización de rendimiento y SEO',
        'Analista de Datos': 'Analista de Datos',
        'Proyectos de Investigación': 'Proyectos de Investigación',
        'Análisis de grandes datasets con Python y Pandas': 'Análisis de grandes datasets con Python y Pandas',
        'Creación de visualizaciones interactivas': 'Creación de visualizaciones interactivas',
        'Automatización de procesos de minería de datos': 'Automatización de procesos de minería de datos',
        
        // Projects section
        'Proyectos Destacados': 'Proyectos Destacados',
        'Juego de Cartas Multijugador': 'Juego de Cartas Multijugador',
        'Aplicación web completa con React, Node.js y Socket.io para juego en tiempo real.': 'Aplicación web completa con React, Node.js y Socket.io para juego en tiempo real.',
        'Sistema de Minería de Datos': 'Sistema de Minería de Datos',
        'Herramientas automatizadas para scraping y análisis de datos web con Python.': 'Herramientas automatizadas para scraping y análisis de datos web con Python.',
        'Chat en Tiempo Real': 'Chat en Tiempo Real',
        'Aplicación de chat con Firebase para comunicación instantánea y gestión de usuarios.': 'Aplicación de chat con Firebase para comunicación instantánea y gestión de usuarios.',
        
        // Skills section
        'Habilidades Técnicas': 'Habilidades Técnicas',
        'Frontend': 'Frontend',
        'Backend': 'Backend',
        'Herramientas': 'Herramientas',
        
        // Contact section
        '¡Trabajemos Juntos!': '¡Trabajemos Juntos!',
        '¿Tienes un proyecto en mente?': '¿Tienes un proyecto en mente?',
        'Estoy disponible para nuevos proyectos y oportunidades. No dudes en contactarme.': 'Estoy disponible para nuevos proyectos y oportunidades. No dudes en contactarme.',
        'España': 'España',
        'Tu Nombre': 'Tu Nombre',
        'Tu Email': 'Tu Email',
        'Tu Mensaje': 'Tu Mensaje',
        'Enviar Mensaje': 'Enviar Mensaje',
        
        // Footer
        'Todos los derechos reservados.': 'Todos los derechos reservados.',
        'Hecho con ❤️ y mucho café': 'Hecho con ❤️ y mucho café'
    },
    en: {
        // Navigation
        'Sobre mí': 'About',
        'Estudios': 'Education',
        'Experiencia': 'Experience',
        'Proyectos': 'Projects',
        'Habilidades': 'Skills',
        'Contacto': 'Contact',
        
        // Hero section
        'Hola, soy': 'Hi, I\'m',
        'Desarrollador Full Stack & Analista de Datos': 'Full Stack Developer & Data Analyst',
        'Apasionado por la tecnología, con experiencia en desarrollo web, análisis de datos y automatización. Siempre buscando nuevos desafíos y oportunidades para crecer profesionalmente.': 'Passionate about technology, with experience in web development, data analysis, and automation. Always seeking new challenges and opportunities for professional growth.',
        'Contáctame': 'Contact Me',
        'Ver Proyectos': 'View Projects',
        
        // About section
        'Sobre mí': 'About Me',
        'Soy un desarrollador apasionado con experiencia en tecnologías web modernas y análisis de datos. Me especializo en crear soluciones eficientes y user-friendly que resuelvan problemas reales.': 'I\'m a passionate developer with experience in modern web technologies and data analysis. I specialize in creating efficient and user-friendly solutions that solve real-world problems.',
        'Años de Experiencia': 'Years of Experience',
        'Proyectos Completados': 'Completed Projects',
        'Tecnologías Dominadas': 'Technologies Mastered',
        
        // Education section
        'Educación': 'Education',
        'Grado Superior en Desarrollo de Aplicaciones Web': 'Higher Degree in Web Application Development',
        'Formación completa en desarrollo web, incluyendo frontend, backend, bases de datos y metodologías ágiles.': 'Complete training in web development, including frontend, backend, databases, and agile methodologies.',
        'Certificaciones Técnicas': 'Technical Certifications',
        'Múltiples certificaciones en JavaScript, Python, React, Node.js y análisis de datos.': 'Multiple certifications in JavaScript, Python, React, Node.js, and data analysis.',
        
        // Experience section
        'Experiencia Profesional': 'Professional Experience',
        'Desarrollador Full Stack': 'Full Stack Developer',
        'Proyectos Freelance': 'Freelance Projects',
        'Desarrollo de aplicaciones web con React y Node.js': 'Web application development with React and Node.js',
        'Implementación de bases de datos y APIs RESTful': 'Database implementation and RESTful APIs',
        'Optimización de rendimiento y SEO': 'Performance optimization and SEO',
        'Analista de Datos': 'Data Analyst',
        'Proyectos de Investigación': 'Research Projects',
        'Análisis de grandes datasets con Python y Pandas': 'Big dataset analysis with Python and Pandas',
        'Creación de visualizaciones interactivas': 'Interactive visualization creation',
        'Automatización de procesos de minería de datos': 'Data mining process automation',
        
        // Projects section
        'Proyectos Destacados': 'Featured Projects',
        'Juego de Cartas Multijugador': 'Multiplayer Card Game',
        'Aplicación web completa con React, Node.js y Socket.io para juego en tiempo real.': 'Complete web application with React, Node.js and Socket.io for real-time gaming.',
        'Sistema de Minería de Datos': 'Data Mining System',
        'Herramientas automatizadas para scraping y análisis de datos web con Python.': 'Automated tools for web scraping and data analysis with Python.',
        'Chat en Tiempo Real': 'Real-time Chat',
        'Aplicación de chat con Firebase para comunicación instantánea y gestión de usuarios.': 'Chat application with Firebase for instant communication and user management.',
        
        // Skills section
        'Habilidades Técnicas': 'Technical Skills',
        'Frontend': 'Frontend',
        'Backend': 'Backend',
        'Herramientas': 'Tools',
        
        // Contact section
        '¡Trabajemos Juntos!': 'Let\'s Work Together!',
        '¿Tienes un proyecto en mente?': 'Have a project in mind?',
        'Estoy disponible para nuevos proyectos y oportunidades. No dudes en contactarme.': 'I\'m available for new projects and opportunities. Don\'t hesitate to contact me.',
        'España': 'Spain',
        'Tu Nombre': 'Your Name',
        'Tu Email': 'Your Email',
        'Tu Mensaje': 'Your Message',
        'Enviar Mensaje': 'Send Message',
        
        // Footer
        'Todos los derechos reservados.': 'All rights reserved.',
        'Hecho con ❤️ y mucho café': 'Made with ❤️ and lots of coffee'
    }
};

// DOM elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const langToggle = document.getElementById('langToggle');
const contactForm = document.querySelector('.contact-form');

// Mobile navigation toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed header
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Language toggle functionality
langToggle.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
    updateLanguage();
    updateLanguageButton();
});

function updateLanguage() {
    // Update all elements with data-es and data-en attributes
    const elements = document.querySelectorAll('[data-es][data-en]');
    elements.forEach(element => {
        const translation = currentLanguage === 'es' 
            ? element.getAttribute('data-es')
            : element.getAttribute('data-en');
        
        if (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea') {
            element.placeholder = translation;
        } else {
            element.textContent = translation;
        }
    });

    // Update form labels
    const labels = document.querySelectorAll('label[data-es][data-en]');
    labels.forEach(label => {
        const translation = currentLanguage === 'es' 
            ? label.getAttribute('data-es')
            : label.getAttribute('data-en');
        label.textContent = translation;
    });

    // Update document language attribute
    document.documentElement.lang = currentLanguage;
}

function updateLanguageButton() {
    const langText = langToggle.querySelector('.lang-text');
    langText.textContent = currentLanguage === 'es' ? 'EN' : 'ES';
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Animate skill bars when they come into view
const observeSkills = () => {
    const skillBars = document.querySelectorAll('.skill-progress');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const width = skillBar.style.width;
                skillBar.style.width = '0';
                setTimeout(() => {
                    skillBar.style.width = width;
                }, 100);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => observer.observe(bar));
};

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.timeline-content, .experience-item, .project-card, .skill-category');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
};

// Contact form handling
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the form data to a server
    // For now, we'll just show a success message
    showNotification(
        currentLanguage === 'es' 
            ? '¡Mensaje enviado correctamente! Te contactaré pronto.' 
            : 'Message sent successfully! I\'ll contact you soon.',
        'success'
    );
    
    contactForm.reset();
});

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#6366f1'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1001;
        transform: translateX(400px);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Typing animation for hero subtitle
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Particle animation for hero background
function createParticles() {
    const hero = document.querySelector('.hero');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            pointer-events: none;
            animation: float ${Math.random() * 6 + 4}s ease-in-out infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 2}s;
        `;
        hero.appendChild(particle);
    }
    
    // Add CSS for particle animation
    if (!document.getElementById('particle-styles')) {
        const style = document.createElement('style');
        style.id = 'particle-styles';
        style.textContent = `
            @keyframes float {
                0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 1; }
                50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
            }
        `;
        document.head.appendChild(style);
    }
}

// Copy email to clipboard
function copyEmail(email) {
    navigator.clipboard.writeText(email).then(() => {
        showNotification(
            currentLanguage === 'es' 
                ? 'Email copiado al portapapeles!' 
                : 'Email copied to clipboard!',
            'success'
        );
    });
}

// Add click handler for email
document.addEventListener('DOMContentLoaded', () => {
    const emailElement = document.querySelector('.contact-item span');
    if (emailElement && emailElement.textContent.includes('@')) {
        emailElement.style.cursor = 'pointer';
        emailElement.addEventListener('click', () => {
            copyEmail(emailElement.textContent);
        });
    }
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize animations
    observeSkills();
    animateOnScroll();
    createParticles();
    
    // Set initial language
    updateLanguage();
    updateLanguageButton();
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Add some Easter eggs
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.keyCode);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        showNotification(
            currentLanguage === 'es' 
                ? '¡Has encontrado el código secreto! 🎮' 
                : 'You found the secret code! 🎮',
            'success'
        );
        
        // Add some fun animation
        document.body.style.animation = 'rainbow 2s ease-in-out';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 2000);
        
        konamiCode = [];
    }
});

// Add rainbow animation for Easter egg
if (!document.getElementById('easter-egg-styles')) {
    const style = document.createElement('style');
    style.id = 'easter-egg-styles';
    style.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
}

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScroll = debounce(() => {
    // Your scroll handling code here
}, 10);

window.addEventListener('scroll', debouncedScroll);