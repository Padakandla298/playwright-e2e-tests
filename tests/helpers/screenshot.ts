import {test,type Page,type Locator} from "@playwright/test";


async function fullPagetakeScreenshot(page:Page,screenshotName:string){
   const screenshot= await page.screenshot({fullPage:true});
    test.info().attach(screenshotName,
        {
            body:screenshot,
            contentType:"image/png"
        }

    )

}
async function elementScreenshot(element:Locator,screenshotName:string){
   const screenshot= await element.screenshot();
    test.info().attach(screenshotName,
        {
            body:screenshot,
            contentType:"image/png"
        }

    )
    
}