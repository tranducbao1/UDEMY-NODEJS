const Sequelize = require(`sequelize`);
const sequelize = new Sequelize(`node_complete`, `root`, `congnghethongtin`, {
  dialect: "mysql",
  host: "localhost",
});
module.exports = sequelize;
//mongodb
