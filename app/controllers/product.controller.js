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

exports.update = (req, res) => {
  Product.findOne({
    where: {
      id: req.params.id
    }
  }).then((product) => {
    if (!product) {
      return res.status(404).send({ message: "product tidak ditemukan." });
    }

    const { nama_product, uom, stock, harga } = req.body;
    product.update({
      nama_product, uom, stock, harga
    })
      .then(
        (product) => {
          res.status(200).send({
            message: "product behasil di update!",
            data: product
          })
        }
      )
  })
}

exports.all = (req, res) => {
  Product.findAll()
    .then((product) => {
      res.status(200).send({
        message: "Data berhasil di dapatkan",
        data: product
      })
    }).catch(err => {
      res.status(500).send({ message: err.message });
    });
}
exports.byId = (req, res) => {
  Product.findOne({
    where: {
      id: req.params.id
    }
  })
    .then((product) => {
      if (!product) {
        res.status(404).send({
          message: "product tidak ditemukan",
          data: product
        });
      }
      res.status(200).send({
        message: "Data berhasil di dapatkan",
        data: product
      });
    }).catch(err => {
      res.status(500).send({ message: err.message });
    });
}

exports.delete = (req, res) => {
  Product.destroy({
    where: {
      id: req.params.id
    }
  }
  )
    .then((product) => {
      res.status(200).send({
        message: "Data berhasil di dihapus",
        data: product
      })
    }).catch(err => {
      res.status(500).send({ message: err.message });
    });
}