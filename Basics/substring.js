//substring
let string="charan teja";
let str=string.slice(0,7);
console.log(str);

console.log(string.slice(7));
console.log(string.slice(-4));

//replace 
let her="karthi@ venkatesh:";
let h1=her.replace(/[@:]/g, "45");
console.log(h1);

//split

let name="venkatesh Yadav"
let array=name.split(" ")
console.log(array);

for(let ele of array){
    console.log(ele);
}
console.log("for each")
array.forEach((ele,index,array1)=>{
    console.log(ele);
    console.log(index);
    console.log(array1);

})


///indexof
let Town="maharastra";
let subtown=Town.indexOf("r");
console.log(subtown);


