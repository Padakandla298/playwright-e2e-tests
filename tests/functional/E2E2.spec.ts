import {  expect } from '@playwright/test';
import { test } from "../helpers/config.fixture2";
import constants from "../../data/constants.json";
import params from "../../data/params";
import readcsv from "../helpers/helperfile";
import path from "path";
import { log } from '../helpers/logger';



test.describe("Group of tests",()=>{
  console.log(`constants data ${JSON.stringify(constants.statucodes)}`)
  
 
  test.beforeEach("commansteps",async({page},testinfo)=>{
  const env=testinfo.project.use as any;
   await log("log",`test is running in test env`);
  
  
  await page.goto(env.appUrl);
  
  })

  
  const logindata=params.userdata();
   for(const val of logindata){
  test(val.testid, {tag:"@E2E",annotation:{type:"QAEnv",description:"prod Defect"}},async ({ page },testinfo) => {
   await log("log",`user enteering username`);
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(val.name);
     await log("log",`user enteering password`);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(val.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Welcome to the Secure Area.' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();

  let src= await page.screenshot({fullPage:true});
  testinfo.attach("Home Page Screenshot",{
    body:src,
    contentType: 'image/png'

  });
     await log("info",`user taken screenshot of home page`);
  

  
 
})};
const filepath = path.resolve(process.cwd(), 'data', 'test-data.csv');

const csvdata=readcsv(filepath);
for(const val of csvdata){
  test(`CSV ${val.testid}`, {tag:"@E2E",annotation:{type:"QAEnv",description:"prod Defect"}},async ({ page },testinfo) => {
  await page.getByRole('textbox', { name: 'Username' }).click();
  await log("log",`user enteering username`);
  await page.getByRole('textbox', { name: 'Username' }).fill(val.name);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await log("log",`user enteering password`);
  await page.getByRole('textbox', { name: 'Password' }).fill(val.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Welcome to the Secure Area.' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
  let src= await page.screenshot({fullPage:true});
  testinfo.attach("Home Page Screenshot",{
    body:src,
    contentType: 'image/png'

  });
       await log("info",`user taken screenshot of home page`);


})}
});
