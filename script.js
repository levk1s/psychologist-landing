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

    // Accordion timeline
    const accordionTriggers = document.querySelectorAll('.accordion-trigger');
    accordionTriggers.forEach(function(trigger) {
        trigger.addEventListener('click', function() {
            const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
            const body = trigger.nextElementSibling;

            // Close all others
            accordionTriggers.forEach(function(t) {
                t.setAttribute('aria-expanded', 'false');
                const b = t.nextElementSibling;
                if (b) b.classList.remove('open');
            });

            // Toggle current
            if (!isExpanded) {
                trigger.setAttribute('aria-expanded', 'true');
                body.classList.add('open');
            }
        });
    });
});
