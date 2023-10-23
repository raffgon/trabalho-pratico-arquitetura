import fs from 'node:fs';
import Loader from './Loader.js';
const fileType = 'csv';

export default class LoaderCSV extends Loader {
  constructor() {
    super(fileType);
  }
  
  load(filePath) {
    return new Promise((resolve) => {
      const csvData = fs.readFileSync(filePath, 'utf-8');
      const rows = csvData.split(/\r?\n/).filter(row => row.trim().length > 0);
      const header = rows.shift().split(',');

      const jsonData = rows.map(row => {
        const values = row.split(',');
        const data = {};

        for (let i = 0; i < header.length; i++) {
          data[header[i]] = values[i];
        }

        return data;
      });

      resolve(jsonData);
    });     
  }
}