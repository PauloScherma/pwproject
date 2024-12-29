document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.row.row-cols-1.row-cols-md-3.g-4');

  fetch('https://restcountries.com/v3.1/all')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erro na API: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      data.forEach(country => {
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
                  <i class="bi bi-star icon"></i>
                </button>
              </div>
            </div>`;

        container.appendChild(card);
      });
      favoritar();
      search();
    })
    .catch(error => {
      console.error('Erro ao carregar os países:', error);
    });
});
