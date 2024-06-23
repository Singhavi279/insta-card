// script.js

document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const inner = carousel.querySelector('.carousel-inner');
        const images = inner.querySelectorAll('img');
        const nextButton = carousel.querySelector('.next');
        const prevButton = carousel.querySelector('.prev');
        let currentIndex = 0;

        function updateCarousel() {
            const offset = -currentIndex * 100 / images.length; // Adjust for the number of images
            inner.style.transform = `translateX(${offset}%)`;
        }

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateCarousel();
        });

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateCarousel();
        });

        // Initialize carousel position
        updateCarousel();
    });
});
