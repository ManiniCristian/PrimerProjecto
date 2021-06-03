
var cart

if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'))
} else {
    cart = []
}

var productos

var containerProduct = $('.productContainer')

 $.ajax('base.json').done(function (data) {
   
        productos = data
        productos.forEach(function (producto) {
            containerProduct.append(`
            <div class="${producto.productId}">
                <h2>${producto.productName}</h2>
                <img src=${producto.productImage}>
                <p>${producto.productPrice}</p>
                <button class="btnAdd" id="${producto.productId}"> Agregar </button>
            </div>
            `)
        })
        
        var btnAdd = $('.btnAdd')
        
        btnAdd.click(function (event) {
            productos.forEach(function (producto) {
                if (producto.productId == $(event.target).attr('id')) {
                    cart.push(producto)
                    localStorage.setItem('cart', JSON.stringify(cart))
                }
            })
        })
       
    })

    $(document).ready(function(){
        $("#botonlista").click(() => {
       $("#lista").slideToggle("slow"); 
    })
     })