document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                item.classList.remove('show');
                
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.classList.add('show');
                }
            });
        });
    });
    
    // Initialize by showing all items
    portfolioItems.forEach(item => item.classList.add('show'));
});