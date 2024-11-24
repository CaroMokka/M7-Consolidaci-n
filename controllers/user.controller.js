import { Bootcamp, User } from "../models/index.js";
const createUser = (dataUser) => {
    return new Promise( async (resolve, reject)=>{
        try{
            const user = await User.create(dataUser)
        resolve(user)
        } catch(err) {
            reject(err)
        }
    })
}
const findUserById = (id_user) => {
    return new Promise( async (resolve, reject)=>{
       try{
        const user = await User.findByPk(id_user,{
            include: {
                model: Bootcamp,
                as: "bootcamps"
            }
        })
        if(!user){
            console.log("Id de usuario no existe en los registros.")
        }
        resolve(user)
       } catch(err){
        reject(err)
       }

    })
}

export { createUser, findUserById }