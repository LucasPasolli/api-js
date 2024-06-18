import axios from "axios"

const URL = "http://localhost:3001/eventos"

async function obtenerEventos() {
    try {
        const res = await axios.get(URL)
        return res.data
    } catch (error) {
        alert(error.message)
    }
}

async function borrarEvento(evento) {
    try {
        await axios.delete(URL + "/" + evento.id)
    } catch (error) {
        alert(error.message)
    }
}

async function crearEvento(evento) {
    try {
        await axios.post(URL, evento)
    } catch (error) {
        alert(error.message)
    }
}

async function modificarEvento(evento) {
    try {
        await axios.put(URL + "/" + evento.id, evento)
    } catch (error) {
        alert(error.message)
    }
}

export const service = {obtenerEventos,borrarEvento,crearEvento, modificarEvento}