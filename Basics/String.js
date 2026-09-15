//String
//creating string 
//1.single quotes
//2.Double quotes
//3.template literatls 
//with object
let s='hello world'
let s1="Hello America"
let s3=`my name is venkatesh`
let s4=String("venky")

console.log(s+' '+s1+" "+s3+" "+s4);
// Format string

let name ='venkatesh';
let village='nelampadu';
let district='kurnool';
console.log(`my name is ${name} and my village name is ${village} and my district name is ${district}`);

//comparator String 
let movie ='bhahubali'
if(movie.toLowerCase()==="bhahubali"|| movie.length>=1)
    {
        console.log("its working");
}

if(movie.startsWith("bhahu")){
    console.log("condition is true")
}
if(movie.endsWith("bali")){
    console.log("condition is true")
}

