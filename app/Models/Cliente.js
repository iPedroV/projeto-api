'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Cliente extends Model {

    fretes(){
        return this.hasMany('App/Models/Frete')
    }

    static getCamposCliente(){
        return ['nome', 'email', 'data_nascimento', 'telefone', 'login', 'senha']
    }
}

module.exports = Cliente
