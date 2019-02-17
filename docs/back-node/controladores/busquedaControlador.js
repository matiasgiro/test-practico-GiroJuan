var Respuesta = require('../modeloRespuesta/respuesta');
var Request = require("request");
var Item = require("../modeloRespuesta/item");
var BusquedaRespuesta = require("../modeloRespuesta/busquedaRespuesta");
var Respuesta = require("../modeloRespuesta/respuesta");



var busquedaControlador = {};

busquedaControlador.getItems = function (req, res) {
    var search = req.params.search;
    if (!search) {
        res.status(200).json(new Respuesta(false, 'No envió parámetro de busqueda', null));
    } else {
        Request.get("http://api.mercadolibre.com/sites/MLA/search?q=:" + search, (error, response, body) => {
            if (error) {
                return console.dir(error);
            } else {
                var itemsArray = new Array();
                var consulta = JSON.parse(body);
                consulta.results.forEach(function (element, i) {
                    if (i <= 3) {
                        let res = new Item(element.id,element.title, element.price, element.address.state_name, element.thumbnail);
                        itemsArray.push(res);
                    }
                });
                let busquedaRespuesta = new BusquedaRespuesta(itemsArray);
                res.status(200).json(busquedaRespuesta);
            }
        });
    }
};
busquedaControlador.getItem = function (req, res) {
    var id = req.params.id;
    if (!id) {
        res.status(200).json(new Respuesta(false, 'No envió parámetro de busqueda', null));
    } else {
        Request.get("https://api.mercadolibre.com/items/" + id, (error, response, body) => {
            if (error) {
                return console.dir(error);
            } else {
                var consulta = JSON.parse(body);
                let respuesta = new Item(id,consulta.title, consulta.price,null, consulta.pictures[0].url,consulta.shipping.free_shipping,consulta.condition,consulta.sold_quantity);

                res.status(200).json(respuesta);
            }
        });
    }
};

module.exports = busquedaControlador;
