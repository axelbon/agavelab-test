const { Sequelize } = require('sequelize');

const ProductModel = require('./models/product');
const UserModel = require('./models/user');

const sequelize = new Sequelize('postgres://postgres:AxelBon18@localhost:5432/agavelabtest');

const Product = ProductModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);

sequelize.sync({ force: false }).then(() => console.log('tablas sincronizadas'));

module.exports = {
    Product,
    User
}