import { User } from "../models/user.model.js"
import { Bootcamp } from "../models/bootcamp.model.js"

User.belongsToMany(Bootcamp, {
    through: "user_bootcamp",
    as: "bootcamps",
    foreignKey: "user_id",
    onDelete: "CASCADE"
  });
  
  Bootcamp.belongsToMany(User, {
    through: "user_bootcamp",
    as: "users",
    foreignKey: "bootcamp_id",
    onDelete: "CASCADE"
  });

  export { User, Bootcamp }