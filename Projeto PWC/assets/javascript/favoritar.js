function favoritar() {
    const starButtons = document.querySelectorAll('.starButton');

    starButtons.forEach(button => {
        button.addEventListener('click', () => {
            const countryName = button.parentElement.querySelector('.card-title').textContent;

            let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

            if (favorites.includes(countryName)) {
                const index = favorites.indexOf(countryName);
                if (index !== -1)
                    favorites.splice(index, 1);
                button.querySelector('.icon').classList.replace('bi-star-fill', 'bi-star');
            } else {
                favorites.push(countryName);
                button.querySelector('.icon').classList.replace('bi-star', 'bi-star-fill');
            }
            console.log(...favorites);

            localStorage.setItem('favorites', JSON.stringify(favorites));
        });
    });
}

favoritar();