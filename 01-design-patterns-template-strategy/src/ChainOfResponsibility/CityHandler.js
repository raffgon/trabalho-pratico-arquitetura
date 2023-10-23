import HTMLHandler from "./HTMLHandler.js";

class CityHandler extends HTMLHandler {
    handle(data) {
        data.forEach((city)=>{
            console.log('          <li>' + city + '</li>');
            super.handle(data);
        });
    }
}

export default CityHandler;