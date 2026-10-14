import{expect,type Page } from '@playwright/test';
import { test } from "../helpers/config.fixture2";
import basepage from "./basepage";
import readcsv from "../helpers/helperfile";
import path from "path";
import { log } from '../helpers/logger';

export default class HomePage extends basepage{
    constructor(page:Page){
        super(page);
    }

    get userinputbox(){
        return this.page.getByRole('textbox', { name: 'Username' });
    }
     get pswdinputbox(){
        return this.page.getByRole('textbox', { name: 'Password' });
    }
     get loginButton(){
        return this.page.getByRole('button', { name: 'Login' })
    }

    async loginhomepage(username:string,password:string,url:string){
        try{
            await this.navigate(url);
            await expect(this.userinputbox).toBeVisible();
            await this.enterText(this.userinputbox,username);
            await expect(this.pswdinputbox).toBeVisible();
            await this.enterText(this.pswdinputbox,password);
            await expect(this.loginButton).toBeVisible();
            await this.clickele(this.loginButton);
            await log("info",`User logged in successfully with username: ${username}`);
        }catch (err) {
         throw new Error(
        `Failed login to nopcommerce web: ${url}, with username: ${username}`,
        { cause: err }//ause is a built-in property supported by JavaScript's Error constructor. You don't need to declare it yourself.
    );
}
    }
}