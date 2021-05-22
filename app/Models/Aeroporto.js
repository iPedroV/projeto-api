'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Aeroporto extends Model {
    
    estado(){
        return this.belongsTo('App/Models/Estado')
    }

    /*fretes(){
        return this.hasMany('App/Models/Frete') COM PROBLEMA
    }*/

    static getCamposAeroporto(){
        return ['nome', 'estado_id' ]
    }
}

module.exports = Aeroporto
