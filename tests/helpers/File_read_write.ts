import fs from 'fs';
import { parse } from 'csv-parse/sync';
import { log } from './logger';
function readfilee(filePath: string){
    if(!fs.existsSync(filePath)){
        throw new Error(`File not found: ${filePath}`);
    }
    let data=fs.readFileSync(filePath, 'utf8');
    return data;
}
function writefilee(filePath: string, data: string){
    try{
        fs.writeFileSync(filePath, data, 'utf8');
         log("info",`Data written to file: ${filePath}`);
    }catch(error){
        
        throw new Error(`Failed to write data to file: ${filePath}`, { cause: error });
        log("error",`Failed to write data to file: ${filePath}, Error: ${error}`);  
    }
}
export default {readfilee,writefilee};