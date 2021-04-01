'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ModelosSchema extends Schema {
  up () {
    this.create('modelos', (table) => {
      table.increments()
      table.string('nome', 45).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('modelos')
  }
}

module.exports = ModelosSchema
