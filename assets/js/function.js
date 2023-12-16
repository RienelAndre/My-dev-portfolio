let currentIndex = 0;
  const slider = document.querySelector('.slider');
  const sliderItems = document.querySelectorAll('.slider-item');

  function previousSlide() {
    currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
    updateSlider();
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % sliderItems.length;
    updateSlider();
  }

  function updateSlider() {
    const translateValue = -currentIndex * 100 + 'px';
    slider.style.transform = 'translateY(' + translateValue + ')';
  }