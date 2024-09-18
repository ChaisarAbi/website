
document.addEventListener('DOMContentLoaded', function () {
    // Testimoni Slider - Swipe Detection
    let touchStartX = 0;
    let touchEndX = 0;

    const testimoniSlider = document.getElementById('testimoni-slider');

    // Detect touch start for swipe
    testimoniSlider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    // Detect touch end for swipe and handle swipe action
    testimoniSlider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    // Handle swipe detection and scrolling
    function handleSwipe() {
        if (touchEndX < touchStartX) {
            testimoniSlider.scrollBy({ left: 300, behavior: 'smooth' }); // Swipe left
        }
        if (touchEndX > touchStartX) {
            testimoniSlider.scrollBy({ left: -300, behavior: 'smooth' }); // Swipe right
        }
    }

    // Disable automatic slide change for Testimoni
    const testimoniCards = testimoniSlider.getElementsByClassName('testimoni-card');
    let index = 0;

    // Remove automatic sliding
    function showNextTestimoni() {
        for (let i = 0; i < testimoniCards.length; i++) {
            testimoniCards[i].style.display = 'none';
        }
        testimoniCards[index].style.display = 'block';
    }

    showNextTestimoni(); // Initially display the first testimonial

    // Galeri Slider (optional)
    const galeriSlider = document.getElementById('galeri-slider');
    galeriSlider.scrollLeft = 0;

    // Optional swipe detection for galeri (if needed)
    galeriSlider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    galeriSlider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipeGaleri();
    });

    function handleSwipeGaleri() {
        if (touchEndX < touchStartX) {
            galeriSlider.scrollBy({ left: 300, behavior: 'smooth' });
        }
        if (touchEndX > touchStartX) {
            galeriSlider.scrollBy({ left: -300, behavior: 'smooth' });
        }
    }
});
