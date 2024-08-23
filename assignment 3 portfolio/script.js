// Smooth Scroll for Navbar Links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ScrollReveal Animations
ScrollReveal().reveal('.animate__animated', { 
    distance: '50px', 
    duration: 1000, 
    easing: 'ease-in-out' 
});

// Form Submission (Dummy Submission Handler)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formMessage = document.getElementById('form-message');
    formMessage.textContent = 'Thank you for reaching out! I will get back to you soon.';
    formMessage.style.color = 'green';
    this.reset();
});
