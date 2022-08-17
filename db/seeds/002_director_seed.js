/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("films_directors").del();
  await knex("directors").del();
  await knex("directors").insert([
    { name: "Hayao Miyazaki" },
    { name: "Isao Takahata" },
    { name: "Yoshifumi Kondō" },
    { name: "Hiroyuki Morita" },
    { name: "Gorō Miyazaki" },
    { name: "Hiromasa Yonebayashi" },
    { name: "Michaël Dudok de Wit" },
  ]);
};
