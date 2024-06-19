import { useEffect } from "react"
import { useState } from "react"
import { service } from "../services/ingresos.service"

export default function Consulta({ volver }) {
    const [Ingresos, setIngresos] = useState([])

    async function obtenerIngresos() {
        const ingresos = await service.obtenerIngresos()
        setIngresos(ingresos)
    }

    useEffect(()=>{
        obtenerIngresos()
    },[])

    return(
        <>
            <div className="h2 text-center">Listado de ingresos</div>
            <table className="table table-striped table-hover table-responsive">
                <thead>
                    <tr>
                        <th scope="col">DNI</th>
                        <th scope="col">Hora ingreso</th>
                        <th scope="col">Proveedor</th>
                        <th scope="col">Ingresa con Notebook</th>
                    </tr>
                </thead>
                <tbody>
                    {Ingresos?.map((ingreso)=>(
                        <tr>
                            <td>{ingreso.Dni}</td>
                            <td>{ingreso.HoraIngreso}</td>
                            <td>{ingreso.Proveedor}</td>
                            <td>{ingreso.ConNotebook ? "Si":"No"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button type="button" className="btn btn-secondary" onClick={()=>volver()}>Volver</button>
        </>
    )
}