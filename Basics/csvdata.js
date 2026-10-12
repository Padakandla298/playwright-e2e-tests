import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'csv-parse/sync';

const filepath = path.resolve(process.cwd(), '..', 'data', 'test-data.csv');
const csv = fs.readFileSync(filepath, 'utf8');
const records = parse(csv, {
  columns: true,
  skip_empty_lines: true,
  trim: true,
});

console.log(filepath);
console.log(records);
