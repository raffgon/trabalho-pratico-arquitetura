import HTMLHandler from './HTMLHandler.js'

class StateHandler extends HTMLHandler {
    handle(data) {
      const citiesByState = {};
  
      data.forEach((item) => {
        if (!citiesByState[item.Estado]) { 
          citiesByState[item.Estado] = [];
        }
        citiesByState[item.Estado].push(item.Nome);
      });
  
      console.log("<ul>");
      Object.keys(citiesByState)
        .map((Estado) => {
            const cities = citiesByState[Estado];
            console.log("  <li>" + Estado);
            console.log("      <ul>")
            super.handle(cities);
            console.log("      </ul>")
            console.log("  </li>");
      });
      console.log("</ul>");
      console.log('</body>');
      console.log('</html>');
    }
}

export default StateHandler;