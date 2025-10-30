document.addEventListener('DOMContentLoaded', () => {

    // ======== Intersection Observer for Fade-in Effect ========
    const sections = document.querySelectorAll('section');

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, {
        root: null, // relative to the viewport
        threshold: 0.1 // 10% of the item must be visible
    });

    sections.forEach(section => {
        fadeInObserver.observe(section);
    });

    // ======== Intersection Observer for Active Nav Link (Scroll Spy) ========
    const navLinks = document.querySelectorAll('.nav-links a');
    const sectionsForSpy = document.querySelectorAll('section[id]');

    const scrollSpyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                
                // Remove active class from all links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    // Check if link's href matches the section id
                    if (link.getAttribute('href') === `#${id}`) {
                        // Add active class to the matching link
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        root: null,
        threshold: 0.3, // 30% visible
        rootMargin: '-70px 0px -50% 0px' // Adjust margin to activate at the top part of the screen
    });

    sectionsForSpy.forEach(section => {
        scrollSpyObserver.observe(section);
    });

});
