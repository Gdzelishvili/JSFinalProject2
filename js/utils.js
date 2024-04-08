let favoriteCount = localStorage.getItem("favoriteCount") || 0;

function updateFavoritesCounter() {
  const favoritesCounter = document.getElementById("root");
  if (favoritesCounter) {
    favoritesCounter.textContent = `Total Favorites: ${favoriteCount}`;
  }
}

export { favoriteCount, updateFavoritesCounter };