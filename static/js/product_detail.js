 // Image Gallery Functionality
        document.addEventListener('DOMContentLoaded', function() {
            const mainImage = document.querySelector('.product-main-image img');
            const thumbnails = document.querySelectorAll('.thumbnail');
            
            thumbnails.forEach(thumbnail => {
                thumbnail.addEventListener('click', function() {
                    // Update main image
                    mainImage.src = this.querySelector('img').src;
                    
                    // Update active thumbnail
                    thumbnails.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                });
            });
            
            // Quantity selector
            const minusBtn = document.querySelector('.minus');
            const plusBtn = document.querySelector('.plus');
            const quantityInput = document.querySelector('.quantity-input');
            
            minusBtn.addEventListener('click', function() {
                const currentValue = parseInt(quantityInput.value);
                if (currentValue > 1) {
                    quantityInput.value = currentValue - 1;
                }
            });
            
            plusBtn.addEventListener('click', function() {
                const currentValue = parseInt(quantityInput.value);
                if (currentValue < 10) {
                    quantityInput.value = currentValue + 1;
                }
            });
            
            // Size selection
            const sizeOptions = document.querySelectorAll('.size-option');
            sizeOptions.forEach(option => {
                option.addEventListener('click', function() {
                    sizeOptions.forEach(o => o.classList.remove('active'));
                    this.classList.add('active');
                });
            });
            
            // Color selection
            const colorOptions = document.querySelectorAll('.color-option');
            colorOptions.forEach(option => {
                option.addEventListener('click', function() {
                    colorOptions.forEach(o => o.classList.remove('active'));
                    this.classList.add('active');
                });
            });
        });