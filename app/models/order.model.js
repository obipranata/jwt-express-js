module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define("orders", {
    customerId: {
      type: Sequelize.INTEGER,
    },
    productId: {
      type: Sequelize.INTEGER,
    },
    tanggal_order: {
      type: Sequelize.DATE,
    },
    status: {
      type: Sequelize.STRING
    }
  })

  return Order;
}