'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Aeroporto extends Model {
    
    estado(){
        return this.belongsTo('App/Models/Estado')
    }

    fretes_partida(){
        return this.hasMany('App/Models/Frete', 'id', 'aeroporto_partida_id')
    }

    fretes_destino(){
        return this.hasMany('App/Models/Frete', 'id', 'aeroporto_destino_id')
    }

    static getCamposAeroporto(){
        return [
            'nome', 
            'estado_id' 
        ]
    }
}

module.exports = Aeroporto
