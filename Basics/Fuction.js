//function is a set of statments to perform a task or calculate a value and fuction takes input and return output
function addSum(num1, num2){
    let sum=num1+num2;
    console.log(sum)
    return sum;
}
let total=addSum(3,4);
console.log(total);

//ananyomys function  usage in callback
/* 1.function withot name can be assign to variable
2.function with name can be assigne to variable

.......*/
//1.function withot name can be assign to variable
let totalsum=function (num1,num2){
    sum=num1+num2;
    return sum;

}
console.log(totalsum(4,10));
//function with name can be assigne to variable

let totalsum1=function addnum(num1,num2){
    sum=num1+num2;
    return sum;

}
console.log(totalsum1(45,89,100));





