/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function (knex) {
  return knex.schema.createTable("films_directors", (table) => {
    table.integer("film_id").references("id").inTable("films").notNullable();
    table
      .integer("director_id")
      .references("id")
      .inTable("directors")
      .notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("films_directors");
};
