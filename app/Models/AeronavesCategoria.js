'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class AeronavesCategoria extends Model {
    static getCamposAeronavesCategoria(){
        return [
            'aeronave_id', 
            'categoria_id' 
        ]
    }
}

module.exports = AeronavesCategoria
