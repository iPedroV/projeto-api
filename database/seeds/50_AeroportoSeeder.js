"use strict";

/*
|--------------------------------------------------------------------------
| AeroportoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Aeroporto = use("App/Models/Aeroporto");

class AeroportoSeeder {
  async run() {
    await Aeroporto.createMany([
      {
        nome: "Aeroporto Internacional de São Paulo -Guarulhos",
        estado_id: 25,
      },

      { nome: "Aeroporto de São Paulo - Congonhas", estado_id: 25 },

      { nome: "Aeroporto Internacional de Brasília", estado_id: 7 },

      { nome: "Aeroporto Internacional Tom Jobim - Rio Galeão", estado_id: 19 },

      {
        nome: "Aeroporto Internacional de Belo Horizonte - Confins",
        estado_id: 13,
      },

      {
        nome: "Aeroporto Internacional de Viracopos - Campinas",
        estado_id: 25,
      },

      { nome: "Aeroporto do Rio de Janeiro - Santos Dumont", estado_id: 19 },

      { nome: "Aeroporto Internacional de Recife - Guararapes", estado_id: 17 },

      {
        nome: "Aeroporto Internacional de Porto Alegre - Salgado Filho",
        estado_id: 21,
      },

      {
        nome:
          "Aeroporto Internacional de Salvador - Dep. Luís Eduardo Magalhães",
        estado_id: 5,
      },

      {
        nome: "Aeroporto Internacional de Fortaleza - Pinto Martins",
        estado_id: 6,
      },

      {
        nome: "Aeroporto Internacional de Curitiba - Afonso Pena",
        estado_id: 16,
      },

      {
        nome: "Aeroporto Internacional de Florianópolis - Hercílio Luz",
        estado_id: 24,
      },

      { nome: "Aeroporto Internacional de Belém - Val-de-Cans", estado_id: 14 },

      {
        nome: "Aeroporto Internacional de Vitória - Eurico de Aguiar Salles",
        estado_id: 8,
      },

      { nome: "Aeroporto de Goiânia - Santa Genoveva", estado_id: 9 },

      {
        nome: "Aeroporto Internacional de Manaus - Eduardo Gomes",
        estado_id: 4,
      },

      {
        nome: "Aeroporto Internacional de Cuiabá - Marechal Rondon",
        estado_id: 11,
      },

      {
        nome: "Aeroporto Internacional de Foz do Iguaçu - Cataratas",
        estado_id: 16,
      },

      { nome: "Aeroporto Internacional de Natal", estado_id: 20 },

      {
        nome: "Aeroporto Internacional de Maceió - Zumbi dos Palmares",
        estado_id: 2,
      },

      {
        nome: "Aeroporto Internacional de Navegantes - Ministro Victor Konder",
        estado_id: 24,
      },

      { nome: "Aeroporto de Porto Seguro", estado_id: 5 },

      {
        nome: "Aeroporto Internacional de São Luís - Marechal Cunha Machado",
        estado_id: 10,
      },

      { nome: "Aeroporto Internacional de Campo Grande", estado_id: 12 },

      {
        nome:
          "Aeroporto Internacional de João Pessoa - Presidente Castro Pinto",
        estado_id: 15,
      },

      {
        nome: "Aeroporto de Teresina - Senador Petrônio Portela",
        estado_id: 18,
      },

      {
        nome: "Aeroporto de Uberlândia - Ten. Cel. Aviador César Bombonato",
        estado_id: 13,
      },

      {
        nome: "Aeroporto Internacional de Santa Maria - Aracaju",
        estado_id: 26,
      },

      { nome: "Aeroporto de Londrina - Governador José Rocha", estado_id: 16 },
    ]);
  }
}

module.exports = AeroportoSeeder;
