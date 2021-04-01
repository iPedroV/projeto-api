'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FretesSchema extends Schema {
  up () {
    this.create('fretes', (table) => {
      table.increments()
      table.decimal('valor').notNullable()
      table.integer('')
      table.timestamps()
    })
  }

  down () {
    this.drop('fretes')
  }
}

module.exports = FretesSchema
