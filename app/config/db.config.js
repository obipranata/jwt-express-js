module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "enter",
  DB: "tes",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}