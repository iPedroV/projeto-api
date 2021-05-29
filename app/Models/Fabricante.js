'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Fabricante extends Model {

    aeronaves(){
        return this.hasMany('App/Models/Aeronave')
    }

    static getCamposFabricante(){
        return ['nome']
    }
}

module.exports = Fabricante
