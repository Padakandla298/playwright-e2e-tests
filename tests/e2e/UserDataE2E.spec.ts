import{test} from "../helpers/config.fixture2";
import { log } from "../helpers/logger";
import HomePage from "../page-objects/HomePage";
import readcsv from "../helpers/helperfile";
import path from "path";
import userdataentry from "../page-objects/userdata.spec";
import params from "../../data/params";

test.describe("User data entry tests",()=>{
    test.beforeEach(async ({ page }, testinfo) => {})
   test("User data entry test",async({page, practiceUrl})=>{
    if (!practiceUrl) {
        throw new Error("practiceUrl is not configured. Run this test with config/test.playwright.config2.ts.");
    }
    const userdata=new userdataentry(page);
    const userdta=params.userdata2();
    for (const val of userdta){
    await userdata.enterUserData(val.name,val.email,val.phone,practiceUrl);

   }
});
});
