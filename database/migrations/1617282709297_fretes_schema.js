'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FretesSchema extends Schema {
  up () {
    this.create('fretes', (table) => {
      table.increments()
      table.decimal('valor').notNullable()
      table.integer('quantidade_passageiro').notNullable()
      table.date('data_frete').notNullable()
      table.time('hora_partida').notNullable()
      table.time('hora_chegada').notNullable()
      table.integer('cliente_id').references('id').inTable('clientes').unsigned().notNullable()
      table.integer('aeronave_id').references('id').inTable('aeronaves').unsigned().notNullable()
      table.integer('aeroporto_partida_id').references('id').inTable('aeroportos').unsigned().notNullable()
      table.integer('aeroporto_destino_id').references('id').inTable('aeroportos').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('fretes')
  }
}

module.exports = FretesSchema
