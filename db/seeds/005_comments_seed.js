/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('comments').del()
  await knex('comments').insert([
    {user_id: 2, comment: 'great movie', film_id: 1},
    {user_id: 2, comment: 'great movie', film_id: 2},
    {user_id: 2, comment: 'great movie', film_id: 3},
    {user_id: 2, comment: 'great movie', film_id: 4},
    {user_id: 2, comment: 'great movie', film_id: 5},
    {user_id: 2, comment: 'great movie', film_id: 6},
    {user_id: 2, comment: 'great movie', film_id: 7},
    {user_id: 2, comment: 'great movie', film_id: 8},
    {user_id: 2, comment: 'great movie', film_id: 9},
    {user_id: 2, comment: 'great movie', film_id: 10},
    {user_id: 2, comment: 'great movie', film_id: 11},
    {user_id: 2, comment: 'great movie', film_id: 12},
    {user_id: 2, comment: 'great movie', film_id: 13},
    {user_id: 2, comment: 'great movie', film_id: 14},
    {user_id: 2, comment: 'great movie', film_id: 15},
    {user_id: 2, comment: 'great movie', film_id: 16},
    {user_id: 2, comment: 'great movie', film_id: 17},
    {user_id: 2, comment: 'great movie', film_id: 18},
    {user_id: 2, comment: 'great movie', film_id: 19},
    {user_id: 2, comment: 'great movie', film_id: 20},
    {user_id: 2, comment: 'great movie', film_id: 21},
    {user_id: 2, comment: 'great movie', film_id: 22},
  ]);
};
