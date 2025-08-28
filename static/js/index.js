window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	
    bulmaSlider.attach();

})

// ...existing code...
document.addEventListener('DOMContentLoaded', function () {
  for (let i = 1; i <= 15; i++) {
    bulmaCarousel.attach('.gallery-carousel-' + i, {
      slidesToScroll: 1,
      slidesToShow: 1,
      loop: true,
      navigation: true,
      pagination: false
    });
  }
});
// ...existing code...
