import { sequelize } from "./config/db.config.js"
import  clc  from "cli-color"
import { createBootcamp, addUserToBootcamp, findByIdBootcamp, findAllUsersBootcamp } from "./controllers/bootcamp.controller.js"
import { createUser } from "./controllers/user.controller.js"


( async ()=>{
    try{
        await sequelize.sync({ alter: true })
        // const listadoBootcamps = await Bootcamp.findAll()
        //CREAR BOOTCAMP ---->
        // const bootcamp1 = await createBootcamp({ title: "Fullstack Javascript", cue: "4", description: "Es un programa intensivo y práctico diseñado para enseñar los fundamentos y aplicaciones avanzadas de JavaScript." })
        // console.log(JSON.parse(JSON.stringify(bootcamp1)))
        // const bootcamp2 = await createBootcamp({ title: "Introducción Python", cue: "6", description: "Es un programa intensivo y práctico diseñado para enseñar los fundamentos y aplicaciones avanzadas de Python." })
        // console.log(JSON.parse(JSON.stringify(bootcamp2)))

        //CREAR USUARIO ---->
        // const user1 = await createUser({ firstName: "Carolina", lastName: "Araya", email: "caro@gmail.com" })
        // console.log(user1)
        // const user2 = await createUser({ firstName: "Josefa", lastName: "Almonacid", email: "jose@gmail.com" })
        // console.log(user2)
        // const user3 = await createUser({ firstName: "claudio", lastName: "Gutierrez", email: "claudio@gmail.com" })
        // console.log(user3)

        //AGREGA USUARIO A BOOTCAMP
        //await addUserToBootcamp(3,3)
        // await addUserToBootcamp(2,3)
        // await addUserToBootcamp(3,4)
        // await addUserToBootcamp(3,5)
        // await addUserToBootcamp(2,5)

        //CONSULTAR POR ID BOOTCAMP ----->
        // const bootcampFound =  await findByIdBootcamp(3)
        // console.log(JSON.parse(JSON.stringify(bootcampFound)))

        //OBTENER USUARIOS CON SUS BOOTCAMP
        const allUsersBootcamp = await findAllUsersBootcamp(3)
        console.log(JSON.parse(JSON.stringify(allUsersBootcamp)))


        console.log(clc.green("Conexión a base de datos éxitosa"))
    } catch(err){
        console.log(clc.red("Error en la conexión a base de datos", err))
    }
})()