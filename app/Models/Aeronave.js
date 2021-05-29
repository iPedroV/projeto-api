'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Aeronave extends Model {

    fretes(){
        return this.hasMany('App/Models/Frete')
    }

    modelo(){
        return this.belongsTo('App/Models/Modelo')
    }

    fabricante(){
        return this.belongsTo('App/Models/Fabricante')
    }

    categorias(){
        return this.belongsToMany('App/Models/Categoria').pivotTable('aeronaves_categorias')
    }

    static getCamposAeronave(){
        return ['nome', 'capacidade', 'autonomia', 'horas_voo',
                'valor', 'fabricacao', 'ultima_revisao', 'modelo_id', 'fabricante_id']
    }
}

module.exports = Aeronave
