const images = document.querySelectorAll('#diapo img');
let imgActive = 0;
images[imgActive].classList.add('show');
//Variable qui permet de stocker l'intervalle de temps
let interval;
//Je masque toutes les photos sauf la premiere
for (let i = 1; i < images.length; i += 1) {
    images[i].classList.add('hidden');
};

//Clic sur le bouton suivant
document.querySelector("#next").addEventListener('click', function(){
    next();
});

//clic sur le bouton precedent
document.querySelector('#previous').addEventListener('click', function (){
    prev();
});

//Clic sur le bouton play
document.querySelector("#play").addEventListener('click', function(){
    //Crétaion de l'intervalle de temps
    interval = setInterval(next, 1000);
});

//Clic sur le bouton pause
document.querySelector("#pause").addEventListener('click', function(){
    //Pause de l'intervalle de temps
    clearInterval(interval);
});

//fonction pour photo suivante
const next = function() {
    images[imgActive].classList.remove('show');
    images[imgActive].classList.add('hidden');
    imgActive += 1;
    if(imgActive >= images.length){
       imgActive = 0; 
    };
    images[imgActive].classList.remove('hidden');
    setTimeout(function(){
        images[imgActive].classList.add('show');
    }, 100) 
};

//Fonction pour photo précedente
const prev = function (){
    images[imgActive].classList.remove('show');
    images[imgActive].classList.add('hidden');
    imgActive -= 1;
    if(imgActive < 0){
        imgActive = images.length - 1;
    };
    images[imgActive].classList.remove('hidden');
    setTimeout(function(){
        images[imgActive].classList.add('show');
    }, 100) 
}

//Gestion touch du clavier
window.addEventListener('keydown', function(e){
    if(e.key == 'ArrowRight'){
        next();
    };
    if(e.key == 'ArrowLeft'){
        prev();
    };
})