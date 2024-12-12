// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', event => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                event.preventDefault();
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        });
    });

    // Contact form validation
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', event => {
            event.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !subject || !message) {
                alert('Please fill out all fields.');
                return;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            alert('Thank you for reaching out, Abhi will get back to you soon!');
            form.reset();
        });
    }
});
