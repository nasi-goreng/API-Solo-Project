/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("film_director", (table) => {
    table.integer("film_id").references("id").inTable("film").notNullable();
    table
      .integer("director_id")
      .references("id")
      .inTable("director")
      .notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("film_director");
};
