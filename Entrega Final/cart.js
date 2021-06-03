var cart

if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'))
} else {
    cart = []
}


var containerCart = $('.cart')

cart.forEach(function (producto) {
    containerCart.append(`
    <div class="${producto.productId}">
        <h2>${producto.productName}</h2>
        <img src=${producto.productImage}>
        <p>${producto.productPrice}</p>
        <button class="btnRemove" id="${producto.productId}"> Eliminar </button>
    </div>
    `)
})

var btnRemove = $('.btnRemove')

btnRemove.click(function (event) {
    cart = cart.filter(function (product) { return product.productId != $(event.target).attr('id')})
    if (cart.length) {
        localStorage.setItem('cart', JSON.stringify(cart))
        $(`.${$(event.target).attr('id')}`).remove()
    } else {
        localStorage.removeItem('cart')
        containerCart.html('')
    }
})


