import BasePage from "./basepage";
import { expect, type Page } from "@playwright/test";
import { log } from "../helpers/logger";
export default class UserDataPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
  get userinputbox() {
    return this.page.getByRole("textbox", { name: "Enter Name" });
  }
  get emailinputbox() {
    return this.page.getByRole("textbox", { name: "Enter EMail" });
  }
  get phoneinputbox() {
    return this.page.getByRole("textbox", { name: "Enter Phone" });
  }

  async enterUserData(name: string, email: string, phone: string,url:string) {
    try{
        await this.navigate(url);
        await log("info",`Navigated to ${url}`);
        expect(this.userinputbox).toBeVisible();
        
        await this.enterText(this.userinputbox, name);
        await log("info",`Entered user data: Name - ${name}`);
        expect(this.emailinputbox).toBeVisible();
        await this.enterText(this.emailinputbox, email);
        await log("info",`Entered user data: Name - ${name}, Email - ${email}`);
        expect(this.phoneinputbox).toBeVisible();
        await this.enterText(this.phoneinputbox, phone);
        await log("info",`Entered user data: Name - ${name}, Email - ${email}, Phone - ${phone}`);
    }catch(err){
        throw new Error(`failed to enter user data: Name - ${name}, Email - ${email}, Phone - ${phone}`, { cause: err });
    }
  }

}

