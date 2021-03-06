'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Frete extends Model {
    
    cliente(){
        return this.belongsTo('App/Models/Cliente')
    }

    aeroporto_partida(){
        return this.belongsTo('App/Models/Aeroporto', 'aeroporto_partida_id')
    }

    aeroporto_destino(){
        return this.belongsTo('App/Models/Aeroporto', 'aeroporto_destino_id')
    }

    aeronave(){
        return this.belongsTo('App/Models/Aeronave')
    }

    static getCamposFrete(){
        return [
            'valor', 
            'quantidade_passageiro', 
            'data_frete', 
            'hora_partida',
            'hora_chegada', 
            'cliente_id', 
            'aeronave_id', 
            'aeroporto_partida_id', 
            'aeroporto_destino_id' 
        ]
    }
}

module.exports = Frete
