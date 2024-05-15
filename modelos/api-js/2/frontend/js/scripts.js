async function getEventos() {
    const eventos = await fetch("http://localhost:3000/eventos")
    return await eventos.json()
}

async function cargarTabla(eventos) {
    tabla = document.getElementById("grilla-eventos")
    tabla.innerHTML = ""
    eventos.forEach(evento => {
        const row = `
        <tr>
            <td scope="row">${evento.nombre}</td>
            <td scope="row">${evento.descripcion}</td>
            <td scope="row">${evento.ubicacion}</td>
            <td scope="row">${evento.fechaInicio}</td>
            <td scope="row">${evento.fechaFin}</td>
            <td scope="row">${evento.tipoAsistencia}</td>
            <td scope="row"><a href="${evento.enlace}">${evento.enlace}</a></td>
        </tr>
        `
        tabla.innerHTML += row
    });
}

const cargarEventos = async () => {
    //Aqui nos conectaremos con el backend
    document.addEventListener("DOMContentLoaded", async () => {
        const eventos = await getEventos()
        await cargarTabla(eventos)
    })
};
cargarEventos();
