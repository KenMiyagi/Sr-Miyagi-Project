const { DataTypes } = require('sequelize')

module.exports = (sequelize) =>{
    sequelize.define('user',{
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
        reserved: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            defaultValue: [],
            allowNull: true,
        },
        favs: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            defaultValue: [],
            allowNull: true,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "user",
        },
        superUser:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
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