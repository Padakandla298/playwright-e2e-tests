import chalk from "chalk";
import { test } from "@playwright/test";

type LogLevel = "info" | "warn" | "error"| "log";
export async function log(loglevel:LogLevel,message:string){
    const plainline=`[${loglevel.toUpperCase()}] ${message}`;
    let colorline=plainline;
    switch(loglevel){
        case "info":
            console.log(chalk.white(plainline));
            break;
        case"warn":
             console.log(chalk.yellow(plainline));
             break;
        case"log":
             console.log(chalk.blue(plainline));
             break;
        default:
            console.log(plainline);
    }
    (console[loglevel] || console.log)(colorline);
   await test.step(plainline, async()=>{});

}