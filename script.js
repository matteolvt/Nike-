document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.swiper-container', {
        loop: true, // Permet de faire boucler les slides
        autoplay: {
            delay: 3000, // 3 secondes entre les slides
        },
        pagination: {
            el: '.swiper-pagination', // Pagination (petits points en bas)
            clickable: true, // Rendre les points cliquables
        },
    });
});

// Select essential element
const cartButton = document.getElementById('cart-button');
const cartPanel = document.getElementById('cart-panel');
const closeCartButton = document.getElementById('close-cart');

// When we click on the icon bag
cartButton.addEventListener('click', function() {
    cartPanel.style.display = 'block'; 
    setTimeout(() => {
        cartPanel.classList.add('active'); 
    }, 10); 
});

// When we click on "close"
closeCartButton.addEventListener('click', function() {
    cartPanel.classList.remove('active'); 
    setTimeout(() => {
        cartPanel.style.display = 'none'; 
    }, 300); 
});
