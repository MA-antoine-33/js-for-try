let titles = document.querySelectorAll('.footer-list li');

for (title of titles) {
    title.addEventListener('click', function(){
        //On récupere le numero du titre
        let num = this.getAttribute('data-tabtitle');

        //On masque la div precedente (active)
        document.querySelector('.footer-div > div.active').classList.remove('active');

        //On réactive la div voulu
        document.querySelector('#tab' + num).classList.add('active');

        //On enleve la class du titre precedement actif
        document.querySelector('.footer-list li.active').classList.remove('active');

        //On remet la class au titre actif
        this.classList.add('active');
    })
}