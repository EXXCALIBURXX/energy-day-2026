document.addEventListener('DOMContentLoaded', () => {
    // Init Animations
    AOS.init({
        duration: 800,
        once: true
    });

    // Mobile Menu
    const toggle = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('.nav-links');
    
    if(toggle) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }
});