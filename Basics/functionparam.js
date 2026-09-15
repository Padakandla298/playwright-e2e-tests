function multiplynum(num,num1=98){
    return num*num1;

}

total =multiplynum(9)
console.log(total)

function userdat(userdetails){
    return `user details are ${userdetails.name},${userdetails.id}`

}
let data=userdat(
    {
        name:"venkatesh",
        id:2
    }
)
console.log(data);