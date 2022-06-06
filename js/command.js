let buttons = document.querySelectorAll('.product-onglet button');

for (button of buttons) {
    button.addEventListener('click', function(){

    //Je recupere l'url de l'image
    let num = this.getAttribute('data-command');
    
    //Je créer mon image avec sa source
    //let create = document.createElement('img')
    let image = document.getElementById('image-product' + num);
    let srcImage = image.src;
    console.log(srcImage);
    //window.location="../html/pannier.html";
    let pannierImage = document.getElementById('mon-article_image');
    pannierImage.setAttribute('src', srcImage)
    //create.src = "../images/banane_" + num + ".jpg";
   // alert(create.innerHTML)

   
    //Je change de page
    //window.location="../html/pannier.html";
    //let addPhoto = document.getElementById('#mon-article');
    //let addLink = addPhoto.childElement.add(img);
   // addLink.src = create;
    //console.log(addLink)
    









        //Ouvre la page pannier
       
    });
};