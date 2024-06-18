import { useEffect, useState } from "react"
import { service } from "../service/Eventos.svc"
import Listado from "./Listado"
import Detalle from "./Detalle"

export default function Eventos() {
    const [Accion, setAccion] = useState("L") // L de Listado , A de alta, C de consultar
    const [Eventos, setEventos] = useState([])
    const [EventoSeleccionado, setEventoSeleccionado] = useState({})

    const eventoVacio = {
        nombre: null,
        ubicacion: null,
        fechaInicio: null,
        fechaFin: null,
        descripcion: null,
        enlace: null,
        tipoAsistencia: null
    }

    async function obtenerEventos() {
        const eventos = await service.obtenerEventos()
        setEventos(eventos)
    }

    async function borrarEvento(evento) {
        if (window.confirm("Desea Borrar este registro?")){
            await service.borrarEvento(evento)
            obtenerEventos()
        }
    }

    async function crearEvento(evento) {
        await service.crearEvento(evento)
        obtenerEventos()
    }

    function irADetalle(accion, evento = eventoVacio) {
        setAccion(accion)
        setEventoSeleccionado(evento)
    }

    async function modificarEvento(evento) {
        await service.modificarEvento(evento)
        obtenerEventos()
    }

    function volver() {
        setAccion("L")
    }

    useEffect(()=>{
        obtenerEventos()
    },[])

    return (
        <>
            <div className="h1 text-center">Eventos</div>

            { Accion === "L" && (<Listado {...{Eventos, borrarEvento, irADetalle}}/>)}
            { Accion !== "L" && (<Detalle {...{volver, Accion, EventoSeleccionado, crearEvento, modificarEvento}}/>)}

        </>
    )
}
