// Statistics animation
document.addEventListener('DOMContentLoaded', () => {
    const stats = document.querySelectorAll('.stat-number');
    let animated = false;
    
    if (stats.length > 0) {
        const animateValue = (element, start, end, duration) => {
            const range = end - start;
            let current = start;
            let startTime = null;
            const suffix = element.textContent.match(/[^0-9]+/)?.[0] || '';
            let previousNumber = null;
            
            const updateNumber = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);
                
                // Combined easing for smoother animation
                const easeOutQuart = 1 - Math.pow(1 - progress, 3);
                const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                const easedProgress = (easeOutQuart + easeOutExpo) / 2;
                current = start + (range * easedProgress);
                const roundedNumber = Math.floor(current);
                
                // Only update if the number has changed
                if (roundedNumber !== previousNumber) {
                    previousNumber = roundedNumber;
                    element.textContent = `${roundedNumber}${suffix}`;
                }
                
                if (progress >= 1 && roundedNumber !== end) {
                    element.textContent = `${end}${suffix}`;
                    return;
                }

                requestAnimationFrame(updateNumber);
            };
            
            requestAnimationFrame(updateNumber);
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animated) {
                    animated = true;
                    
                    stats.forEach(stat => {
                        const value = stat.textContent;
                        const targetValue = parseInt(value);
                        const suffix = value.match(/[^0-9]+/)?.[0] || '';
                        stat.textContent = `0${suffix}`;
                        animateValue(stat, 0, targetValue, 3000);
                    });
                    
                    // Disconnect the observer after animation
                    observer.disconnect();
                }
            });
        }, { threshold: 0.5 });
        
        // Observe the statistics container
        const statsContainer = document.querySelector('.statistics');
        if (statsContainer) {
            observer.observe(statsContainer);
        }
    }
});