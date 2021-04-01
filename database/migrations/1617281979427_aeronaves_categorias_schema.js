'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AeronavesCategoriasSchema extends Schema {
  up () {
    this.create('aeronaves_categorias', (table) => {
      table.increments()// na imagem esse campo não existe, verificar se é pra excluir
      table.integer('aeronave_id').references('id').inTable('aeronaves').unsigned().notNullable()
      table.integer('categoria_id').references('id').inTable('categorias').unsigned().notNullable()
      table.timestamps()
    })
  }
  //OBS: Tabela associativa
  down () {
    this.drop('aeronaves_categorias')
  }
}

module.exports = AeronavesCategoriasSchema
