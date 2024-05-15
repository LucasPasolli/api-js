import express from "express";
import services from "./services/reservassvc.js";
import cors from "cors";
import {Reserva} from "./models/reservas.js"
import {sequelize} from "./data/db.js"

const app = express()
app.use(express.json())
app.use(cors())

app.get("/reservas", async(req, res) => {
    if(req.query.Jugador){
        res.json(await services.getAllByJugador(req.query.Jugador))
    } else {
        res.json(await services.getAll())
    }
})

async function DBInit(){
    await sequelize.sync({force:true});
    await Reserva.bulkCreate([
        {fechaReserva: '2024-05-07 13:00', jugador: 'Carlos Calvo 1', numeroCancha: 1},
        {fechaReserva: '2024-04-06 18:00', jugador: 'Carlos Calvo 2', numeroCancha: 2},
        {fechaReserva: '2024-09-17 17:00', jugador: 'Carlos Calvo 3', numeroCancha: 3},
        {fechaReserva: '2024-02-07 16:00', jugador: 'Carlos Calvo 5', numeroCancha: 4},
        {fechaReserva: '2024-03-23 13:00', jugador: 'Carlos Calvo 8', numeroCancha: 6},
        {fechaReserva: '2024-05-37 10:00', jugador: 'Carlos Calvo 99', numeroCancha: 8},
    ])
}


DBInit().then(() => {
    app.listen(3001, async() => console.log("Cuchando!"))
});