let currentIndex = 0;
  const slider = document.querySelector('.slider');
  const sliderItems = document.querySelectorAll('.slider-item');

  function nextSlide() {
    currentIndex = (currentIndex + 1) % sliderItems.length;
    updateSlider();
  }

  function previousSlide() {
    currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
    updateSlider();
  }

  function updateSlider() {
    const translateValue = -currentIndex * 900 + 'px';
    slider.style.transform = 'translateX(' + translateValue + ')';
  }