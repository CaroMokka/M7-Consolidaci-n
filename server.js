import { sequelize } from "./config/db.config.js"
import  clc  from "cli-color"
import { Bootcamp, User } from "./models/index.js"

( async ()=>{
    try{
        await sequelize.sync()
        const listadoBootcamps = await Bootcamp.findAll()
        console.log(clc.green("Conexión a base de datos éxitosa"))
        console.log(clc.yellow(listadoBootcamps))
    } catch(err){
        console.log(clc.red("Error en la conexión a base de datos"))
    }
})()