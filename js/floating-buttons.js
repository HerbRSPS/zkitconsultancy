document.addEventListener('DOMContentLoaded', () => {
    // Create and append floating buttons
    const floatingButtons = document.createElement('div');
    floatingButtons.className = 'floating-buttons';
    
    // Back to top button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'floating-btn back-to-top';
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.setAttribute('aria-label', 'Scroll to top');
    
    // WhatsApp button
    const whatsappBtn = document.createElement('a');
    whatsappBtn.className = 'floating-btn whatsapp-btn';
    whatsappBtn.href = 'https://wa.me/31201234567'; // Replace with your WhatsApp number
    whatsappBtn.target = '_blank';
    whatsappBtn.rel = 'noopener noreferrer';
    whatsappBtn.setAttribute('aria-label', 'Contact via WhatsApp');
    whatsappBtn.innerHTML = `
        <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png"
            alt="WhatsApp"
            class="whatsapp-icon"
        />
    `;
    
    floatingButtons.appendChild(backToTopBtn);
    floatingButtons.appendChild(whatsappBtn);
    document.body.appendChild(floatingButtons);
    
    // Show/hide buttons based on scroll position
    let lastScrollPosition = 0;
    const scrollThreshold = 200;
    
    function handleScroll() {
        const currentScroll = window.pageYOffset;
        
        // Show buttons when scrolling down past threshold
        if (currentScroll > scrollThreshold) {
            floatingButtons.classList.add('visible');
        } else {
            floatingButtons.classList.remove('visible');
        }
        
        lastScrollPosition = currentScroll;
    }
    
    // Smooth scroll to top
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Add scroll event listener with debounce
    let isScrolling;
    window.addEventListener('scroll', () => {
        window.clearTimeout(isScrolling);
        
        handleScroll();
        
        isScrolling = setTimeout(() => {
            handleScroll();
        }, 50);
    });
    
    // Initial check
    handleScroll();
});