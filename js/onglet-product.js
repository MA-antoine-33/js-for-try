let titlesProduct = document.querySelectorAll('.product-onglet_list li')

for (titleProduct of titlesProduct) {
    titleProduct.addEventListener('mouseover', function(){
        let num = this.getAttribute('data-tabtitle');
        document.querySelector('.product-onglet > div.product-active').classList.remove('product-active');
        document.querySelector('#tab' + num).classList.add('product-active');
        document.querySelector('.product-onglet_list li.product-active').classList.remove('product-active');
        this.classList.add('product-active');
    });
}