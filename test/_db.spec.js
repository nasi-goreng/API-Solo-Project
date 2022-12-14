const { expect, assert } = require("chai");
const config = require("../knexfile");
const knex = require("knex")(config);

describe("Ghibli DB", () => {

  // before(async () => {
  //   await knex(CUSTOMER_TABLE)
  //     .insert(customerFixture)
  //     .returning("id")
  //     .then((result) => {
  //       console.log("inserted test customer");
  //     })
  //     .catch(console.error);
  // });

  // after(async () => {
  //   await knex(CUSTOMER_TABLE)
  //     .where("id", customerFixture.id)
  //     .returning("id")
  //     .del()
  //     .then((result) => {
  //       console.log("removed test customer");
  //     })
  //     .catch(console.error);
  // });

  describe("setup", () => {
    it("should connect to database", () => {
      knex.raw("select 1 as result").catch(() => {
        assert.fail("unable to connect to database");
      });
    });

    it("has run the initial migration", () => {
      knex('films')
        .select()
        .catch(() => assert.fail("films table is not found."));
    });
  });

  describe("films table", () => {
    it("should return an array of films", async () => {
      const films = await knex.select().from('films');
      expect(films).to.be.an.instanceof(Array);
    });

    it("should return 22 films", async () => {
      const films = await knex.select().from('films');
      expect(films.length).to.eql(22);
    });
  });

  describe("watch table", () => {
    it("should have 22 films for each user", async () => {
      const films = await knex.select().from('watched').where({id: 7});
      expect(films.length).to.eql(22);
    });

  });
});
