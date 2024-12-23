const searchInput = document.querySelector('input[type="search"]');

function search() {
    const cols = document.querySelectorAll('.col'); // Recarrega os elementos dos cards
    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase().trim();
        cols.forEach(col => {
            const countryName = col.querySelector('.card-title').textContent.toLowerCase();

            if (countryName.includes(searchTerm)) {
                col.style.display = '';
            } else {
                col.style.display = 'none';
            }
        });
    });
}