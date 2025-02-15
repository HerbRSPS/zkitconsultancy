// Testimonial slider functionality
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.testimonials-track');
    const cards = document.querySelectorAll('.testimonial-card');
    const prevButton = document.querySelector('.slider-arrow.prev');
    const nextButton = document.querySelector('.slider-arrow.next');
    
    if (track && cards.length > 0 && prevButton && nextButton) {
        const cardWidth = 400; // Width of each card
        const cardGap = 32;    // Gap between cards
        const totalWidth = cardWidth + cardGap;
        let currentIndex = 1;
        let isTransitioning = false;

        function updateSliderPosition(smooth = true) {
            track.style.transition = smooth ? 'transform 0.5s ease-in-out' : 'none';
            const offset = (currentIndex - 1) * totalWidth;
            track.style.transform = `translateX(calc(-50% - ${offset}px))`;
        }

        function updateActiveState() {
            cards.forEach((card, index) => {
                card.classList.toggle('active', index === currentIndex - 1);
            });
        }

        // Set initial position
        updateSliderPosition(false);
        updateActiveState();

        function slide(direction) {
            if (isTransitioning) return;
            isTransitioning = true;
            
            currentIndex += direction === 'next' ? 1 : -1;

            // Handle wrapping
            if (currentIndex > cards.length) {
                currentIndex = 1;
            } else if (currentIndex < 1) {
                currentIndex = cards.length;
            }

            updateSliderPosition();
            updateActiveState();
        }

        track.addEventListener('transitionend', () => {
            isTransitioning = false;
        });

        prevButton.addEventListener('click', () => slide('prev'));
        nextButton.addEventListener('click', () => slide('next'));
    }
});