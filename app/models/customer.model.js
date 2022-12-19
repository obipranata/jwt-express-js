module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define("customers", {
    // id: {
    //   type: Sequelize.INTEGER,
    //   primaryKey: true
    // },
    email: {
      type: Sequelize.STRING,
    },
    nama_lengkap: {
      type: Sequelize.STRING,
    },
    no_hp: {
      type: Sequelize.STRING
    },
    alamat: {
      type: Sequelize.STRING
    }
  })

  return Customer;
}