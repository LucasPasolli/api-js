import React from 'react'
import { useForm } from "react-hook-form"


export default function Detalle({volver, Accion, EventoSeleccionado, crearEvento, modificarEvento}) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm({ defaultValues: EventoSeleccionado })

    const onSubmit = (data) => {
        if (Accion === "A") {
            crearEvento(data)
        }
        if (Accion === "M") {
            modificarEvento(data)
        }
        volver()
    }

    return (
        <>
        <div className='h3 text-center'>Detalle</div>
        <div className='container p-4'>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Campo Nombre */}
                <div className="mb-1">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input
                        type="text"
                        className={"form-control" + (errors.nombre ? " is-invalid" : "")}
                        id="nombre"
                        {...register("nombre",{
                            required: {value: true, message: "Nombre es requerido"}
                        })}
                        disabled={Accion === "C" ? true : false}
                    />
                    <div className='invalid-feedback'>
                        {errors?.nombre?.message}
                    </div>
                </div>

                {/* Campo Ubicacion */}
                <div className="mb-1">
                    <label for="ubicacion" class="form-label">Ubicacion</label>
                    <input
                        type="text"
                        className={"form-control" + (errors.ubicacion ? " is-invalid" : "")}
                        id="ubicacion"
                        {...register("ubicacion",{
                            required: {value: true, message: "Ubicacion es requerido"}
                        })}
                        disabled={Accion === "C" ? true : false}
                    />
                    <div className='invalid-feedback'>
                        {errors?.ubicacion?.message}
                    </div>
                </div>

                {/* Campo Fecha Inicio */}
                <div className="mb-1">
                    <label for="fechaInicio" class="form-label">Fecha Inicio</label>
                    <input
                        type="date"
                        className={"form-control" + (errors.fechaInicio ? " is-invalid" : "")}
                        id="fechaInicio"
                        {...register("fechaInicio",{
                            required: {value: true, message: "Fecha Inicio es requerido"}
                        })}
                        disabled={Accion === "C" ? true : false}
                    />
                    <div className='invalid-feedback'>
                        {errors?.fechaInicio?.message}
                    </div>
                </div>

                {/* Campo Fecha Fin */}
                <div className="mb-1">
                    <label for="fechaFin" class="form-label">Fecha Fin</label>
                    <input
                        type="date"
                        className={"form-control" + (errors.fechaFin ? " is-invalid" : "")}
                        id="fechaFin"
                        {...register("fechaFin",{
                            required: {value: true, message: "Fecha Fin es requerido"}
                        })}
                        disabled={Accion === "C" ? true : false}
                    />
                    <div className='invalid-feedback'>
                        {errors?.fechaFin?.message}
                    </div>
                </div>

                {/* Campo Descripcion */}
                <div className="mb-1">
                    <label for="descripcion" class="form-label">Descripcion</label>
                    <input
                        type="text"
                        className={"form-control" + (errors.descripcion ? " is-invalid" : "")}
                        id="descripcion"
                        {...register("descripcion",{
                            required: {value: true, message: "Descripcion es requerida"}
                        })}
                        disabled={Accion === "C" ? true : false}
                    />
                    <div className='invalid-feedback'>
                        {errors?.descripcion?.message}
                    </div>
                </div>

                {/* Campo Enlace */}
                <div className="mb-1">
                    <label for="enlace" class="form-label">Enlace</label>
                    <input
                        type="text"
                        className={"form-control" + (errors.enlace ? " is-invalid" : "")}
                        id="enlace"
                        {...register("enlace",{
                            required: {value: true, message: "Enlace es requerida"}
                        })}
                        disabled={Accion === "C" ? true : false}
                    />
                    <div className='invalid-feedback'>
                        {errors?.enlace?.message}
                    </div>
                </div>

                {/* Campo Tipo Asistencia */}
                <div className="mb-3">
                    <label for="tipoAsistencia" class="form-label">Tipo Asistencia</label>
                    <select
                        className={"form-control" + (errors.tipoAsistencia ? " is-invalid" : "")}
                        id="tipoAsistencia"
                        {...register("tipoAsistencia",{
                            required: {value: true, message: "Tipo Asistencia es requerida"}
                        })}
                        disabled={Accion === "C" ? true : false}
                    >
                        <option value={"Presencial"}>Presencial</option>
                        <option value={"Virtual"}>Virtual</option>
                        <option value={"M.O.A.B."}>M.O.A.B.</option>
                    </select>
                    <div className='invalid-feedback'>
                        {errors?.tipoAsistencia?.message}
                    </div>
                </div>
                {
                    Accion !== "C" && (<button type="submit" className="btn btn-primary me-2">Grabar</button>)
                }
                <button type='button' onClick={()=>volver()} className='btn btn-secondary'>Volver</button>
            </form>
        </div>
        </>
    )
}
