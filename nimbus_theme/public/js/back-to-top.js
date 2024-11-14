// ...existing code...

// Create the button element
const backToTopButton = document.createElement('button');
backToTopButton.innerText = '↑';
backToTopButton.id = 'back-to-top';
backToTopButton.style.display = 'none'; // Initially hidden
document.body.appendChild(backToTopButton);

// Show the button when the user scrolls down
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) { // Show after scrolling down 200px
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll back to top when the button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

