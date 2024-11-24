import { sequelize } from "./config/db.config.js"
import  clc  from "cli-color"
import { Bootcamp, User } from "./models/index.js"
import { createBootcamp } from "./controllers/bootcamp.controller.js"

( async ()=>{
    try{
        await sequelize.sync()
        // const listadoBootcamps = await Bootcamp.findAll()
        const bootcamp1 = await createBootcamp({ title: "jojo", cue: "2", description: "lorem lorem" })
        console.log(bootcamp1)
        console.log(clc.green("Conexión a base de datos éxitosa"))
    } catch(err){
        console.log(clc.red("Error en la conexión a base de datos"))
    }
})()