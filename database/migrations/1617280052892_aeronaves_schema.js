'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AeronavesSchema extends Schema {
  up () {
    this.create('aeronaves', (table) => {
      table.increments()
      table.string('nome', 45).notNullable()
      table.integer('capacidade').notNullable()
      table.decimal('autonomia', 15, 2).notNullable()//verificar se é assim mesmo
      table.decimal('horas_voo', 15, 2).notNullable()//verificar também
      table.decimal('valor', 15, 15)
      table.date('fabricacao').notNullable()
      table.date('ultima_revisao').notNullable()
      table.integer('modelo_id').references('id').inTable('modelos').unsigned().notNullable()
      table.integer('marca_id').references('id').inTable('marcas').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('aeronaves')
  }
}

module.exports = AeronavesSchema
