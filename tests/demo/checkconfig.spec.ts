import { test } from "../helpers/config.fixture";

test("check",async({page},testinfo)=>{
   // console.log(`test info config : ${JSON.stringify(testinfo.config)}`)
    console.log(`username :${process.env.NAME}`);
    console.log(`password is ${process.env.PASSWORD}`);

});
