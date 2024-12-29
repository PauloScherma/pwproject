const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

const favoritesContainer = document.getElementById('favorites-container');

function fetchCountryDetails(countryName) {
    return fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(response => response.json())
        .then(data => data[0]);
}

favorites.forEach(countryName => {
    fetchCountryDetails(countryName).then(country => {
        const card = document.createElement('div');
        card.className = 'col';

        card.innerHTML =
            `<div class="card h-100 rounded-0 px-4 pt-4 card-shadow rounded-3">
      <a href="detalhes.html?country=${country.name.common}">
        <img src="${country.flags.png}" class="card-img-top" alt="Bandeira de ${country.name.common}">
      </a>
      <div class="card-body d-flex justify-content-center align-items-center">
        <h2 class="card-title text-center d-inline">${country.name.common}</h2>
        <button type="button" class="btn border-0 starButton">
          <i class="bi bi-star-fill icon"></i>
        </button>
      </div>
    </div>`;
        favoritesContainer.appendChild(card);
        favoritar();
        search();   
    });
});

