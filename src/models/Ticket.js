const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define('Ticket', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        estado: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        prioridad: {
            type: DataTypes.STRING,
            allowNull: false,
           

        },
        notaC: {
            type: DataTypes.STRING,
            allowNull: true,

        },
        notaO: {
            type: DataTypes.STRING,
            allowNull: true,


        }

    })
}