import axios from "axios"

const URL = "http://localhost:3001/ingresos"

async function crearIngreso(ingreso) {
    try {
        await axios.post(URL, ingreso)
    } catch (error) {
        alert(error.message)
    }
}

async function obtenerIngresos() {
    try {
        const res = await axios.get(URL)
        return res.data
    } catch (error) {
        alert(error.message)
    }
}

export const service = {crearIngreso, obtenerIngresos}