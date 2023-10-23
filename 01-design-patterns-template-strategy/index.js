import LoaderXML from './src/Composite/LoaderXML.js';
import LoaderHTML from './src/Composite/LoaderHTML.js';
import LoaderYAML from './src/Composite/LoaderYAML.js';
import LoaderCSV from './src/Composite/LoaderCSV.js';
import CompositeLoader from './src/Composite/CompositeLoader.js';
import CityHandler from './src/ChainOfResponsibility/CityHandler.js';
import StateHandler from './src/ChainOfResponsibility/StateHandler.js';
import HeaderHandler from './src/ChainOfResponsibility/HeaderHandler.js';

//Recebe o caminho do arquivo como argumento
const filePath = process.argv[2];

//Objetos composite
const compositeLoader = new CompositeLoader();
compositeLoader.addLoader(new LoaderXML());
compositeLoader.addLoader(new LoaderHTML());
compositeLoader.addLoader(new LoaderYAML());
compositeLoader.addLoader(new LoaderCSV());

//Objetos chain of responsibility

const cityHandler = new CityHandler();
const stateHandler = new StateHandler(cityHandler);
const headerHandler = new HeaderHandler(stateHandler);


compositeLoader.load(filePath)
  .then(jsonData => {
    headerHandler.handle(jsonData);
  })
  .catch(error => {
    console.error('Erro ao carregar e processar o arquivo:', error);
});