const express = require("express");
const path = require("path");
const knex = require("./knex");

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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.get("/films", async (req, res) => {
  const allFilms = await knex.select().from("films");
  res.render("pages/films/index", {
    allFilms,
  });
});

app.get("/watchlist", async (req, res) => {
  const watchedFilms = await knex
    .select("id", "title", "watched")
    .from("watched")
    .join("films", { "films.id": "watched.film_id" });
  console.log(watchedFilms);
  res.render("pages/watchlist/index", {
    watchedFilms,
  });
});

app.post("/watchlist/update", async (req, res) => {
  const id = +req.body.id;
  await knex("watched").where({ film_id: id }).update({ watched: true });
  res.redirect("/watchlist");
});

app.get("/titles/:id", async (req, res) => {
  const allTitles = await knex.select("title").from("films");
  res.render("pages/titles/index", {
    allTitles,
  });
});

app.get("/directors/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const dirName = await knex.select("name").from("directors").where({ id: id });
  const titlesOfDir = await knex
    .select("title")
    .from("films_directors")
    .join("directors", { "directors.id": "films_directors.director_id" })
    .join("films", { "films.id": "films_directors.film_id" })
    .where({ director_id: id });
  res.render("pages/directors/index", {
    dirName,
    titlesOfDir,
  });
});
