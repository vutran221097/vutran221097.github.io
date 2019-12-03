function handleClick(id) {
    window.location.href = "sanpham.html?id=" + id;
}

$(document).ready(function () {
    let motors = JSON.parse(localStorage.getItem('Motors')) || [];

    let searchParams = new URLSearchParams(window.location.search)

    let group = searchParams.get('group') || 0;


    if (group == 0 || group == 1) {
        let mortor_sports = motors.filter(i => i.category === "1");
        $('#sport-count').html(mortor_sports.length);
        mortor_sports.forEach(product => {
            $('#sport-bike').append('<div class="col-lg-4 col-sm-6">' +
                '<div onClick="handleClick(' + product.id + ')" class="single_category_product"' +
                '<div class="single_category_img">' +
                '<img src="' + product.img + '" alt="">' +
                '<div class="category_social_icon">' +
                '<ul>' +
                '<li><a href=""><i class="ti-heart"></i></a></li>' +
                '<li><a href=""><i class="ti-bag "></i></a></li>' +
                '</ul>' +
                '</div>' +
                '<div class="category_product_text">' +
                '<div>' +
                '<h5 motors_id="' + product.id + '" ' + '>' + product.name + '</h5>' +
                '</div>' +
                '<p>' + product.price + '</p>' +
                '</div>' +  
                '</div>' +
                '</div>' +
                '</div>');
        })
    } else {
        $('#sport-bike').remove();
    }

    if (group == 0 || group == 2) {
        let mortor_naked = motors.filter(i => i.category === "2");
        $('#naked-count').html(mortor_naked.length);
        mortor_naked.forEach(product => {
            $('#naked-bike').append('<div class="col-lg-4 col-sm-6">' +
                '<div onClick="handleClick(' + product.id + ')" class="single_category_product"' +
                '<div class="single_category_img">' +
                '<img src="' + product.img + '" alt="">' +
                '<div class="category_social_icon">' +
                '<ul>' +
                '<li><a href="t"><i class="ti-heart "></i></a></li>' +
                '<li><a href=""><i class="ti-bag "></i></a></li>' +
                '</ul>' +
                '</div>' +
                '<div class="category_product_text">' +
                '<div>' +
                '<h5 motors_id="' + product.id + '" ' + '>' + product.name + '</h5>' +
                '</div>' +
                '<p>' + product.price + '</p>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>');
        });
    } else {
        $('#naked-bike').remove();
    }


    if (group == 0 || group == 3) {
        let mortor_classic = motors.filter(i => i.category === "3");
        $('#classic-count').html(mortor_classic.length);
        mortor_classic.forEach(product => {
            $('#classic-bike').append('<div class="col-lg-4 col-sm-6">' +
                '<div onClick="handleClick(' + product.id + ')" class="single_category_product"' +
                '<div class="single_category_img">' +
                '<img src="' + product.img + '" alt="">' +
                '<div class="category_social_icon">' +
                '<ul>' +
                '<li><a href=""><i class="ti-heart "></i></a></li>' +
                '<li><a href=""><i class="ti-bag "></i></a></li>' +
                '</ul>' +
                '</div>' +
                '<div class="category_product_text">' +
                '<div>' +
                '<h5 motors_id="' + product.id + '" ' + '>' + product.name + '</h5>' +
                '</div>' +
                '<p>' + product.price + '</p>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>');
        })
    } else {
        $('#classic-bike').remove();
    }
});


function addToCard(id){
    console.log(id);
}

let addToCart = $('ti-bag')
console.log(addToCart)
for(let i=0;i<addToCart.length;i++){
        let button= addToCart[i]
        button.addEventListener('click',function(){
            console.log('click')
        })
}