$("#add-motor").submit(function (e) {
    e.preventDefault();
    add();
});


let motorKey="Motors"
let motors= JSON.parse(localStorage.getItem(motorKey)) || []


function add(){
    let id=$("#motor-id").val()
    let name=$("#motor-name").val()
    let category=$("#motor-category").val()
    let price=$("#motor-price").val()
    let img=$("#motor-img").val()
    let information=$("#motor-information").val()

    let motor ={
        "id":id,
        "name":name,
        "category":category,
        "price":price,
        "img":img,
        "information":information
    }

    let idExist = motors.find(function(value){
        return value.id==motor.id
    })

    if(idExist){
        alert("Id đã tồn tại")
    } else {
        motors.push(motor)
        localStorage.setItem(motorKey,JSON.stringify(motors))
        alert("Add thành công")
    }

}
