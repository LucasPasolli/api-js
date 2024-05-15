import {Reserva} from "../models/reservas.js"
import {Op} from "sequelize"

async function getAll(){
    return await Reserva.findAll({
        order: [
            ['fechaReserva', 'ASC'],
            ['numeroCancha', 'ASC']
        ],
    })
}

async function getAllByJugador(nombreJugador){
    return await Reserva.findAll({
        where: {
            jugador: {
                [Op.startsWith]: nombreJugador
            }
        },
        order: [
            ['fechaReserva', 'ASC'],
            ['jugador', 'ASC']
        ],
    })
}

export default {getAll, getAllByJugador}