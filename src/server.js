const express = require("express");
const path = require("path");
const knex = require("./knex");
const session = require("express-session");
const sessionController = require("./session.controller");
const watchlistController = require("./watchlist.controller");
const commentController = require("./comment.controller");
const methodOverride = require("method-override");

const setupServer = () => {
  const app = express();

  /*
  This adds JSON parsing middleware for incoming request
  body with a Content-Type header of 'application/json'.
  You don't need to worry about JSON.parse or JSON.stringify
  when this middleware is used.
*/
  app.use(express.json());

  // For parsing form data (application/x-www-form-urlencoded)
  app.use(express.urlencoded({ extended: true }));

  // This configures templates for the frontend of the app.
  app.set("views", `${__dirname}/templates`);
  app.set("view engine", "ejs");

  /*
  This allows us to serve static files (html, css, etc.) from
  the public directory.
*/
  app.use(express.static(path.join(__dirname, "public")));

  app.use(methodOverride("_method"));

  app.use(
    session({
      secret: "secret",
      resave: false,
      saveUninitialized: false,
    })
  );

  // session
  app.get("/sign_up", sessionController.singUpRender);
  app.post("/sign_up", sessionController.singUp);
  app.get("/login", sessionController.loginRender);
  app.post("/login", sessionController.login);

  // main page
  app.get("/", async (req, res) => {
    if (!req.session.username) {
      return res.redirect("/login");
    }
    const user = await knex
      .select("id")
      .from("users")
      .where({ username: req.session.username })
      .first();
    const allFilms = await knex
      .select(
        "films.id as id",
        "title",
        "director",
        "producer",
        "release_date",
        "running_time",
        "rt_score",
        "director_id"
      )
      .from("films")
      .join("films_directors", { "films.id": "films_directors.film_id" });
    return res.render("pages/films/index", {
      user,
      allFilms,
    });
  });

  // watchlist
  app.get("/watchlist/:id", watchlistController.showWatchList);
  app.patch("/watchlist/update", watchlistController.updateWatchList);

  // comments
  app.get("/comments/", commentController.renderComments);
  app.post("/comments/add", commentController.addComment);
  app.delete("/comments/delete", commentController.deleteComment);

  // not in use...
  app.get("/titles/", async (req, res) => {
    const allTitles = await knex.select("title").from("films");
    return res.render("pages/titles/index", {
      allTitles,
    });
  });
  app.get("/directors/", async (req, res) => {
    const directorId = parseInt(req.query.directorId);
    const userId = parseInt(req.query.userId);
    const dirName = await knex
      .select("name")
      .from("directors")
      .where({ id: directorId })
      .first();
    const titlesOfDir = await knex
      .select("title", "films.id as filmId")
      .from("films_directors")
      .join("directors", { "directors.id": "films_directors.director_id" })
      .join("films", { "films.id": "films_directors.film_id" })
      .where({ director_id: directorId });
    return res.render("pages/directors/index", {
      userId,
      dirName,
      titlesOfDir,
    });
  });

  return app;
};

const server = setupServer();
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = { setupServer };
