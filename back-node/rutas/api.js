'use strict';

var router = require('express').Router();
var busquedaControlador = require('../controladores/busquedaControlador');


var APIRoutes = function (app) {

    router.get('/items/:search', function (req, res) {
        busquedaControlador.getItems(req, res);
    });


   
    return router;


};

module.exports = APIRoutes;