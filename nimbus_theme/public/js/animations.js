// Select the elements to observe
var elements = document.querySelectorAll('.card, .hero-subtitle, .hero-buttons');

// Create a new Intersection Observer instance
var observer = new IntersectionObserver(function(entries) {
    // Loop over the entries
    entries.forEach(function(entry) {
        // If the element is in the viewport
        if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('animate');
            entry.target.style.opacity = '1';
        }
    });
});

// Start observing each element
elements.forEach(function(element) {
    observer.observe(element);
});