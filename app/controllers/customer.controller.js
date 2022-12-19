const db = require("../models");
const Customer = db.customer;

exports.add = (req, res) => {
  Customer.create({
    email: req.body.email,
    nama_lengkap: req.body.nama_lengkap,
    no_hp: req.body.no_hp,
    alamat: req.body.alamat,
  })
    .then((customer) => {
      res.status(200).send({
        message: "Data berhasil ditambahkan",
        data: customer
      });
    }).catch(err => {
      res.status(500).send({ message: err.message });
    });
}

exports.all = (req, res) => {
  Customer.findAll()
    .then((customer) => {
      res.status(200).send({
        message: "Data berhasil di dapatkan",
        data: customer
      })
    }).catch(err => {
      res.status(500).send({ message: err.message });
    });
}
exports.byId = (req, res) => {
  Customer.findOne({
    where: {
      id: req.params.id
    }
  })
    .then((customer) => {
      res.status(200).send({
        message: "Data berhasil di dapatkan",
        data: customer
      })
    }).catch(err => {
      res.status(500).send({ message: err.message });
    });
}

exports.update = (req, res) => {
  Customer.findOne({
    where: {
      email: req.body.email
    }
  }).then((customer) => {
    if (!customer) {
      return res.status(404).send({ message: "Customer tidak ditemukan." });
    }
    const { nama_lengkap, no_hp, alamat } = req.body;
    customer.update({
      nama_lengkap, no_hp, alamat,
    })
      .then(
        (customer) => {
          res.status(200).send({
            message: "Customer behasil di update!",
            data: customer
          })
        }
      )
  })
}