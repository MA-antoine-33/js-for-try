const images = document.getElementsByClassName('diapo-image');

//Masquer les photos sauf la première
for (let i = 1; i < images.length; i += 1 ) {
    images[i].classList.add('hidden');
}

//Clic sur le bouton