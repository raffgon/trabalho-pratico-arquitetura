import fs from 'node:fs';
import Loader from './Loader.js';
const fileType = 'xml';

export default class LoaderXML extends Loader {
  constructor() {
    super(fileType);
  }
  
  load(filePath) {
    return new Promise((resolve) => {
      const xmlData = fs.readFileSync(filePath, 'utf-8');
      const rows = xmlData.split('<row>');
      rows.shift();

      const jsonData = rows.map((row) => {
        const idMatch = /<ID>(.*?)<\/ID>/.exec(row);
        const nomeMatch = /<Nome>(.*?)<\/Nome>/.exec(row);
        const estadoMatch = /<Estado>(.*?)<\/Estado>/.exec(row);
      
        if (idMatch && nomeMatch && estadoMatch) {
          return {
            ID: idMatch[1],
            Nome: nomeMatch[1],
            Estado: estadoMatch[1],
          };
        }
      
        return null;
      }).filter((row) => row !== null);

      resolve(jsonData);
    });
  }
}