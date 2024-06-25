const carousels = document.querySelectorAll('.carousel');

carousels.forEach(carousel => {
  let inner = carousel.querySelector('.carousel-inner');
  let images = carousel.querySelectorAll('img');
  let currentImage = 0;

  const prevBtn = carousel.querySelector('.prev');
  const nextBtn = carousel.querySelector('.next');

  prevBtn.addEventListener('click', () => {
    currentImage = (currentImage - 1 + images.length) % images.length;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    currentImage = (currentImage + 1) % images.length;
    updateCarousel();
  });

  function updateCarousel() {
    const translateX = -currentImage * images[0].offsetWidth;
    inner.style.transform = `translateX(${translateX}px)`;
  }

  updateCarousel();
});
