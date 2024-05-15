const express = require('express');
const { Sequelize, DataTypes, Op } = require('sequelize');
const cors = require('cors');

// Configura la aplicación Express
const app = express();
app.use(express.json());
app.use(cors());

// Configura la conexión Sequelize (base de datos SQLite en memoria)
const sequelize = new Sequelize('sqlite::memory:');

// Define el modelo Paquete
const Tramite = sequelize.define('Tramite', {
    titular: DataTypes.STRING,
    dni: DataTypes.STRING,
    tipo: DataTypes.STRING,
    fechaInicio: DataTypes.TEXT,
    fechaCierre: DataTypes.TEXT,
    prioritario: DataTypes.TEXT,
    observaciones: DataTypes.TEXT,
    }, 
{ timestamps: false });


// Inicializa la base de datos e inserta datos de muestra
async function inicializarBaseDeDatos() {
    await sequelize.sync({ force: true });
    await Tramite.bulkCreate([
        { titular: 'Titular Test01', dni: 25639888, tipo: 'Exp01', fechaInicio: '01/03/2024', fechaCierre:'', prioritario: 'S', observaciones: 'Usa audífono' },
        { titular: 'Titular Test11', dni: 25639889, tipo: 'Exp010', fechaInicio: '01/03/2024', fechaCierre:'', prioritario: 'S', observaciones: 'Usa audífono' },
        { titular: 'Titular Test12', dni: 25639860, tipo: 'Exp010', fechaInicio: '11/04/2024', fechaCierre:'01/05/2024', prioritario: 'N', observaciones: 'Usa audífono' },
        { titular: 'Titular Test21', dni: 25639861, tipo: 'Exp010', fechaInicio: '01/03/2024', fechaCierre:'', prioritario: 'S', observaciones: 'Usa audífono' },
        { titular: 'Titular Test33', dni: 25639836, tipo: 'Exp01', fechaInicio: '01/04/2024', fechaCierre:'', prioritario: 'S', observaciones: 'Usa audífono' },
        { titular: 'Titular Test55', dni: 25639887, tipo: 'Exp01', fechaInicio: '01/05/2024', fechaCierre:'', prioritario: 'N', observaciones: 'Usa audífono' },
        { titular: 'Titular Test18', dni: 25639877, tipo: 'Exp09', fechaInicio: '10/03/2024', fechaCierre:'', prioritario: 'N', observaciones: 'Usa audífono' },
        { titular: 'Titular Test06', dni: 25639833, tipo: 'Exp09', fechaInicio: '11/03/2024', fechaCierre:'', prioritario: 'N', observaciones: 'Usa audífono' },
        { titular: 'Titular Test04', dni: 25639811, tipo: 'Exp01 X', fechaInicio: '12/03/2024', fechaCierre:'13/05/2024', prioritario: 'S', observaciones: 'Usa audífono' },
       
    ]);
}

////////////////////////////////////////////////////////////// Inicio de Resolución

// Endpoint para buscar según el criterio indicado por enunciado.
app.get('/tramites/:criterio', async (req, res) => {
    const criterio = req.params.criterio
    const tramites = await Tramite.findAll({
        where: {
            [Op.and]:[{titular:criterio},{prioritario:"S"}]
        }
    })
    if (!tramites || tramites.length === 0) {
        res.status(404).json({
            message: "No se encontro ningun tramite con esos criterios"
        })
    } else {
        res.json(tramites)
    }
    
});

// Endpoint para obtener todos los paquetes
app.get('/tramites', async (_, res) => {
    const tramites = await Tramite.findAll()
    res.json(tramites)
});

////////////////////////////////////////////////////////////// Fin de Resolución

// Inicia el servidor
inicializarBaseDeDatos().then(() => {
    app.listen(4000, () => console.log('Servidor corriendo en http://localhost:4000'));
});