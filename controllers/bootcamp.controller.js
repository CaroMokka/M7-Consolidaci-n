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
            const bootcamp = await Bootcamp.findByPk(id_bootcamp)
            if(!bootcamp){
                return reject("Id de bootcamp ingresado no existe en los registros")
            }
            resolve(bootcamp)
 
        } catch(err) {
            reject(err)
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

export { createBootcamp, addUserToBootcamp, findByIdBootcamp, findAllUsersBootcamp };
