'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientesSchema extends Schema {
  up () {
    this.create('clientes', (table) => {
      table.increments()
      table.string('nome', 100).notNullable()
      table.string('email', 100)
      table.date('data_nascimento').notNullable()
      table.string('telefone', 15).notNullable()
      table.string('login', 25).notNullable()
      table.integer('senha')
      table.timestamps()
    })
  }

  down () {
    this.drop('clientes')
  }
}

module.exports = ClientesSchema
