document.addEventListener('DOMContentLoaded', () => {

    // --- Multi-Layer Parallax Effect on Hero Section ---
    const layerBg = document.getElementById('layer-bg');
    const layerMid = document.getElementById('layer-mid');
    const layerFront = document.getElementById('layer-front');
    const heroContent = document.querySelector('.hero-content');

    window.addEventListener('scroll', () => {
        let offset = window.pageYOffset;
        
        // Move each layer at a different speed for a 3D effect
        layerBg.style.transform = `translateY(${offset * 0.2}px)`;
        layerMid.style.transform = `translateY(${offset * 0.5}px)`;
        layerFront.style.transform = `translateY(${offset * 0.8}px)`;
        heroContent.style.transform = `translateY(${offset * 0.4}px)`;
    });


    // --- Intersection Observer for On-Scroll Animations ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is intersecting the viewport, add the 'is-visible' class
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: Unobserve after animation to save resources
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger animation when 10% of the element is visible
    });

    // Attach the observer to each element that needs to be animated
    animatedElements.forEach(element => {
        observer.observe(element);
    });

});