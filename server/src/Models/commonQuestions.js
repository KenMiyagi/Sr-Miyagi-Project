const { DataTypes } = require('sequelize')

module.exports = (sequelize) =>{
    sequelize.define('questions',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement:true
        },
        question:{
            type:DataTypes.STRING,
            allowNull:false
        },
        answer:{
            type:DataTypes.STRING,
            allowNull:false
        }
        
    },
    { timestamps: false })
}