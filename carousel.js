// Select all slides
const images = document.querySelectorAll('#carousel img');
let current = 0; // Track current slide index

// Function to show the slide at the given index
function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

// Show next slide
function nextImage() {
    current = (current + 1) % images.length;
    showImage(current);
}

// Show previous slide
function prevImage() {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
}
