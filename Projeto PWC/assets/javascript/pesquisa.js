//Sistema de pesquisa
var searchInput = document.querySelector('input[type="search"]');
var cols = document.querySelectorAll('.col');

searchInput.addEventListener('input', function () {
    var searchTerm = searchInput.value.toLowerCase().trim();
    cols.forEach(col => {
        var countryName = col.querySelector('.card-title').textContent.toLowerCase();

        if (countryName.includes(searchTerm)) {
            col.style.display = '';
        } else {
            col.style.display = 'none';
        }
    })
})