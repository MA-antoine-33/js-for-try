//création de la promesse
const promiseGetUsers = new Promise(function(resolve, reject){
    if(Product !== 'undefined'){
        resolve(Product)
    }else{
        reject('Produits non trouvé')
    }
})

//Récuperer l'état de la promesse
promiseGetUsers
    .then(function(prod){
        console.log(prod);
        return prod.length;
    }).then(function(nbProduct){
        console.log("Il y a : " + nbProduct + " produits")
    })
    .catch(function(error){
        console.log(error);
    })