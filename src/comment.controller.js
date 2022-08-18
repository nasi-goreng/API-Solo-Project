const knex = require("./knex");
const methodOverride = require("method-override");

module.exports = {
  async renderComments(req, res) {
    const filmId = parseInt(req.query.filmId);
    const userId = parseInt(req.query.userId);
    const title = await knex
      .select("title")
      .from("films")
      .where({ id: filmId })
      .first();
    const comments = await knex
      .select(
        "films.id as filmId",
        "comments.id as commentId",
        "username",
        "comment",
        "title"
      )
      .from("comments")
      .join("films", { "films.id": "comments.film_id" })
      .join("users", { "users.id": "comments.user_id" })
      .where({ film_id: filmId })
      .orderBy("commentId");
    return res.render("pages/comments/index", {
      title,
      filmId,
      userId,
      comments,
    });
  },

  async addComment(req, res) {
    const filmId = +req.body.filmId;
    const userId = +req.body.userId;
    const comment = req.body.comment;
    await knex("comments").insert({
      user_id: userId,
      film_id: filmId,
      comment: comment,
    });
    return res.redirect("back");
    // "/comments?filmId=filmId&userId=userId"
  },

  async deleteComment(req, res) {
    const commentId = +req.body.commentId;
    await knex("comments").where({ id: commentId }).del();
    return res.redirect("back");
  },
};
