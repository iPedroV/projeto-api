'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Categoria extends Model {

    aeronaves(){
        return this.belongsToMany('App/Models/Aeronave').pivotTable('aeronaves_categorias')
    }

    static getCamposCategoria(){
        return ['tipo_aeronave']
    }
}

module.exports = Categoria
