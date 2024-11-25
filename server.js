import { sequelize } from "./config/db.config.js";
import clc from "cli-color";
import {
  createBootcamp,
  addUserToBootcamp,
  findByIdBootcamp,
  findAllUsersBootcamp,
} from "./controllers/bootcamp.controller.js";
import {
  createUser,
  findUserById,
  findAll,
  updateUserById,
  deleteUserById,
} from "./controllers/user.controller.js";
import { User } from "./models/user.model.js";

(async () => {
  try {
    await sequelize.sync({ alter: true });
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
    // await addUserToBootcamp(3,12)
    // await addUserToBootcamp(2,12)
    // await addUserToBootcamp(3,13)
    // await addUserToBootcamp(3,14)
    // await addUserToBootcamp(2,13)

    //CONSULTAR POR ID BOOTCAMP ----->
    // const bootcampFound =  await findByIdBootcamp(3)
    // console.log(JSON.parse(JSON.stringify(bootcampFound)))

    //OBTENER USUARIOS CON SUS BOOTCAMP
    // const allUsersBootcamp = await findAllUsersBootcamp(3)
    // console.log(JSON.parse(JSON.stringify(allUsersBootcamp)))

    //OBTENER LOS BOOTCAMPS DE UN USUARIO
    // const bootcampsUser = await findUserById(7)
    // console.log(JSON.parse(JSON.stringify(bootcampsUser)))

    //OBTENER TODOS LOS USUARIOS INNCLUYENDO LOS BOOTCAMP ------->
    // const {users, bootcamps} = await findAll();
    // console.log("Usuarios con Bootcamps:", JSON.parse(JSON.stringify(users)));
    // console.log("Bootcamps con Usuarios:", JSON.parse(JSON.stringify(bootcamps)));

    //ACTUALIZAR UN USUARIO
    // const userUpdated = await updateUserById(3, {firstName: "Pedro", lastName: "Almodovar", email: "p.almo@gmail.com"})
    // console.log(JSON.parse(JSON.stringify(userUpdated)))

    //ELIMINACIÓN DE USUARIO ------->
    try {
      const userDeleted = await deleteUserById(12);
      console.log(JSON.parse(JSON.stringify(userDeleted)));
    } catch (err) {
      console.log(err);
    }

    console.log(clc.green("Conexión a base de datos éxitosa"));
  } catch (err) {
    console.log(clc.red("Error en la conexión a base de datos", err));
  }
})();
