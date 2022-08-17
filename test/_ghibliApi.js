// const chai = require("chai");
// const chaiHttp = require("chai-http");
// chai.use(chaiHttp);
// const { setupServer } = require("../src/server");


// const server = setupServer();
// describe("Ghibli API Server", () => {
//   let request;
//   beforeEach(() => {
//     request = chai.request(server);
//   });
//   describe("/", () => {
//     it("should respond with status 200 ok", (done) => {
//       request.get("/").end((err, res) => {
//         chai.expect(err).to.be.null;
//         chai.expect(res).to.have.status(200);
//         done();
//       });
//     });
//   });
// });

const { expect, assert } = require("chai");
const config = require("../knexfile");
const knex = require("knex")(config);

describe("Ghibli API", () => {

  before(async () => {
    await knex(CUSTOMER_TABLE)
      .insert(customerFixture)
      .returning("id")
      .then((result) => {
        console.log("inserted test customer");
      })
      .catch(console.error);
  });

  after(async () => {
    await knex(CUSTOMER_TABLE)
      .where("id", customerFixture.id)
      .returning("id")
      .del()
      .then((result) => {
        console.log("removed test customer");
      })
      .catch(console.error);
  });

  describe("setup", () => {
    it("should connect to database", () => {
      knex.raw("select 1 as result").catch(() => {
        assert.fail("unable to connect to database");
      });
    });

    it("has run the initial migration", () => {
      knex(CUSTOMER_TABLE)
        .select()
        .catch(() => assert.fail("customer table is not found."));
    });
  });

  describe("getAll", () => {
    it("should return an array of customers", async () => {
      const customers = await customerModel.getAll();
      expect(customers).to.be.an.instanceof(Array);
    });

    it("should accept a limit argument", async () => {
      const customers = await customerModel.getAll(3);
      expect(customers.length).to.be.at.most(3);
    });
  });
});
