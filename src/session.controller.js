const knex = require("./knex");

module.exports = {
  singUpRender(req, res) {
    return res.render("pages/session/sign_up");
  },

  async singUp(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    

    const exist = await knex
      .select("username")
      .from("users")
      .where({ username: username })
      .first();

    if (!(username && password && !exist)) {
      return res.redirect("/sign_up");
    }
    
    await knex("users").insert({ username: username, password: password });
    req.session.username = username;

    const userId = await knex
      .select("id")
      .from("users")
      .where({ username: username, password: password })
      .first();
    await knex("watched").insert([
      { user_id: userId.id, film_id: 1, watched: false },
      { user_id: userId.id, film_id: 2, watched: false },
      { user_id: userId.id, film_id: 3, watched: false },
      { user_id: userId.id, film_id: 4, watched: false },
      { user_id: userId.id, film_id: 5, watched: false },
      { user_id: userId.id, film_id: 6, watched: false },
      { user_id: userId.id, film_id: 7, watched: false },
      { user_id: userId.id, film_id: 8, watched: false },
      { user_id: userId.id, film_id: 9, watched: false },
      { user_id: userId.id, film_id: 10, watched: false },
      { user_id: userId.id, film_id: 11, watched: false },
      { user_id: userId.id, film_id: 12, watched: false },
      { user_id: userId.id, film_id: 13, watched: false },
      { user_id: userId.id, film_id: 14, watched: false },
      { user_id: userId.id, film_id: 15, watched: false },
      { user_id: userId.id, film_id: 16, watched: false },
      { user_id: userId.id, film_id: 17, watched: false },
      { user_id: userId.id, film_id: 18, watched: false },
      { user_id: userId.id, film_id: 19, watched: false },
      { user_id: userId.id, film_id: 20, watched: false },
      { user_id: userId.id, film_id: 21, watched: false },
      { user_id: userId.id, film_id: 22, watched: false },
    ]);
    return res.redirect("/");
  },

  loginRender(req, res) {
    return res.render("pages/session/login");
  },

  async login(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const userId = await knex
      .select("id")
      .from("users")
      .where({ username: username, password: password })
      .first();
    if (userId) {
      req.session.username = username;
      return res.redirect("/");
    }
    return res.redirect("/sign_up");
  },
};
