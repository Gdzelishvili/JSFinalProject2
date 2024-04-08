let favoriteCount = localStorage.getItem("favoriteCount") || 0;

function updateFavoritesCounter() {
  let favoritesCounter = document.getElementById("favoritesCounter");
  if (favoritesCounter) {
    favoritesCounter.textContent = `Total Favorites: ${favoriteCount}`;
  }
}

export { favoriteCount, updateFavoritesCounter };