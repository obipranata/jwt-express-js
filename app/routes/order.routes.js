const { authJwt } = require("../middleware");
const controller = require("../controllers/order.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/order/add",
    [authJwt.verifyToken],
    controller.add
  );

  app.get(
    "/api/order",
    [authJwt.verifyToken],
    controller.all
  );
}