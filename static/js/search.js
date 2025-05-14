// Get references to the search input and all product cards
const searchInput = document.getElementById('searchInput');
const products = document.querySelectorAll('.product-cart');

searchInput.addEventListener('input', function() {
  const searchValue = searchInput.value.toLowerCase(); // Get the current search value in lowercase
  
  products.forEach(product => {
    const productName = product.querySelector('h4').textContent.toLowerCase(); 
    
    if (productName.includes(searchValue)) {
      product.style.display = 'block'; 
    } else {
      product.style.display = 'none'; // Hide the product if it doesn't match
    }
  });
});