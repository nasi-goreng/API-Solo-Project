/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable("comments", (table) => {
    table.increments("id").primary();
    table.integer("film_id").references("id").inTable("films");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.alterTable("comments", (table) => {
    table.dropColumn("id");
    table.dropColumn("film_id");
  });
};
