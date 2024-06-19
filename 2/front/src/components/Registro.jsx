import { useState } from "react"
import { useForm } from "react-hook-form"
import { service } from "../services/ingresos.service"
import Consulta from "./Consulta"

export default function Registro() {
    const [Accion, setAccion] = useState("A") // A de Alta - C de consulta

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm()

    function limpiar() {
        setValue("Dni", "", {shouldValidate:true})
        setValue("HoraIngreso", "", {shouldValidate:true})
        setValue("Proveedor", "", {shouldValidate:true})
        setValue("ConNotebook", false, {shouldValidate:true})
    }

    function volver() {
        limpiar()
        setAccion("A")
    }
    
    const onSubmit = (data) => {
        service.crearIngreso(data)
        setAccion("C")
    }
    
    return(
        <>
        <div className="container">
            { Accion === "A" && (
                <>
                    <h2 className="text-center">Seguridad: Registro de ingresos</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label for="Dni" className="form-label">DNI Ingreso: </label>
                        <input
                            type="number"
                            className={"form-control " + (errors?.Dni ? "is-invalid":"")}
                            id="Dni"
                            {...register("Dni",{
                                required: {value:true, message:"DNI es requerido"}
                            })}
                        />
                        <div className="invalid-feedback">
                            {errors?.Dni?.message}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="HoraIngreso" className="form-label">Hora ingreso [hh:mm] </label>
                        <input
                            type="time"
                            className={"form-control " + (errors?.HoraIngreso ? "is-invalid":"")}
                            id="HoraIngreso"
                            {...register("HoraIngreso",{
                                required: {value:true, message:"Hora Ingreso es requerido"}
                            })}
                        />
                        <div className="invalid-feedback">
                            {errors?.HoraIngreso?.message}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="Proveedor" className="form-label">Proveedor (Empresa externa): </label>
                        <select
                            className={"form-control " + (errors?.Proveedor ? "is-invalid":"")}
                            id="Proveedor"
                            {...register("Proveedor",{
                                required: {value:true, message:"Proveedor es requerido"}
                            })}
                        >
                            <option value={""}></option>
                            <option value={"Empresa 1"}>Empresa 1</option>
                            <option value={"Empresa 2"}>Empresa 2</option>
                            <option value={"Empresa 3"}>Empresa 3</option>
                        </select>
                        <div className="invalid-feedback">
                            {errors?.Proveedor?.message}
                        </div>
                    </div>
                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            className={"form-check-input " + (errors?.ConNotebook ? "is-invalid":"")}
                            id="ConNotebook"
                            {...register("ConNotebook")}
                        />
                        <label for="ConNotebook" className="form-label">Ingresa con Notebook</label>
                        <div className="invalid-feedback">
                            {errors?.ConNotebook?.message}
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary me-2">Registrar</button>
                    <button type="button" onClick={()=>limpiar()} className="btn btn-secondary">Limpiar</button>
                    </form>
                </>
            ) }

            { Accion === "C" && (<Consulta {...{volver}}/>) }
        </div>
        </>
    )
}