import { Sequelize } from "sequelize"

//Config connection db
const sequelize  = new Sequelize({
    user: "postgres",
    password: "postgres",
    host: "localhost",
    database: "db_bootcamp",
    port: 5432,
    dialect: "postgres"
})

export { sequelize }