const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.customer = require("../models/customer.model.js")(sequelize, Sequelize);
db.product = require("../models/product.model.js")(sequelize, Sequelize);
db.order = require("../models/order.model.js")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

// 1. Table orders (relasi ke table customer) (id, customer id, product id, tanggal order, status = paid, unpaid, )
// 2. Table products (id, nama product, uom (satuan barang eg: pcs, box, dus), stock, harga)

// Note : relasi order -> product dibuat one to many
// Buat CRUD dari masing2 table
// Insert query pakai transaction jika query insert lebih dari 1 data atau table

db.customer.hasMany(db.order, {
  foreignKey: "customerId",
});
db.order.belongsTo(db.customer, { foreignKey: 'customerId' })

db.product.hasMany(db.order, {
  foreignKey: "productId",
});
db.order.belongsTo(db.product, { foreignKey: 'productId' })

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;