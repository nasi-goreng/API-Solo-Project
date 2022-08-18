const knex = require("./knex");

module.exports = {
  async showWatchList(req, res) {
    const id = parseInt(req.params.id);
    const watchedFilms = await knex
      .select("id", "title", "watched")
      .from("watched")
      .join("films", { "films.id": "watched.film_id" })
      .where({ user_id: id });
    return res.render("pages/watchlist/index", {
      id,
      watchedFilms,
    });
  },

  async updateWatchList(req, res) {
    const filmId = +req.body.filmId;
    const userId = +req.body.userId;
    await knex("watched")
      .where({ film_id: filmId, user_id: userId })
      .update({ watched: true });
    return res.redirect(`/watchlist/${userId}`);
  },
};
