'use strict';

/**
 * Respuesta class.
 *
 * @constructor
 * @param {Boolean} success - Bandera de request correcta.
 * @param {String} message  - Mensaje.
 * @param {Any} object  - Objeto.
 */
function Respuesta(success, message, object) {
    this.success = success;
    this.message = message;
    this.object = object;
}

module.exports = Respuesta;