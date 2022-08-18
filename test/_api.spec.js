const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const { setupServer } = require("../src/server");

/*
 * This sprint you will have to create all tests yourself, TDD style.
 * For this you will want to get familiar with chai-http https://www.chaijs.com/plugins/chai-http/
 * The same kind of structure that you encountered in lecture.express will be provided here.
 */
const server = setupServer();
describe("Ghibli API Server", () => {
  let request;
  beforeEach(() => {
    request = chai.request(server);
  });

  describe("/", () => {
    it("should respond with status 200 ok", (done) => {
      request.get("/").end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res).to.have.status(200);
        done();
      });
    });
    it("should return an object", (done) => {
      request.get("/").end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(typeof res).to.eq('object');
        done();
      });
    });
  });

  describe("/sign_up", () => {
    it("should respond with status 200 ok", (done) => {
      request.get("/sign_up").end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res).to.have.status(200);
        done();
      });
    });
    it("should return an object", (done) => {
      request.get("/sign_up").end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(typeof res).to.eq('object');
        done();
      });
    });
  });

  describe("/login", () => {
    it("should respond with status 200 ok", (done) => {
      request.get("/login").end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res).to.have.status(200);
        done();
      });
    });
    it("should return an object", (done) => {
      request.get("/login").end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(typeof res).to.eq('object');
        done();
      });
    });
  });

  describe("/watchlist/3", () => {
    it("should respond with status 200 ok", (done) => {
      request.get("/watchlist/3").end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res).to.have.status(200);
        done();
      });
    });
    it("should return an object", (done) => {
      request.get("/watchlist/3").end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(typeof res).to.eq('object');
        done();
      });
    });
  });

  describe("/comments?filmId=1&userId=3", () => {
    it("should respond with status 200 ok", (done) => {
      request.get("/watchlist/3").end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res).to.have.status(200);
        done();
      });
    });
    it("should return an object", (done) => {
      request.get("/watchlist/3").end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(typeof res).to.eq('object');
        done();
      });
    });
  });

  describe("/titles", () => {
    it("should respond with status 200 ok", (done) => {
      request.get("/titles").end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res).to.have.status(200);
        done();
      });
    });
    it("should return an object", (done) => {
      request.get("/titles").end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(typeof res).to.eq('object');
        done();
      });
    });
  });

  describe("/directors/1", () => {
    it("should respond with status 200 ok", (done) => {
      request.get("/directors/1").end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res).to.have.status(200);
        done();
      });
    });
    it("should return an object", (done) => {
      request.get("/directors/1").end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(typeof res).to.eq('object');
        done();
      });
    });
  });
});
