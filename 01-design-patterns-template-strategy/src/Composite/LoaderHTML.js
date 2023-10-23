import fs from 'node:fs';
import Loader from './Loader.js';
const fileType = 'html';

export default class LoaderHTML extends Loader {
  constructor() {
    super(fileType);
  }
    
  load(filePath) {
    return new Promise((resolve) => {
      const htmlData = fs.readFileSync(filePath, 'utf-8');
    
        const rows = htmlData.match(/<tr class="data-row">[\s\S]*?<\/tr>/g);
        
        const jsonData = rows.map((row) => {
          const idMatch = row.match(/<td class="data-id">([\s\S]*?)<\/td>/);
          const nomeMatch = row.match(/<td class="data-nome">([\s\S]*?)<\/td>/);
          const estadoMatch = row.match(/<td class="data-estado">([\s\S]*?)<\/td>/);
        
          if (idMatch && nomeMatch && estadoMatch) {
            return {
              ID: idMatch[1].trim(),
              Nome: nomeMatch[1].trim(),
              Estado: estadoMatch[1].trim(),
            };
          }
        
          return null;
        }).filter((row) => row !== null);
        
        resolve (jsonData);
    });
  }
}