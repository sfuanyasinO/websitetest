// Custom cursor
const cursor = document.querySelector('.cursor');
const cursorFx = document.querySelector('.cursor-fx');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursorFx.style.left = e.clientX + 'px';
    cursorFx.style.top = e.clientY + 'px';
});

document.addEventListener('click', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.5)';
    cursorFx.style.transform = 'translate(-50%, -50%) scale(1.5)';
    setTimeout(() => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorFx.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 100);
});

// Cursor interaction with links
document.querySelectorAll('a, .btn').forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorFx.style.transform = 'translate(-50%, -50%) scale(1.5)';
    });
    link.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorFx.style.transform = 'translate(-50%, -50%) scale(1)';
    });
});

// Parallax effect
window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    document.querySelector('.parallax-bg').style.transform = `translateY(${scrollPosition * 0.5}px)`;
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert('Form submitted! (This is a demo, no data was actually sent)');
    contactForm.reset();
});

// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .section-title, #contact-form').forEach(el => {
    observer.observe(el);
});

// Dynamic copyright year
document.querySelector('footer p').innerHTML = `&copy; ${new Date().getFullYear()} NeoDesign. All rights reserved.`;
