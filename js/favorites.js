const savedData = localStorage.getItem('favoriteNews');
if (savedData) {
  const favoritesContainer = document.getElementById('favoritesContainer');

  const savedCards = JSON.parse(savedData);

  savedCards.forEach(cardData => {
    const card = document.createElement('div');
    card.classList.add('favorite-card');

    card.innerHTML = `
      <h3>${cardData.title}</h3>
      <p>${cardData.description}</p>
      <p>Tags: ${cardData.tags.join(', ')}</p>
      <p>Published At: ${cardData.published_at}</p>
      <a href="${cardData.url}">Read more</a>
    `;

    favoritesContainer.appendChild(card);
  });
}