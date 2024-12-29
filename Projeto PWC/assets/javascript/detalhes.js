document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const countryName = urlParams.get('country');

    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao buscar detalhes: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            const country = data[0];
            document.querySelector('#countryName').textContent = country.name.common;
            document.querySelector('#countryFlag').src = country.flags.png;
            document.querySelector('#countryRegion').textContent = country.region;
            document.querySelector('#countryPopulation').textContent = country.population.toLocaleString();
            document.querySelector('#countryCapital').textContent = country.capital;
        })
        .catch(error => console.error('Erro ao carregar os detalhes:', error));
});