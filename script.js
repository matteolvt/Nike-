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

const cartButton = document.getElementById('cart-button');
const cartPanel = document.getElementById('cart-panel');
const closeCartButton = document.getElementById('close-cart');

// Quand on clique sur l'icône du panier, on l'ouvre
cartButton.addEventListener('click', function() {
    cartPanel.classList.add('active'); // Ajouter la classe active pour déclencher l'animation d'ouverture
});

// Quand on clique sur le bouton "Fermer"
closeCartButton.addEventListener('click', function() {
    cartPanel.classList.add('closing'); // Ajoute la classe pour commencer à glisser le panier vers la droite
    cartPanel.classList.remove('active'); // Retire la classe active (pour retirer le slide-in)
    
    setTimeout(() => {
        cartPanel.classList.remove('closing'); // Une fois l'animation terminée, retirer la classe 'closing'
    }, 500); // Correspond à la durée de la transition CSS (500ms)
});