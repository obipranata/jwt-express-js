const db = require("../models");
const Product = db.product;

exports.add = (req, res) => {
  Product.create({
    nama_product: req.body.nama_product,
    uom: req.body.uom,
    stock: req.body.stock,
    harga: req.body.harga
  })
    .then((product) => {
      res.status(200).send({
        message: "Data berhasil ditambahkan",
        data: product
      });
    }).catch(err => {
      res.status(500).send({ message: err.message });
    });

  return Product;
}