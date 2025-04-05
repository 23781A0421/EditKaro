// Email Subscription Form
document.addEventListener('DOMContentLoaded', function() {
    const emailForm = document.getElementById('email-subscription-form');
    const subscriptionMessage = document.getElementById('subscription-message');
    
    if (emailForm) {
        emailForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.email.value;
            
            // Here you would typically send the data to your server or Google Sheets
            // For demonstration, we'll just show a success message
            subscriptionMessage.textContent = 'Thank you for subscribing!';
            subscriptionMessage.classList.add('success');
            subscriptionMessage.style.display = 'block';
            
            // Reset form
            this.reset();
            
            // Hide message after 5 seconds
            setTimeout(() => {
                subscriptionMessage.style.display = 'none';
            }, 5000);
            
            // In a real implementation, you would use something like this:
            // const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL';
            // fetch(scriptURL, { method: 'POST', body: new FormData(this)})
            //     .then(response => {
            //         subscriptionMessage.textContent = 'Thank you for subscribing!';
            //         subscriptionMessage.classList.add('success');
            //         this.reset();
            //     })
            //     .catch(error => {
            //         subscriptionMessage.textContent = 'Error: Please try again later';
            //         subscriptionMessage.classList.add('error');
            //     });
        });
    }
    
    // Contact Form
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: this.name.value,
                email: this.email.value,
                phone: this.phone.value,
                service: this.service.value,
                message: this.message.value
            };
            
            // Here you would typically send the data to your server or Google Sheets
            // For demonstration, we'll just show a success message
            formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
            formMessage.classList.add('success');
            formMessage.style.display = 'block';
            
            // Reset form
            this.reset();
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
            
            // In a real implementation, you would use something like this:
            // const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL';
            // fetch(scriptURL, { method: 'POST', body: new FormData(this)})
            //     .then(response => {
            //         formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
            //         formMessage.classList.add('success');
            //         this.reset();
            //     })
            //     .catch(error => {
            //         formMessage.textContent = 'Error: Please try again later';
            //         formMessage.classList.add('error');
            //     });
        });
    }
});