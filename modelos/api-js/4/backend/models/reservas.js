import {DataTypes} from "sequelize"
import {sequelize} from "../data/db.js"

export const Reserva = sequelize.define('Reserva', {
    idReserva: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false,
    },
    fechaReserva: {
        type: DataTypes.DATE,
        allowNull:false, //valor requerido
    },

    jugador:{
        type: DataTypes.TEXT,
        allowNull:false,
    },

    numeroCancha:{
        type: DataTypes.INTEGER,
        allowNull: false,
}
})

