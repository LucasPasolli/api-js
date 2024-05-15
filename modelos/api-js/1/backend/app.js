import express from "express";
import cors from "cors";
import services from "./services/localsvc.js";
import { sequelize } from "./data/db.js";
import { db_init } from "./data/db_init.js";

const app = express() //inicializa el server
app.use(cors())

async function main() {
    const app = express()
    app.use(cors())
    await db_init()    

    app.get("/locales", async (req, res)=>{
        const locales = await services.getAllArg()
        res.json(locales)
    })

    app.get("/locales/interior", async (req, res)=>{
        const locales = await services.getAllArgInterior()
        res.json(locales)
    })

    app.listen(3000, ()=> console.log('Escuchando'))

}



main()

