var favoriteCount = localStorage.getItem("favoriteCount") || 0;

function updateFavoritesCounter() {
  const favoritesCounter = document.getElementById("favoritesCounter");
  if (favoritesCounter) {
    favoritesCounter.textContent = `Total Favorites: ${favoriteCount}`;
  }
}