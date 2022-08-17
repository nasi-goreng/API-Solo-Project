/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("films_directors").del();
  await knex("films_directors").insert([
    { film_id: 1, director_id: 1 },
    { film_id: 2, director_id: 2 },
    { film_id: 3, director_id: 1 },
    { film_id: 4, director_id: 1 },
    { film_id: 5, director_id: 2 },
    { film_id: 6, director_id: 1 },
    { film_id: 7, director_id: 2 },
    { film_id: 8, director_id: 3 },
    { film_id: 9, director_id: 1 },
    { film_id: 10, director_id: 2 },
    { film_id: 11, director_id: 1 },
    { film_id: 12, director_id: 4 },
    { film_id: 13, director_id: 1 },
    { film_id: 14, director_id: 5 },
    { film_id: 15, director_id: 1 },
    { film_id: 16, director_id: 6 },
    { film_id: 17, director_id: 5 },
    { film_id: 18, director_id: 1 },
    { film_id: 19, director_id: 2 },
    { film_id: 20, director_id: 6 },
    { film_id: 21, director_id: 7 },
    { film_id: 22, director_id: 5 },
  ]);
};
