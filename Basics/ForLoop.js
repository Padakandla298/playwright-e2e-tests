let arr=[1,"venky","karthi","mahesh","Vijay",99];
console.log(arr);
let sum=0;
for(let i=0;i<arr.length;i++){
    if(typeof arr[i]==="number"){
        sum+=arr[i]
    }
}

let arr1=[1,"venky","karthi","mahesh","Vijay",99,109];
let sum1=0;
for(let i=0;i<arr1.length;i++){
    if(typeof arr1[i]!=="number")
        continue;
        sum1+=arr1[i]
    
}
console.log(sum)
console.log(sum1)


//For Each
console.log('for each')
let names=["karthi","Venkatesh","Yashodha","Venkuu"];
names.forEach((value,index1,array)=> {
    console.log(value)
    console.log(index1);
    console.log(array);
   

});
