"use strict";

/*
|--------------------------------------------------------------------------
| EstadoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Estado = use("App/Models/Estado");

class EstadoSeeder {
  async run() {
    await Estado.createMany([
      { nome: "Acre", uf: "AC" },
      { nome: "Alagoas", uf: "AL" },
      { nome: "Amapá", uf: "AP" },
      { nome: "Amazonas", uf: "AM" },
      { nome: "Bahia", uf: "BA" },
      { nome: "Ceará", uf: "CE" },
      { nome: "Distrito Federal", uf: "DF" },
      { nome: "Espírito Santo", uf: "ES" },
      { nome: "Goiás", uf: "GO" },
      { nome: "Maranhão", uf: "MA" },
      { nome: "Mato Grosso", uf: "MT" },
      { nome: "Mato Grosso do Sul", uf: "MS" },
      { nome: "Minas Gerais", uf: "MG" },
      { nome: "Pará", uf: "PA" },
      { nome: "Paraíba", uf: "PB" },
      { nome: "Paraná ", uf: "PR" },
      { nome: "Pernambuco", uf: "PE" },
      { nome: "Piauí", uf: "PI" },
      { nome: "Rio de Janeiro", uf: "RJ" },
      { nome: "Rio Grande do Norte", uf: "RN" },
      { nome: "Rio Grande do Sul", uf: "RS" },
      { nome: "Rondônia", uf: "RO" },
      { nome: "Roraima", uf: "RR" },
      { nome: "Santa Catarina", uf: "SC" },
      { nome: "são Paulo", uf: "SP" },
      { nome: "Segipe", uf: "SE" },
      { nome: "Tocantins", uf: "TO" },
    ]);
  }
}

module.exports = EstadoSeeder;
