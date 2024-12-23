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


