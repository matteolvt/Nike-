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



