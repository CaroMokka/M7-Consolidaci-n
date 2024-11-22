import { sequelize } from "./config/db.config.js"
import  clc  from "cli-color"

( async ()=>{
    try{
        await sequelize.authenticate()
        console.log(clc.green("Conexión a base de datos éxitosa"))
    } catch(err){
        console.log(clc.red("Error en la conexión a base de datos"))
    }
})()