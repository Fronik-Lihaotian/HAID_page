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
	
    // bulmaSlider.attach();

})

document.addEventListener('DOMContentLoaded', function () {
  for (let i = 1; i <= 15; i++) {
    bulmaCarousel.attach('.gallery-carousel-' + i, {
      slidesToScroll: 1,
      slidesToShow: 1,
      loop: true,
      infinite: true,
      navigation: true,
      pagination: false,
      autoplay: true,           // 自动轮播
      autoplaySpeed: 3000,      // 毫秒，可改为你想要的速度
      pauseOnHover: true        // 鼠标悬停时暂停（可选）
    });
  }

  // 禁止轮播中图片拖动导致误操作，并阻止 dragstart
  document.querySelectorAll('.carousel img').forEach(img => {
    img.setAttribute('draggable', 'false');
    img.addEventListener('dragstart', e => e.preventDefault());
  });

  // 防止在按下并拖动时选择文本（额外保险）
  document.querySelectorAll('.carousel, .publication-links, .button').forEach(el => {
    el.addEventListener('mousedown', e => {
      // 仅在左键时阻止默认的选择行为
      if (e.button === 0) e.preventDefault();
    });
  });
});
