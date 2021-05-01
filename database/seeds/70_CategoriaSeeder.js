"use strict";

/*
|--------------------------------------------------------------------------
| CategoriaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Categoria = use("App/Models/Categoria");

class CategoriaSeeder {
  async run() {
    await Categoria.createMany([
      { tipo_aeronave: "Avião Esportivo" },
      { tipo_aeronave: "Hidroavião civil" },
      { tipo_aeronave: "Avião civil de instrução" },
      { tipo_aeronave: "Avião civil a jato" },
      { tipo_aeronave: "Avião civil supersônico" },
      { tipo_aeronave: "Avião civil de transporte de carga" },
      { tipo_aeronave: "Avião civil de transporte de passageiro" },
    ]);
  }
}

module.exports = CategoriaSeeder;
