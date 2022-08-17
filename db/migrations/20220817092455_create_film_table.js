/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  return knex.schema
    .createTable("film", (table) => {
      table.increments('id').primary();
      table.string("title");
      table.string("description");
      table.string("director");
      table.string("producer");
      table.string("release_date");
      table.string("running_time");
      table.string("rt_score");
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('film');
};
