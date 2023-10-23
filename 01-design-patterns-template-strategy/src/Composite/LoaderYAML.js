import fs from 'node:fs';
import Loader from './Loader.js';
const fileType = 'yaml';

export default class LoaderYAML extends Loader {
  constructor() {
    super(fileType);
  }
  
  load(filePath) {
    return new Promise((resolve) => {
        const yamlData = fs.readFileSync(filePath, 'utf-8');
        const rows = yamlData.split('\n').filter(row => row.trim().length > 0);
        const jsonData = [];
        
        for (let i = 0; i < rows.length; i += 3) {
          const idMatch = /ID:\s*'(\d+)'/.exec(rows[i]);
          const nomeMatch = /Nome:\s*(.+)/.exec(rows[i + 1]);
          const estadoMatch = /Estado:\s*'(\d+)'/.exec(rows[i + 2]);
          
          if (idMatch && nomeMatch && estadoMatch) {
            const data = {
              ID: idMatch[1],
              Nome: nomeMatch[1],
              Estado: estadoMatch[1],
            };
            
            jsonData.push(data);
          }
        }
        
        resolve(jsonData);
    });   
  }
}