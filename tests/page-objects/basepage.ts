import{expect,type Locator,type Page} from  "@playwright/test";

import {log} from "../helpers/logger";
 
export default class BasePage{
    readonly page:Page;
    constructor(page:Page){
        this.page=page;
    }

    async navigate(url:string){
        await this.page.goto(url);
        await log("info",`Navigated to ${url}`);
    }

    async clickele(locator:Locator){
       try{
        await expect(locator).toBeVisible();
        await locator.click();
        await log("info",`Clicked on element ${locator}`);
       }
         catch(error){
            await log("error",`Failed to click on element ${locator}: ${error}`);
    }

}
    async enterText(locator:Locator,text:string){
        try{
            await expect(locator).toBeVisible();
            await locator.fill(text);
            await log("info",`Entered text "${text}" in element ${locator}`);
        }
        catch(error){
            await log("error",`Failed to enter text "${text}" in element ${locator}: ${error}`);
        }
}
}

