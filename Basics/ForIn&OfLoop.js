console.log(`for in for object `)//object contains key and values in java script
console.log(`for of for Arrays `)
let object={
    a:20,
    b:30,
    c:30,
    d:40,
    e:50
}
let window=["Amazon","Google","AWS","FireFox"];
for(let key in object){
    console.log(`key is => ${key} : ${object[key]}`);
}
for(let ele of window){
    console.log(ele);

    
}

