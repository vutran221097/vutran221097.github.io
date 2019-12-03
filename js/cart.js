$(document).ready(function () {
    let Carts = JSON.parse(localStorage.getItem('Cart')) || [];
    console.log(Carts)

    let motor = JSON.parse(localStorage.getItem('Motors')) || [];
    console.log(motor)

     
     Carts = motor.filter(i => { if (Carts.indexOf(i['id'].toString()) > -1) return i.id })
    // Carts = motor.filter(i => i.id==Carts.indexOf(i['id'].toString()))
       
    Carts.forEach(product => {
        $('#cart').append(
            '<tr>' +
            '<td>' +
            '<div class="media">' +
            '<div class="d-flex">' +
            '<img src="' + product.img + '" height="200" width="300">' +
            '</div>' +
            '<div class="media-body">' +
            '<p style="padding-left:120px;">' + product.name + '</p>' +
            '</div>' +
            '</div>' +
            '</td>' +
            '<td>' +
            '<h5 style="padding-left:120px;">' + product.price + '</h5>' +
            '</td>' +
            '<td>' +
            '<div class="product_count">' +
            '<p style="padding-left:120px;">' + "1" + '</p>' +
            '</div>' +
            '</td>' +
            '<td>' +
            '<h5 style="padding-left:120px;">' + product.price + '<h5>' +
            '</td>' +
            '</tr>'
        );
    })
});

function clearCart(){
    localStorage.removeItem("Cart")
    alert('Xóa giỏ hàng thành công')
    window.location.href="/"
}