"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AeroportosSchema extends Schema {
  up() {
    this.create("aeroportos", (table) => {
      table.increments();
      table.string("nome", 200).notNullable();
      table
        .integer("estado_id")
        .references("id")
        .inTable("estados")
        .unsigned()
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("aeroportos");
  }
}

module.exports = AeroportosSchema;
