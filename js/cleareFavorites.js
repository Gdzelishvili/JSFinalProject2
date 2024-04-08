document.getElementById('clearFavorites').addEventListener('click', clearFavorites);

function clearFavorites() {
    localStorage.removeItem('favoriteNews');
    const favoritesContainer = document.getElementById('favoritesContainer');
    favoritesContainer.innerHTML = ''; 
}