import express from "express";
import { Sequelize, DataTypes } from "sequelize";
import cors from "cors";
// Configura la aplicación Express
const app = express();
app.use(express.json());
app.use(cors());

// Configura la conexión Sequelize (base de datos SQLite en memoria)
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './data/bd.sqlite'
});

// Define el modelo Evento
const Evento = sequelize.define('Evento', {
    nombre: DataTypes.STRING,
    ubicacion: DataTypes.STRING,
    fechaInicio: DataTypes.DATEONLY,
    fechaFin: DataTypes.DATEONLY,
    descripcion: DataTypes.TEXT,
    enlace: DataTypes.STRING,
    tipoAsistencia: DataTypes.STRING
}, { timestamps: false });

// Inicializa la base de datos e inserta datos de muestra
async function inicializarBaseDeDatos() {
    try {
        await sequelize.sync();
    } catch (error) {
        console.error("No se pudo inicializar la Base de Datos", error)
    }
}


//Definir aqui la ruta con el método GET para obtener todos los eventos
app.get("/eventos", async (req,res) => {
    try {
        const eventos = await Evento.findAll()
        res.json(eventos)
    } catch (error) {
        res.status(500).json({
            "message": error.message
        })
    }
});

app.put("/eventos/:id", async (req,res) => {
    try {
        const idEncontrar = req.params.id
        const evento = await Evento.findOne({
            where: {
                id: idEncontrar
            }
        })
        if (evento) {
            await evento.update(req.body)
            res.json(evento)
        } else {
            res.status(404).json({
                "message": error.message
            })
        }
        

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

app.post("/eventos", async (req,res) => {
    try {
        const newEvento = await Evento.create(req.body)
        res.status(201).send(newEvento)
    } catch (e) {
        res.status(500).send({
            error: e.message
        })
    }
});

app.delete("/eventos/:id", async (req,res) => {
    try {
        const idBorrar = req.params.id
        const evento = await Evento.findOne({
            where: {
                id: idBorrar
            }
        })
        await evento.destroy()
        res.json(evento)

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

// Inicia el servidor
inicializarBaseDeDatos().then(() => {
    app.listen(3001, () => console.log('Servidor corriendo en http://localhost:3001'));
});
