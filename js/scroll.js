// Scroll functionality
document.addEventListener('DOMContentLoaded', () => {
    const scrollArrow = document.querySelector('.scroll-arrow');
    
    if (scrollArrow) {
        scrollArrow.addEventListener('click', () => {
            const projectsSection = document.querySelector('.recent-projects');
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});