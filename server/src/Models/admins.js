const { DataTypes } = require('sequelize')

module.exports = (sequelize) =>{
    sequelize.define('admin',{
        id:{
            type:DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        },
        number:{
            type:DataTypes.INTEGER,
        },
        profilePicture: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type:DataTypes.STRING,
            allowNull: false,
            defaultValue: "admin",
        },
        ban: {
            type:DataTypes.JSON,
            allowNull:false,
            defaultValue: {
                isBan:false,
                reason:"Not banned"
            }
        }
    },
    { timestamps: false })
}