document.addEventListener('DOMContentLoaded', function () {
window.toggleFilter = function (id, button) {
    const content = document.getElementById(id);
    const icon = button.querySelector('.toggle-icon');
    
    if (content.style.display === 'block') {
        content.style.display = 'none';
        icon.textContent = '+'; // Change l'icône en +
    } else {
        content.style.display = 'block';
        icon.textContent = '−'; // Change l'icône en −
    }
}
});

function applyFilters() {
    const products = document.querySelectorAll('.product-link');

    // Récupérer les valeurs de chaque filtre sélectionné
    const selectedSizes = Array.from(document.querySelectorAll('#size input[type="checkbox"]:checked')).map(cb => cb.parentElement.textContent.trim().toLowerCase());
    const selectedWidths = Array.from(document.querySelectorAll('#width input[type="checkbox"]:checked')).map(cb => cb.parentElement.textContent.trim().toLowerCase());
    const selectedActivities = Array.from(document.querySelectorAll('#act input[type="checkbox"]:checked')).map(cb => cb.parentElement.textContent.trim().toLowerCase());
    const selectedColors = Array.from(document.querySelectorAll('#color input[type="checkbox"]:checked')).map(cb => cb.parentElement.textContent.trim().toLowerCase());
    const selectedModels = Array.from(document.querySelectorAll('#model input[type="checkbox"]:checked')).map(cb => cb.parentElement.textContent.trim().toLowerCase());
    const selectedPriceRanges = Array.from(document.querySelectorAll('#price input[type="checkbox"]:checked')).map(cb => cb.parentElement.textContent.trim());

    products.forEach(product => {
        const productSize = product.getAttribute('data-size');
        const productWidth = product.getAttribute('data-width');
        const productActivity = product.getAttribute('data-activity');
        const productColor = product.getAttribute('data-color');
        const productModel = product.getAttribute('data-model');
        const productPrice = parseFloat(product.getAttribute('data-price'));

        // Vérifier chaque critère de filtre
        const sizeMatch = selectedSizes.length === 0 || selectedSizes.includes(productSize);
        const widthMatch = selectedWidths.length === 0 || selectedWidths.includes(productWidth);
        const activityMatch = selectedActivities.length === 0 || selectedActivities.includes(productActivity);
        const colorMatch = selectedColors.length === 0 || selectedColors.includes(productColor);
        const modelMatch = selectedModels.length === 0 || selectedModels.includes(productModel);
        const priceMatch = selectedPriceRanges.length === 0 || selectedPriceRanges.some(range => {
            const [min, max] = range.split('-').map(price => parseFloat(price.replace('€', '').trim()));
            return productPrice >= (min || 0) && productPrice <= (max || Infinity);
        });

        // Afficher ou masquer le produit en fonction de tous les critères
        if (sizeMatch && widthMatch && activityMatch && colorMatch && modelMatch && priceMatch) {
            product.style.display = 'block'; // Afficher le produit
        } else {
            product.style.display = 'none'; // Masquer le produit
        }
    });
}

document.querySelectorAll('.filter-content input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', applyFilters);
});
