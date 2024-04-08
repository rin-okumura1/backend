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
        incidencia: {
            type: DataTypes.STRING,
            allowNull: true,

        },
        diagnostico: {
            type: DataTypes.STRING,
            allowNull: true,


        }
        ,usuario_id: {
            type: DataTypes.INTEGER,
            allowNull: false,


        }


        

    })
}