import HTMLHandler from "./HTMLHandler.js";

class HeaderHandler extends HTMLHandler {
    handle(data) {
        console.log('<!DOCTYPE HTML>');
        console.log('<html>');
        console.log('<head>');
        console.log('   <meta http-equiv="content-type" content="text/html; charset=utf-8" />');
        console.log('   <title>Relatório de Nomes de Cidades</title>');
        console.log('</head>');
        console.log('<body>');
        console.log('  <h1>Relatório de Nomes de Cidades</h1>');
        super.handle(data);
    }
}

export default HeaderHandler;

