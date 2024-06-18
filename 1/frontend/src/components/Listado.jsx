import React from 'react'
import { Link } from 'react-router-dom'

export default function Listado({Eventos, borrarEvento, irADetalle}) {
    return (
        <>
            <div className=' text-center h3'>Listado</div>
            <div className='container'>
                <div className='container text-end'>
                    <button type='button' onClick={()=>irADetalle("A")} className='btn btn-primary'>Agregar</button>
                </div>
                <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Fecha Inicio</th>
                        <th scope="col">Fecha Fin</th>
                        <th scope="col">Ubicación</th>
                        <th scope="col">Tipo Asistencia</th>
                        <th scope="col">Aciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Eventos.map((evento)=>(
                            <tr>
                                <td>{evento.nombre}</td>
                                <td>{evento.fechaInicio}</td>
                                <td>{evento.fechaFin}</td>
                                <td>{evento.ubicacion}</td>
                                <td>{evento.tipoAsistencia}</td>
                                <td>
                                    <button onClick={()=>irADetalle("C", evento)} type='button' className='btn btn-secondary me-1'>C</button>
                                    <button onClick={()=>irADetalle("M", evento)} type='button' className='btn btn-warning me-1'>M</button>
                                    <button onClick={()=>borrarEvento(evento)} type='button' className='btn btn-danger'>B</button>
                                </td>
                            </tr>
                            
                        ))
                    }
                </tbody>
                </table>
                <Link type="button" to={"/"} className="btn btn-secondary">Volver</Link>
            </div>
        </>
    )
}
