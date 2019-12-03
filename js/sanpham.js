$(document).ready(function () {
    let motors = JSON.parse(localStorage.getItem('Motors')) || [];

    let searchParams = new URLSearchParams(window.location.search)

    let id = searchParams.get('id');

    let mortor = motors.filter(i => i.id === id);
    mortor.forEach(product => {
        $('#san_pham').append('<div class="row s_product_inner">' +
            '<div class="col-lg-5" style="padding-left: 200px;">' +
            '<img src="' + product.img +'" height="380" width="450">' +
            '</div>' +
            '<div class="col-lg-5 offset-lg-1">' +
            '<div class="s_product_text">' +
            '<h3>'+product.name+'</h3>' +
            '<h2>'+product.price+'</h2>' +
            '<ul class="list">' +
            '<li>' +
            '<a class="active" href="#">' +
            '</li>' +
            '<li>' +
            '<a href="#"> <span>Availibility</span> : In Stock</a>' +
            '</li>' +
            '</ul>' +
            '<p>' +
            product.information+
          '</p>' +
      '</div >'+
    '</div >');
    })
});


function addToCart(){

    let searchParams = new URLSearchParams(window.location.search)

    let id = searchParams.get('id');

    let Cart = JSON.parse(localStorage.getItem('Cart')) || [];

    Cart.push(id);

    localStorage.setItem('Cart', JSON.stringify(Cart));

    alert('Cho vào giỏ hàng thành công')

    window.location.href="list"

}

