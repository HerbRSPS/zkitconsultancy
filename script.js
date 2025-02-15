// Project category functionality
document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const projectsGrid = document.querySelector('.projects-grid');
    const scrollArrow = document.querySelector('.scroll-arrow');
    
    // Only add scroll arrow functionality if it exists
    if (scrollArrow) {
        scrollArrow.addEventListener('click', () => {
            const projectsSection = document.querySelector('.recent-projects');
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Only run project-related code if elements exist
    if (projectsGrid && projectCards.length > 0) {
        function updateProjectPositions(visibleCards) {
            visibleCards.forEach((card, index) => {
                const row = Math.floor(index / 2);
                const isEven = index % 2 === 0;
                
                card.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
                card.style.top = `${row * 432}px`; // 400px height + 32px gap
                card.style.left = isEven ? '0' : 'calc(50% + 1rem)';
            });

            // Update grid height based on number of rows needed
            const rows = Math.ceil(visibleCards.length / 2);
            projectsGrid.style.minHeight = `${rows * 432}px`; // Height + gap
        }

        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                const selectedCategory = button.getAttribute('data-category');
                
                // Get visible cards for the selected category
                const visibleCards = Array.from(projectCards).filter(card => {
                    const shouldShow = selectedCategory === 'all' || card.getAttribute('data-category') === selectedCategory;
                    card.classList.toggle('hidden', !shouldShow);
                    return shouldShow;
                });

                // Update positions of visible cards
                updateProjectPositions(visibleCards);
            });
        });

        // Initialize positions for all cards on load
        updateProjectPositions(Array.from(projectCards));
    }
});

// Testimonial slider functionality
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.testimonials-track');
    const cards = document.querySelectorAll('.testimonial-card');
    const prevButton = document.querySelector('.slider-arrow.prev');
    const nextButton = document.querySelector('.slider-arrow.next');
    
    // Only initialize slider if elements exist
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

// FAQ functionality
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (!question) return;
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            
            // If the clicked item wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});