"use strict";

/*
|--------------------------------------------------------------------------
| ClienteSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Cliente = use("App/Models/Cliente");
class ClienteSeeder {
  async run() {
    await Cliente.createMany([
      {
        nome: "Leo Bugalho Azeredo",
        email: "leo@email.com",
        data_nascimento: "1967-01-30",
        telefone: "(38)9370-1711",
        login: "leo001",
        senha: 1234,
      },
      {
        nome: "Brenda Aranha Aleixo",
        email: "brenda@email.com",
        data_nascimento: "1991-06-27",
        telefone: "(38)9370-1711",
        login: "brenda001",
        senha: 1234,
      },
      {
        nome: "Alexandre Quinta Lobato",
        email: "alexandre@email.com",
        data_nascimento: "1971-12-14",
        telefone: "(61)99485-6592",
        login: "alexandre001",
        senha: 1234,
      },
      {
        nome: "Oscar Vergueiro Sacadura",
        email: "oscar@email.com",
        data_nascimento: "1975-07-23",
        telefone: "(64)4123-9562",
        login: "oscar001",
        senha: 1234,
      },
      {
        nome: "Lúcio Anhaia Távora",
        email: "lucio@email.com",
        data_nascimento: "1949-03-29",
        telefone: "(45)9652-6541",
        login: "lucio001",
        senha: 1234,
      },
      {
        nome: "Hareem Póvoas Lindim",
        email: "hareem@email.com",
        data_nascimento: "1969-10-02",
        telefone: "(55)9652-9999",
        login: "hareem001",
        senha: 1234,
      },
      {
        nome: "Fernanda Cedraz Rolim",
        email: "fernanda@email.com",
        data_nascimento: "1983-09-13",
        telefone: "(99)1234-5236",
        login: "fernanda001",
        senha: 1234,
      },
      {
        nome: "Isa Chaves Castelo",
        email: "isa@email.com",
        data_nascimento: "1963-02-25",
        telefone: "(21)9265-6541",
        login: "isa001",
        senha: 1234,
      },
      {
        nome: "Dária Tabanez Murtinho",
        email: "daria@email.com",
        data_nascimento: "1965-02-06",
        telefone: "(33)9652-65412",
        login: "daria001",
        senha: 1234,
      },
      {
        nome: "Dora Miranda Sítima",
        email: "dora@email.com",
        data_nascimento: "1975-07-06",
        telefone: "(62)9222-5555",
        login: "dora001",
        senha: 1234,
      },
      {
        nome: "Ary Macieira Sesimbra",
        email: "ary@email.com",
        data_nascimento: "1993-01-14",
        telefone: "(62)9326-4125",
        login: "ary001",
        senha: 1234,
      },
      {
        nome: "Jael Marmou Borges",
        email: "jael@email.com",
        data_nascimento: "1963-05-03",
        telefone: "(63)9122-2212",
        login: "jael001",
        senha: 1234,
      },
      {
        nome: "Sandro Varela Teixeira",
        email: "sandro@email.com",
        data_nascimento: "1955-05-12",
        telefone: "(40)9641-2152",
        login: "sandro001",
        senha: 1234,
      },
      {
        nome: "Melyssa Vilarinho Ruela",
        email: "melyssa@email.com",
        data_nascimento: "1952-08-15",
        telefone: "(11)9632-4125",
        login: "melyssa001",
        senha: 1234,
      },
      {
        nome: "Aman Doutel Torrado",
        email: "aman@email.com",
        data_nascimento: "1974-04-19",
        telefone: "(11)9222-4136",
        login: "aman001",
        senha: 1234,
      },
      {
        nome: "Deivid Noronha Matoso",
        email: "deivid@email.com",
        data_nascimento: "1956-07-15",
        telefone: "(99)9222-2522",
        login: "deivid001",
        senha: 1234,
      },
      {
        nome: "Atanas Monte Damasceno",
        email: "atanas@email.com",
        data_nascimento: "1974-06-17",
        telefone: "(74)9632-2142",
        login: "atanas001",
        senha: 1234,
      },
      {
        nome: "Helder Domingues Coelho",
        email: "helder@email.com",
        data_nascimento: "1976-11-02",
        telefone: "(11)9156-5472",
        login: "helder001",
        senha: 1234,
      },
      {
        nome: "Marcelino Palhares Rei",
        email: "marcelino@email.com",
        data_nascimento: "1996-04-03",
        telefone: "(11)9856-1142",
        login: "marcelino001",
        senha: 1234,
      },
      {
        nome: "Stefania Viveiros Boeira",
        email: "stefania@email.com",
        data_nascimento: "1979-08-21",
        telefone: "(11)9554-6262",
        login: "stefania001",
        senha: 1234,
      },
    ]);
  }
}

module.exports = ClienteSeeder;
