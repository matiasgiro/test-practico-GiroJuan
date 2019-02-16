
var Author = require('./author');


function busquedaRespuesta(items) {
    this.author = new Author();
    this.items = items;
   

}
module.exports = busquedaRespuesta;
