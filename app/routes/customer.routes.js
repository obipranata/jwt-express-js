const { authJwt } = require("../middleware");
const controller = require("../controllers/customer.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/customer/add",
    [authJwt.verifyToken],
    controller.add
  );

  app.post(
    "/api/customer/update/:id",
    [authJwt.verifyToken],
    controller.update
  );

  app.get(
    "/api/customer/all",
    [authJwt.verifyToken],
    controller.all
  );

  app.get(
    "/api/customer/:id",
    [authJwt.verifyToken],
    controller.byId
  );
}