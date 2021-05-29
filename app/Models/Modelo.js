"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Modelo extends Model {
    
    aeronaves(){
        return this.hasMany('App/Models/Aeronave')
    }

    static getCamposModelo(){
        return ['nome']
    }
}

module.exports = Modelo;
