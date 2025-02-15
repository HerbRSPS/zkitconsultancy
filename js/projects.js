// Project category functionality
document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const projectsGrid = document.querySelector('.projects-grid');
    
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