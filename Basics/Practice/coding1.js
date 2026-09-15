//Take a number and check whether it is even or odd.
let EvenOrODD=function evenOrODD(num){
    if(num%2===0){
        console.log("even")
    }
    else{
        console.log("Odd")
    }

}
EvenOrODD(12);

//Find the largest of three numbers.
(function largestnum(num1,num2,...nan){
    console.log(arguments);

    let largest=arguments[0];
    for(let i=0;i<arguments.length;i++){
        if(arguments[i]>largest){
            largest=arguments[i];

        }
    }
    console.log(largest)
    return largest;

})(34,454,78,90,1001);


//for each loop
let phones=["ios","android","samsung","HP","micromax"];
phones.forEach((ele,index,array)=>{
    console.log(ele);
    console.log(index);
})

for(let ele of phones){
    console.log(ele);
}
console.log("for eacg+++++++++++++++++++++")
let obj={
    name:"venkatesh",
    village:"Nelampadu",
    district:"Nandyal"
}
for(let key in obj){
    console.log(key);
    console.log(obj[key]);

}

//Array function

let arraow=Hero=>console.log(Hero);
arraow("Prabhas");

let zeroparam=()=>{
    console.log("Bigil")
    console.log("rama")
    console.log("Vijay")
}
zeroparam();

//method without name
let add1=function(num,num3){
    return num*num3;
}
console.log(add1(4,5))

//method with name
let add2=function mul(num,num3){
    return num*num3
}
console.log(add2(100,1000));

//param in function

function defaultparam(name,dis="kurnool"){
    console.log(name+ dis)
}

defaultparam("venu");

//passobject in param

(function objectdata(userdata){
    console.log(`userdata : ${userdata.name} and ${userdata.id}`);
})(
    {
        name:"karthika",
        id:1
    }
)
