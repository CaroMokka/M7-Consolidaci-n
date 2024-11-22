import { sequelize } from "../config/db.config.js";
import { DataTypes } from "sequelize";

const Bootcamp = sequelize.define("Bootcamp", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING(120),
        allowNull: false
    },
    cue: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
},
{
    tableName: "bootcamps"
})

export { Bootcamp }