console.log("Hello World");
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