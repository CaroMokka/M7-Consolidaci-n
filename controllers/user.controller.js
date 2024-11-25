import { Bootcamp, User } from "../models/index.js";
import clc from "cli-color";
const createUser = (dataUser) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await User.create(dataUser,{
          returning: true
      });
      resolve(user);
    } catch (err) {
      reject(err);
    }
  });
};
const findUserById = (id_user) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await User.findByPk(id_user, {
        include: {
          model: Bootcamp,
          as: "bootcamps",
        },
      });
      if (!user) {
        console.log(clc.red("Id de usuario no existe en los registros."));
      }
      resolve(user);
    } catch (err) {
      reject(err);
    }
  });
};
const findAll = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const users = await User.findAll({
        include: {
          model: Bootcamp,
          as: "bootcamps",
        },
      });
      const bootcamps = await Bootcamp.findAll({
        include: {
          model: User,
          as: "users",
        },
      });
      resolve({ users, bootcamps });
      //resolve({usersBootcamps, bootcampsUsers})
    } catch (err) {
      reject(err);
    }
  });
};
const updateUserById = (id_user, dataUser) => {
  return new Promise( async (resolve, reject) => {
    try {
      const [updatedRows, updatedData] = await User.update(dataUser, {
        where: {id: id_user},
        returning: true
      });
      resolve({ success: true, message: "Usuario actualizado éxitosamente.", data: updatedData});
    } catch (err) {
      reject({ success: false, message: "Error al actualizar el usuario.", error: err })
    }
  });
};
const deleteUserById = (id_user) => {
    return new Promise( async (resolve, reject)=>{
        try{
            const userDeleted = await User.findByPk(id_user)
            if(!userDeleted){
                reject({ success: false, message: "Usuario no encontrado" })
            }
            await userDeleted.destroy()
            
            resolve({ success: true, message: "Usuario eliminado con éxito", data: userDeleted })
        }catch(err){
            reject({ success: false, message: "Error en la eliminación de usuario", error: err })
        }
    })
}

export { createUser, findUserById, findAll, updateUserById, deleteUserById };
