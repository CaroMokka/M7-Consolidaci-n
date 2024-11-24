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

export { createUser }