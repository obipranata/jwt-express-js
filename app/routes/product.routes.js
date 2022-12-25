const { authJwt } = require("../middleware");
const controller = require("../controllers/product.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/product/add",
    [authJwt.verifyToken],
    controller.add
  );

  app.post(
    "/api/produk/update/:id",
    [authJwt.verifyToken],
    controller.update
  );

  app.get(
    "/api/product/all",
    [authJwt.verifyToken],
    controller.all
  );

  app.get(
    "/api/product/:id",
    [authJwt.verifyToken],
    controller.byId
  );

  app.post(
    "/api/product/:id/delete",
    [authJwt.verifyToken],
    controller.delete
  );
}