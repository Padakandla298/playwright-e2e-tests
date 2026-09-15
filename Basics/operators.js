console.log(`operators123`)

//Assignment Operators
let x=y=1;
console.log(x);
console.log(y);
let start=0;
for(let i=0;i<=5;i++){
    let start=0;
    start+=i;
    console.log(start);
    
}
console.log(start);


//Arthamitic operator
console.log(`arthamatic operator`)
let a=4;
let b=2;
console.log(a%b);
for(let i=4;i<10;i++){
    console.log(i);
}
for(let i=5;i>=0;i--){
    console.log(i);
}
console.log(+"33"+89);


//Comparison Operator
console.log("comparison operator")
let A1=1
let A2="1";
console.log(A1==A2);
console.log(A1===A2);

console.log(1!==1);
console.log(1!==3);

//And Operator
console.log(`And Operator`);
let day="monday"
if(typeof day==="string" && day.length>1){
    console.log(`both are true`)
}
else{
    console.log(`both are not true`)
}

//Or Operation
console.log(`Or Operator`)
let today="tuesday";
if(today==="sunday" || today === "monday"){
    console.log(`Day matched : ${today}`)
}
else{
    console.log(`Day not matched : ${today}`)
}

//logical OR !Operator
console.log(`Logical or and !Operator`);
let fistname="Robbert";
let lastname="China";
if(!fistname || !lastname){
    console.log(`first name and last are true ${fistname}and ${lastname}`);
}
else{
    console.log(`firstname and last are not true ${fistname}or ${lastname}`);
}
let targetbrowser=null;
let browser=targetbrowser || "Firefox";
console.log(browser)


//Ternary Operator
let runner="local"
let loglevel=runner=="local"?"info":"Error";
console.log(loglevel);
let runner1="cloud";
let loglevel1=runner1=="local"?"info":runner1=="cloud"?"not error":"error";
console.log(loglevel1);