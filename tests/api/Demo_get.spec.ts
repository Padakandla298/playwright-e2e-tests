import { expect, request } from "@playwright/test";
import { test } from "../helpers/config.fixture2";
import { log } from "../helpers/logger";
import params from "../../data/params";
import constants from "../../data/constants.json";
import File_read_write from "../helpers/File_read_write";


test.describe("Demo GET API Test", () => {
 
    test.beforeEach(async ({ request }, testinfo) => {
       

    })
   
  test("GET API Test", async ({ request },testinfo) => {
    const envconfig = testinfo.project.use as any;
    await log("info", "Starting GET API Test");
    const baseurl = envconfig.apiUrl;
    const res = await request.get(`${baseurl}users`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    expect(res.status()).toBe(constants.statucodes.sucess);
    await log(
      "info",
      `GET API Test completed with status code: ${res.status()}`,
    );
   
    const responseBody = await res.json();
    await File_read_write.writefilee(`${process.cwd()}/data/responsedata/list-of-users.json`, `${JSON.stringify(responseBody,undefined,4)}`);
    await log("info", `Response Body: ${JSON.stringify(responseBody)}`);
  });
  test("post request", async ({ request }, testinfo) => {

    await log("info", "Starting POST API Test");
    const envconfig = testinfo.project.use as any;
    const baseurl = envconfig.apiUrl;
    const postdata=params.postdata();
    
    const resonse= await request.post(`${baseurl}users`,{
        headers:{
            "content-Type":"application/json"
        },
        data:postdata
     })
     expect(resonse.status()).toBe(constants.statucodes.crated);
     const responseBody = await resonse.json();
     await log("info", `POST API Test completed with status code: ${resonse.status()}`);
        await log("warn", `Response Body: ${JSON.stringify(responseBody)}`);


     
  });
});

