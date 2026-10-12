import {type FullConfig } from "@playwright/test";

import * as fs from 'fs';
import * as path from 'path';

// the global setupu must export a single function that take as config object
export default async function globalSetup(config: FullConfig) {

    console.log("cleaning dir")
    if(process.env.RUNNER?.toUpperCase()==="LOCAL"){
        
        
    }
    
      const resultDir=path.resolve(process.cwd(),"allure-results");
    console.log(resultDir);
    if(fs.existsSync(resultDir)){
        fs.rmSync(resultDir,{recursive:true,force:true})
    
    }

    process.env.LoginCookiees=undefined;

}

