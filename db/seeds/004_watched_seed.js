/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("watched").del();
  await knex("watched").insert([
    { film_id: 1, watched: false },
    { film_id: 2, watched: false },
    { film_id: 3, watched: false },
    { film_id: 4, watched: false },
    { film_id: 5, watched: false },
    { film_id: 6, watched: false },
    { film_id: 7, watched: false },
    { film_id: 8, watched: false },
    { film_id: 9, watched: false },
    { film_id: 10, watched: false },
    { film_id: 11, watched: false },
    { film_id: 12, watched: false },
    { film_id: 13, watched: false },
    { film_id: 14, watched: false },
    { film_id: 15, watched: false },
    { film_id: 16, watched: false },
    { film_id: 17, watched: false },
    { film_id: 18, watched: false },
    { film_id: 19, watched: false },
    { film_id: 20, watched: false },
    { film_id: 21, watched: false },
    { film_id: 22, watched: false },
  ]);
};
