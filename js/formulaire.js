let form = document.querySelector('#loginForm');

//Ecouter la modification de l'email
form.email.addEventListener('change', function(){
    validEmail(this)
});

//Ecouter la modification du password
form.password.addEventListener('change', function(){
    validPassword(this)
});

//Ecouter la soumission du formulaire
form.addEventListener('submit', function(e){
    e.preventDefault();
    if (validEmail(form.email) && validPassword(form.password)) {
        form.submit();
    }    
})

//************* Validation de l'email ********
const validEmail = function(inputEmail){
    //créeation de l'expression réguliere pour la validation d'email
    let emailRegExp = new RegExp(
        '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g'
    );

    //recuperation de la balise small 
    let small = inputEmail.nextElementSibling;
    
     //On teste l'expression reguliere
    if(emailRegExp.test(inputEmail.value)) {
        small.innerHTML = 'Adresse valide';
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        return true;
    }else{
        small.innerHTML = 'Adresse non valide';
        small.classList.remove('text-success'); 
        small.classList.add('text-danger'); 
        return false;
    }
};

//************* Validation du password ********
const validPassword = function(inputPassword) {
    let msg;
    let valid = false;
    // au moins 3 caractère, 1maj, 1min et 1 chiffre
    if (inputPassword.value.length < 3) {
        msg = 'Le mot de passe doit contenir au moins 3 caractères';
    }else if(!/[A-Z]/.test(inputPassword.value)){
        msg = 'Le mot de passe doit contenir au moins une majuscule';
    }else if(!/[a-z]/.test(inputPassword.value)){
        msg = 'Le mot de passe doit contenir au moins une minuscule';
    }else if(!/[0-9]/.test(inputPassword.value)){
        msg = 'Le mot de passe doit contenir au moins un chiffre';
    }else{
        msg = 'Le mot de passe est valide';
        valid = true;
    };
//Affichage
//recuperation de la balise small 
let small = inputPassword.nextElementSibling;
    
//On teste l'expression reguliere
if(valid) {
   small.innerHTML = msg;
   small.classList.remove('text-danger');
   small.classList.add('text-success');
   return true;
}else{
   small.innerHTML = msg;
   small.classList.remove('text-success'); 
   small.classList.add('text-danger'); 
   return false;
}
};