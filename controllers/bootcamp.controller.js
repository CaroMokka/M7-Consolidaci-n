import { Bootcamp, User } from "../models/index.js"

const createBootcamp = (dataBootcamp) => {
    return new Promise( async (resolve, reject) => {
        try{
            const bootcamp = await Bootcamp.create(dataBootcamp)
            resolve(bootcamp)
        }catch(error){
            reject(error)
        }
    })
}
// const addUser = () => {}
// const findById = () => {}
// const findAll = () => {}

export { createBootcamp }