"use strict";

/*
|--------------------------------------------------------------------------
| FreteSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Frete = use("App/Models/Frete");

class FreteSeeder {
  async run() {
    await Frete.createMany([
      {
        valor: 1003200.0,
        quantidade_passageiro: 200,
        data_frete: "2021-04-30",
        hora_partida: "10:30",
        hora_chegada: "12:00",
        cliente_id: 8,
        aeronave_id: 1,
        aeroporto_partida_id: 11,
        aeroporto_destino_id: 12
      },
      {
        valor: 2156000.0,
        quantidade_passageiro: 150,
        data_frete: "2021-03-12",
        hora_partida: "12:00",
        hora_chegada: "12:50",
        cliente_id: 2,
        aeronave_id: 13,
        aeroporto_partida_id: 5,
        aeroporto_destino_id: 1
      },
      {
        valor: 235840.0,
        quantidade_passageiro: 45,
        data_frete: "2021-02-10",
        hora_partida: "14:0",
        hora_chegada: "15:3",
        cliente_id: 3,
        aeronave_id: 19,
        aeroporto_partida_id: 10,
        aeroporto_destino_id: 18
      },
      {
        valor: 27133.33,
        quantidade_passageiro: 100,
        data_frete: "2021-03-05",
        hora_partida: "07:00",
        hora_chegada: "12:00",
        cliente_id: 4,
        aeronave_id: 31,
        aeroporto_partida_id: 14,
        aeroporto_destino_id: 12
      },
      {
        valor: 730400.0,
        quantidade_passageiro: 120,
        data_frete: "2021-04-01",
        hora_partida: "04:00",
        hora_chegada: "08:00",
        cliente_id: 5,
        aeronave_id: 44,
        aeroporto_partida_id: 10,
        aeroporto_destino_id: 11
      },
      {
        valor: 3330800.0,
        quantidade_passageiro: 300,
        data_frete: "2021-01-29",
        hora_partida: "09:00",
        hora_chegada: "11:00",
        cliente_id: 6,
        aeronave_id: 46,
        aeroporto_partida_id: 15,
        aeroporto_destino_id: 20
      },
      {
        valor: 1409760.0,
        quantidade_passageiro: 250,
        data_frete: "2021-03-30",
        hora_partida: "02:00",
        hora_chegada: "04:00",
        cliente_id: 7,
        aeronave_id: 50,
        aeroporto_partida_id: 3,
        aeroporto_destino_id: 7
      },
      {
        valor: 349360.0,
        quantidade_passageiro: 80,
        data_frete: "2021-04-23",
        hora_partida: "05:00",
        hora_chegada: "10:00",
        cliente_id: 8,
        aeronave_id: 63,
        aeroporto_partida_id: 3,
        aeroporto_destino_id: 9
      },
      {
        valor: 105600.0,
        quantidade_passageiro: 30,
        data_frete: "2021-02-16",
        hora_partida: "05:00",
        hora_chegada: "06:30",
        cliente_id: 9,
        aeronave_id: 67,
        aeroporto_partida_id: 4,
        aeroporto_destino_id: 5
      },
      {
        valor: 704.0,
        quantidade_passageiro: 1,
        data_frete: "2021-03-11",
        hora_partida: "18:00",
        hora_chegada: "21:00",
        cliente_id: 10,
        aeronave_id: 75,
        aeroporto_partida_id: 11,
        aeroporto_destino_id: 18
      },
      {
        valor: 2068.0,
        quantidade_passageiro: 2,
        data_frete: "2021-02-28",
        hora_partida: "17:00",
        hora_chegada: "19:00",
        cliente_id: 11,
        aeronave_id: 88,
        aeroporto_partida_id: 6,
        aeroporto_destino_id: 13
      },
      {
        valor: 176000.0,
        quantidade_passageiro: 25,
        data_frete: "2021-01-14",
        hora_partida: "15:00",
        hora_chegada: "18:30",
        cliente_id: 12,
        aeronave_id: 103,
        aeroporto_partida_id: 6,
        aeroporto_destino_id: 14
      },
      {
        valor: 440000.0,
        quantidade_passageiro: 100,
        data_frete: "2021-02-11",
        hora_partida: "19:00",
        hora_chegada: "20:00",
        cliente_id: 13,
        aeronave_id: 104,
        aeroporto_partida_id: 20,
        aeroporto_destino_id: 18
      },
      {
        valor: 61600.0,
        quantidade_passageiro: 15,
        data_frete: "2021-02-19",
        hora_partida: "16:00",
        hora_chegada: "18:00",
        cliente_id: 14,
        aeronave_id: 106,
        aeroporto_partida_id: 27,
        aeroporto_destino_id: 25
      },
      {
        valor: 88000.0,
        quantidade_passageiro: 250,
        data_frete: "2021-01-22",
        hora_partida: "16:00",
        hora_chegada: "16:30",
        cliente_id: 20,
        aeronave_id: 120,
        aeroporto_partida_id: 24,
        aeroporto_destino_id: 23
      },
      {
        valor: 440000.0,
        quantidade_passageiro: 160,
        data_frete: "2021-01-23",
        hora_partida: "15:00",
        hora_chegada: "15:20",
        cliente_id: 15,
        aeronave_id: 155,
        aeroporto_partida_id: 20,
        aeroporto_destino_id: 23
      },
      {
        valor: 176000.0,
        quantidade_passageiro: 90,
        data_frete: "2021-04-25",
        hora_partida: "02:00",
        hora_chegada: "05:30",
        cliente_id: 16,
        aeronave_id: 163,
        aeroporto_partida_id: 3,
        aeroporto_destino_id: 17
      },
      {
        valor: 426800.0,
        quantidade_passageiro: 100,
        data_frete: "2021-04-17",
        hora_partida: "02:00",
        hora_chegada: "04:00",
        cliente_id: 17,
        aeronave_id: 170,
        aeroporto_partida_id: 30,
        aeroporto_destino_id: 3
      },
      {
        valor: 140800.0,
        quantidade_passageiro: 100,
        data_frete: "2021-03-07",
        hora_partida: "16:00",
        hora_chegada: "19:00",
        cliente_id: 18,
        aeronave_id: 181,
        aeroporto_partida_id: 29,
        aeroporto_destino_id: 1
      },
      {
        valor: 127600.0,
        quantidade_passageiro: 10,
        data_frete: "2021-02-09",
        hora_partida: "08:00",
        hora_chegada: "10:00",
        cliente_id: 19,
        aeronave_id: 186,
        aeroporto_partida_id: 13,
        aeroporto_destino_id: 4
      },
      {
        valor: 316800.0,
        quantidade_passageiro: 20,
        data_frete: "2021-01-04",
        hora_partida: "07:00",
        hora_chegada: "10:30",
        cliente_id: 20,
        aeronave_id: 188,
        aeroporto_partida_id: 15,
        aeroporto_destino_id: 23
      }
    ]);
  }
}

module.exports = FreteSeeder;
