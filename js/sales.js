let formSales = document.querySelector('#find-sales');
let divAffiche = document.querySelector('#affiche-sales');

let saleChose = [], selectBox = document.getElementById('chose-sales'), i;
let paragraphe = document.querySelector('#affiche-sales p');


let fetchSales = (numSales) => {
    fetch('../backjson/sales.json')
    .then(response => response.json())
    .then(data => {imageSales.src = data[numSales].src});   
};



const button = document.querySelector('#validation');
button.addEventListener('click', function(){
    for (i = 0; i < selectBox.options.length; i++) {
        if(selectBox.options[0].selected){
            divAffiche.appendChild(document.createElement('p'));
            paragraphe = document.querySelector('#affiche-sales p');
            paragraphe.innerHTML = 'hello';
            fetchSales(0);
        }else{
            divAffiche.removeChild(paragraphe);
            divAffiche.appendChild(document.createElement('p'));
            paragraphe = document.querySelector('#affiche-sales p');
            paragraphe.innerHTML = 'yo';
            fetchSales(1);
        }
    };
});

let imageSales = document.getElementById('imgsales');



    


//let numSalesId = document.getElementById('sales'+ saleChose);

//A retravailler
//let salesZero = document.getElementById('sales0').value[0];
//console.log(salesZero);
//let salesOne = document.getElementById('sales1').value[0];
//console.log(salesOne);