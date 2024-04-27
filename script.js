// script.js

// Function to handle navigation to category pages
function navigateToCategory(category) {
    // Construct the URL for the category page
    const categoryUrl = category.toLowerCase() + ".html";
    
    // Redirect the user to the category page
    window.location.href = categoryUrl;
}

// Event listeners for category buttons
document.addEventListener("DOMContentLoaded", function() {
    const topsButton = document.getElementById("tops-button");
    const bottomsButton = document.getElementById("bottoms-button");
    const outerwearButton = document.getElementById("outerwear-button");
    const headwearButton = document.getElementById("headwear-button");

    topsButton.addEventListener("click", function() {
        navigateToCategory("Tops");
    });

    bottomsButton.addEventListener("click", function() {
        navigateToCategory("Bottoms");
    });

    outerwearButton.addEventListener("click", function() {
        navigateToCategory("Outerwear");
    });

    headwearButton.addEventListener("click", function() {
        navigateToCategory("Headwear");
    });
});
