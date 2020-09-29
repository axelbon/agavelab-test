module.exports = (sequelize, type) => {
    return sequelize.define('product', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        code: type.STRING,
        name: type.STRING,
        price: type.FLOAT
    });
};