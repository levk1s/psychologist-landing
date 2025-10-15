// Burger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');
    
    // Toggle menu on burger click
    burger.addEventListener('click', function() {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            burger.classList.remove('active');
            nav.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!nav.contains(e.target) && !burger.contains(e.target)) {
            burger.classList.remove('active');
            nav.classList.remove('active');
        }
    });
});
