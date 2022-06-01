// Selectionner toutes les lignes du tableaux
let tabTr = document.querySelectorAll('tbody tr');

//Ajout d'un ecouteur d'événement au click sur toutes les lignes
for (let tr of tabTr) {
    tr.addEventListener('mouseover', function(){
        this.classList.toggle('gris')
    });
};


//lien
let selectLink = document.querySelectorAll('a');

for (let link of selectLink) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        let target = this.getAttribute('href');
        let response = confirm('Voulez-vous partir de la page ?');

        if(response == true){
            window.location = target; // redirection vers le lien précedent
        } else {
            alert('Merci de nous accorder votre confiance')
        }
    });
};