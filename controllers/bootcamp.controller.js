import { Bootcamp, User } from "../models/index.js";


const createBootcamp = (dataBootcamp) => {
  return new Promise(async (resolve, reject) => {
    try {
      const bootcamp = await Bootcamp.create(dataBootcamp);
      resolve(bootcamp);
    } catch (error) {
      reject(error);
    }
  });
};
const addUserToBootcamp = (id_bootcamp, id_user) => {
  return new Promise(async (resolve, reject) => {
    try{
        const bootcamp = await Bootcamp.findByPk(id_bootcamp);
    if (!bootcamp) {
      reject("El id de bootcamp no existe en los registros.");
    }
    const user = await User.findByPk(id_user);
    if (!user) {
      reject("El id de usuario no existe en los registros");
    }

    const assignUser = await bootcamp.addUser(user)
    resolve(assignUser)
    } catch(err){
        reject(err)
    }
  });
};
const findByIdBootcamp = (id_bootcamp) => {
    return new Promise(async (resolve, reject)=>{
        try{
            const bootcamp = await Bootcamp.findByPk(id_bootcamp, {})
            if(!bootcamp){
                return reject("Id de bootcamp ingresado no existe en los registros")
            }
            resolve(bootcamp)
 
        } catch(err) {
            reject(err)
        }
    })
}
const findByIdBootcampWithUsers = (id_bootcamp) => {
  return new Promise( async (resolve, reject)=>{
    try{
      const bootcamp = await Bootcamp.findByPk(id_bootcamp, {
        include: {
          model: User,
          as: "users"
        }
      })
      if(!bootcamp){
        reject({ message: "El Id de bootcamp no es encuentra en los registros." })
      }
      resolve(bootcamp)
    } catch(err){
      reject({ message: "Error en la consulta de bootcamp con usuarios" })
    }

  })
}

const findAllUsersBootcamp = (id_bootcamp) => {
    return new Promise( async (resolve, reject)=>{
        try{
            const bootcamp = await Bootcamp.findByPk(id_bootcamp, {
                include: {
                    model: User,
                    as: "users"
                }
            })
            resolve(bootcamp)
        } catch(err) {
            reject(err)
        }

    })
}

const findAllBootcampsAndUsers = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const bootcamps = await Bootcamp.findAll({
        include: {
          model: User,
          as: "users",
        },
      });
      const users = await User.findAll({
        include: {
          model: Bootcamp,
          as: "bootcamps",
        },
      });
      resolve({ bootcamps, users });
      //resolve({usersBootcamps, bootcampsUsers})
    } catch (err) {
      reject(err);
    }
  });
};

export { createBootcamp, addUserToBootcamp, findByIdBootcamp, findAllUsersBootcamp, findByIdBootcampWithUsers, findAllBootcampsAndUsers };
