// Basic Form Handling and Interactivity

document.addEventListener('DOMContentLoaded', () => {

    // 1. Smooth Scrolling for Navigation Links (Fallback for older browsers)
    const links = document.querySelectorAll('.nav-links a');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Offset for sticky header
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Interactive Contact Form
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent actual submission

        // Get values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (name && email) {
            alert(`Thanks, ${name}! We have received your message from ${email}. We will get back to you shortly!`);
            contactForm.reset();
        } else {
            alert("Please fill in all fields.");
        }
    });

    // 3. Simple Animation on Scroll (Fade In)
    const cards = document.querySelectorAll('.project-card');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        // Set initial state for animation
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

});
