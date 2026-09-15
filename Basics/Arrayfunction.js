console.log("Arrow function");

let name=(name)=>{
    console.log(name)
}
name("venku");

let name1=name=>
    console.log(name)

name1("ramu");


//double param
let mul=(num1,num2)=>{
    return num1*num2;
}
console.log(mul(9,8));

let arr=["window","tab","iphone","apple","ios"];
arr.forEach((ele,index,array)=>{
    console.log(ele);
    console.log(index);
    console.log(array)
})