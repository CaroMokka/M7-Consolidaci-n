import { sequelize } from "./config/db.config.js";
import clc from "cli-color";
import {
  createBootcamp,
  addUserToBootcamp,
  findByIdBootcamp,
  findAllUsersBootcamp,
  findByIdBootcampWithUsers,
  findAllBootcampsAndUsers,
} from "./controllers/bootcamp.controller.js";
import {
  createUser,
  findUserById,
  findAll,
  updateUserById,
  deleteUserById,
  findByIdUserWithBootcamps,
} from "./controllers/user.controller.js";
import { User } from "./models/user.model.js";

(async () => {
  try {
    await sequelize.sync({ alter: true });
    // const listadoBootcamps = await Bootcamp.findAll()
    // USER METHODS -------------------------------------

    // CREAR USUARIO ---->
    // const user1 = await createUser({ firstName: "Mateo", lastName: "Díaz", email: "mateo.diaz@correo.com" })
    // const user2 = await createUser({ firstName: "Santiago", lastName: "Mejías", email: "santiago.mejias@correo.com" })
    // const user3 = await createUser({ firstName: "Lucas", lastName: "Rojas", email: "lucas.rojas@correo.com" })
    // const user4 = await createUser({ firstName: "Facundo", lastName: "Fernandez", email: "facundo.fernandez@correo.com" })
    // console.log(JSON.parse(JSON.stringify(user3)))

    // OBTENER LOS BOOTCAMPS DE UN ID USUARIO
    // const bootcampsUser = await findUserById(7)
    // console.log(JSON.parse(JSON.stringify(bootcampsUser)))


    // OBTENER TODOS LOS USUARIOS INNCLUYENDO LOS BOOTCAMP ------->
    // const {users, bootcamps} = await findAll();
    // console.log("Usuarios con Bootcamps:", JSON.parse(JSON.stringify(users)));
    // console.log("Bootcamps con Usuarios:", JSON.parse(JSON.stringify(bootcamps)));

    // ACTUALIZAR UN USUARIO
    const userUpdated = await updateUserById(19, {firstName: "Pedro", lastName: "Sánchez", email: "pedro.sanchez@gmail.com"})
    console.log(JSON.parse(JSON.stringify(userUpdated)))

    // ELIMINACIÓN DE USUARIO ------->
    // try {
    //   const userDeleted = await deleteUserById(18);
    //   console.log(JSON.parse(JSON.stringify(userDeleted)));
    // } catch (err) {
    //   console.log(err);
    // }

    // CONSULTAR UN USUARIO POR ID, INCLUYENDO LOS BOOTCAMP ------->
    // try{
    //   const userIdWithBootcamps = await findByIdUserWithBootcamps(19)
    //   console.log(JSON.parse(JSON.stringify(userIdWithBootcamps)))
    // }catch(err){console.log(err)}

    // BOOTCAMP METHODS -------------------------------------

    // CREAR BOOTCAMP ---->
    // const bootcamp1 = await createBootcamp({ title: "Introduciendo El Bootcamp De React", cue: "10", description: "React es la librería más usada enJavaScript para el desarrollo de interfaces." })
    // console.log(JSON.parse(JSON.stringify(bootcamp1)))
    // const bootcamp2 = await createBootcamp({ title: "Bootcamp Desarrollo Web Full Stack.", cue: "12", description: "Crearás aplicaciones web utilizando las tecnologías y lenguajes más actuales y populares, como: JavaScript, nodeJS, Angular, MongoDB, ExpressJS." })
    // console.log(JSON.parse(JSON.stringify(bootcamp2)))
    // const bootcamp3 = await createBootcamp({ title: "Bootcamp Big Data, Inteligencia Artificial & Machine Learning", cue: "18", description: "Domina Data Science, y todo el ecosistema de lenguajes y herramientas de Big Data, e intégralos con modelos avanzados  de Artificial Intelligence y Machine Learning" })
    // console.log(JSON.parse(JSON.stringify(bootcamp3)))

    // AGREGA USUARIO A BOOTCAMP ------->
    // await addUserToBootcamp(4,19)
    // await addUserToBootcamp(5,19)
    // await addUserToBootcamp(6,19)
    // await addUserToBootcamp(6,20)
    // await addUserToBootcamp(6,21)

    // CONSULTAR POR ID BOOTCAMP ------->
    // const bootcampFound =  await findByIdBootcamp(3)
    // console.log(JSON.parse(JSON.stringify(bootcampFound)))

    // OBTENER USUARIOS CON SUS BOOTCAMP --------->
    // const allUsersBootcamp = await findAllUsersBootcamp(3)
    // console.log(JSON.parse(JSON.stringify(allUsersBootcamp)))

    // CONSULTAR BOOTCAMP POR ID MÁS USUARIOS -------->
    // try{
    //   const bootcampWithUsers = await findByIdBootcampWithUsers(4)
    //   console.log(JSON.parse(JSON.stringify(bootcampWithUsers)))
    // } catch(err){
    //   console.log("ERROR", err)
    // }

    //LISTAR TODOS LOS BOOTCAMPS CON SUS USUARIOS -------->
    // try{
    //   const allBootcampsWithAllUsers = await findAllBootcampsAndUsers()
    //   console.log(JSON.parse(JSON.stringify(allBootcampsWithAllUsers)))
    // }catch(err){
    //   console.log(err)
    // }

    




    


    

    

    console.log(clc.green("Conexión a base de datos éxitosa"));
  } catch (err) {
    console.log(clc.red("Error en la conexión a base de datos", err));
  }
})();
