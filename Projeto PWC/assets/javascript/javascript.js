//Fazer o botao dos favoritos mudar
var buttons = document.getElementsByClassName('starButton');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        // Seleciona o ícone dentro do botão clicado
        var icon = this.querySelector('.icon');

        if (icon.classList.contains('bi-star')) {
            icon.classList.remove('bi-star');
            icon.classList.add('bi-star-fill');
        } else {
            icon.classList.remove('bi-star-fill');
            icon.classList.add('bi-star');
        }
    });
}

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