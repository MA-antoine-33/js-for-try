//création de la promesse nom + image
const promiseGetUsers = new Promise(function(resolve, reject){
    if(Product !== 'undefined'){
        resolve(Product)
    }else{
        reject('Produits non trouvé')
    }
})

//Récuperer l'état de la promesse nom
promiseGetUsers
    .then(function(prod){
        let liste = '<ul>';
        for (let user of prod){
            liste += `<li>${user.name}</li>`;
        }
        liste += '</ul>';
        document.querySelector("#users").innerHTML = liste;
    })
    .catch(function(error){
        console.log(error);
    })

