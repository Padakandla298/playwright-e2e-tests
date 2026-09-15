console.log("self invoking function");

(function addtwonum(num1,num2){
    console.log (num1*num2);
})(4,5)
