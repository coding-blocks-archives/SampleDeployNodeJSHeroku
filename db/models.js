const Sequelize = require('sequelize');
const config = require('../config')
const DataTypes = Sequelize.DataTypes;

const db = new Sequelize(config.DATABASE_URI);

const Item = db.define('item', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    stuff: {
        type: DataTypes.TEXT
    }
});

db.sync()
    .then(() => console.log("DB Synced"))
    .catch(err => console.error(err));

exports = module.exports = {
    Item
};