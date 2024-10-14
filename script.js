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

function toggleFilter(id) {
    const content = document.getElementById(id);
    const button = content.previousElementSibling; // Récupère le bouton du filtre
    
    if (content.style.display === "block") {
        content.style.display = "none";
        button.classList.remove('active'); // Enlève la classe active si le filtre est fermé
    } else {
        content.style.display = "block";
        button.classList.add('active'); // Ajoute la classe active si le filtre est ouvert
    }
}

-
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-filters');
    const filterContainer = document.querySelector('.filter-container-phone');

    console.log('Toggle Button:', toggleButton);
    console.log('Filter Container:', filterContainer);

    // Gestion du bouton pour afficher/cacher le conteneur des filtres
    toggleButton.addEventListener('click', function() {
        console.log('Bouton cliqué');
        filterContainer.classList.toggle('hidden');

        // Change le texte du bouton en fonction de l'état de l'affichage
        if (filterContainer.classList.contains('hidden')) {
            toggleButton.textContent = 'Afficher les filtres';
            console.log('Filtres cachés');
        } else {
            toggleButton.textContent = 'Masquer les filtres';
            console.log('Filtres affichés');
        }
    });
});

// Fonction pour afficher/cacher le contenu d'un filtre
function toggleFilterContent(id) {
    const content = document.getElementById(id);
    console.log('Toggle filter content for:', id);
    content.classList.toggle('hidden'); // Utilisation de la classe hidden
}








