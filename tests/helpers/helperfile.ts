import fs from 'fs';
import { parse } from 'csv-parse/sync';


export default function readcsv(filePath: string): any[] {
    // Implementation for reading CSV file
    const csv = fs.readFileSync(filePath, 'utf8');
    const data = parse(csv, {
      columns: true,
      skip_empty_lines: true,
      trim: true,
    });
    return data;
}
