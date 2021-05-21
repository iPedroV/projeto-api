"use strict";

/*
|--------------------------------------------------------------------------
| FabricanteSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Fabricante = use("App/Models/Fabricante");
class FabricanteSeeder {
  async run() {
    await Fabricante.createMany([
      { nome: "AIRBUS" },
      { nome: "ANTONOV" },
      { nome: "ATR" },
      { nome: "British Aerospace BAE Systems" },
      { nome: "BOEING" },
      { nome: "Bombardier" },
      { nome: "Cessna" },
      { nome: "Comac" },
      { nome: "Aérospatiale-BAC" },
      { nome: "Donier" },
      { nome: "Douglas" },
      { nome: "Embraer" },
      { nome: "Fokker" },
      { nome: "Hawker Siddeley" },
      { nome: "LET" },
      { nome: "Ilyushin" },
      { nome: "Lockheed" },
      { nome: "McDonnell Douglas" },
      { nome: "Mistsubish" },
      { nome: "SAAB" },
      { nome: "Sunkhoi" },
      { nome: "Tupolev" },
      { nome: "Vickers-Armstrongs" },
      { nome: "Xian Aicraft" },
      { nome: "Yakovlev" },
    ]);
  }
}

module.exports = FabricanteSeeder;
