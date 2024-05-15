// Funcion que busca en el backend los tramites
async function getTramites() {
    const response = await fetch("http://localhost:4000/tramites")
    const tramites = await response.json()
    return tramites
}

function cargarTabla(tramites) {
    const tabla = document.getElementById("lista-carnets") // Obtengo la tabla mediante id
    tabla.innerHTML = "" // vacio el contenido previo de la tabla

    tramites.forEach(tramite => { // itero todos los tramites, y a c/tramite le creo una fila en la tabla
        const filaNueva = `
        <tr>
            <td scope="row">${tramite.titular}</td>
            <td scope="row">${tramite.dni}</td>
            <td scope="row">${tramite.tipo}</td>
            <td scope="row">${tramite.fechaInicio}</td>
            <td scope="row">${tramite.fechaFin}</td>
            <td scope="row">${tramite.prioritario}</td>
            <td scope="row">${tramite.observaciones}</td>
        </tr>
        ` // en cada <td> (<td> es una celda) pongo el dato que corresponde
          // por ejemplo tramite.titular ; el atributo se pone tal cual está
          // definido en el modelo del backend
        tabla.innerHTML += filaNueva // Al contenido de la tabla le agrego la fila nueva 
    });
}

async function mostrarTabla() {
    // le agregamos un listener al documento html que ejecute la funcion que le pasamos 
    // por parametro. El listener va a estar escuchando un evento, cuando escuche el evento
    // disparará la funcion pasada por parametro, en este caso el evento que se escucha
    // es DOMContentLoaded, es un evento que se dispara apenas termina de cargar el HTML, 
    //por lo que la funcion pasada por parametro se ejecutará cuando el HTML termine de cargar
    document.addEventListener("DOMContentLoaded", async () => {
        const tramites = await getTramites() // traemos los tramites
        cargarTabla(tramites) // los cargamos en la tabla
    })
}

mostrarTabla()

// Ahora la parte del filtro
// Funcion que busca en el backend los tramites filtrados
async function getTramitesFiltrado(nombreTitular) { // nombreTitular es el criterio
    const response = await fetch("http://localhost:4000/tramites/" + nombreTitular)
    const tramites = await response.json()
    return tramites
}

// esta funcion esta en el parametro onclick del boton filtrar del HTML
// por lo que se ejecutará cuando se haga click en el boton
async function Filtrar() {
    const CampoTexto = document.getElementById("buscar-input") // busco el campo de texto por id
    const valorCampoTexto = CampoTexto.value //Busco el texto que tiene escrito el campo de texto  
    const tramites = await getTramitesFiltrado(valorCampoTexto) // Ejecutamos la funcion anterior y le pasamos lo que hay escrito en el campo de texto
    
    if (tramites.message) { // chequeamos si nos llego el mensaje de que no encontró tramites
        alert(tramites.message) // si efectivamente llego el mensaje de que no hay tramites entonces lo mostramos por alerta
        // este mensaje se mostrara para toda busqueda que no cumpla los criterios, es decir,
        // que no haya titular igual a la busqueda ingresada, o en el caso que si haya un titular
        // con ese nombre, cuando este no tenga ningun tramite con prioritario:"S"
    } else {
        // Si no nos llega message es porque entonces nos llegaron los tramites
        cargarTabla(tramites) // volvemos a cargar la tabla pero con los tramites filtrados
    }
}