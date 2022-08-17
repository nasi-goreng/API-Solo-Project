/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function (knex) {
  return knex.schema.alterTable("directors", (table) => {
    table.dropColumn("id");
    // table.increments("id").primary();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.alterTable("directors", (table) => {
    // table.dropColumn("id");
    table.increments("id").primary();
  });
};
