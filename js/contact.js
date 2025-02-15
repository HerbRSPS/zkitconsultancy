// Contact form functionality
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to your backend
            console.log('Form submitted:', { name, email, subject, message });
            
            // Reset form
            contactForm.reset();
            
            // Show success message (you can customize this)
            alert('Bedankt voor uw bericht! We nemen zo spoedig mogelijk contact met u op.');
        });
    }
});