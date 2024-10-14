document.addEventListener('DOMContentLoaded', function() {
    // Initialisation de Swiper
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

    // Gestion du panier
    const cartButton = document.getElementById('cart-button');
    const cartPanel = document.getElementById('cart-panel');
    const closeCartButton = document.getElementById('close-cart');

    // Ouvrir le panier
    cartButton.addEventListener('click', function() {
        cartPanel.classList.add('active'); // Ajouter la classe active pour déclencher l'animation d'ouverture
    });

    // Fermer le panier
    closeCartButton.addEventListener('click', function() {
        cartPanel.classList.add('closing'); // Ajoute la classe pour commencer à glisser le panier vers la droite
        cartPanel.classList.remove('active'); // Retire la classe active (pour retirer le slide-in)

        setTimeout(() => {
            cartPanel.classList.remove('closing'); // Une fois l'animation terminée, retirer la classe 'closing'
        }, 500); // Correspond à la durée de la transition CSS (500ms)
    });

    // Gestion des filtres
});

document.addEventListener("DOMContentLoaded", function() {
    const filters = document.querySelectorAll('.filter-btn');

    filters.forEach(filter => {
        filter.addEventListener('click', function(event) {
            console.log("Filter button clicked"); // Vérification du clic
            const filterId = this.getAttribute('onclick').match(/'(.*?)'/)[1];
            toggleFilter(filterId, this); // Passez également le bouton
        });
    });
});

function toggleFilter(id, button) {
    const content = document.getElementById(id);

    if (!content) {
        console.error(`Le contenu de filtre avec l'ID '${id}' n'a pas été trouvé.`);
        return;
    }

    // Maintenant, nous avons le bouton passé en argument
    const toggleIcon = button.querySelector('.toggle-icon'); // Récupération correcte de l'icône
    console.log("Toggle Icon:", toggleIcon); // Pour déboguer et vérifier l'icône

    if (!toggleIcon) {
        console.error('L\'icône de bascule n\'a pas été trouvée dans le bouton.', button);
        return;
    }

    // Basculez l'affichage du contenu et changez le symbole de l'icône
    if (content.style.display === "block") {
        content.style.display = "none"; 
        toggleIcon.textContent = '+'; 
    } else {
        content.style.display = "block"; 
        toggleIcon.textContent = '-'; 
    }
}