const { DataTypes } = require('sequelize')

module.exports = (sequelize) =>{
    sequelize.define('courses',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement:true
        },
        productName:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        image:{
            type:DataTypes.STRING,
            allowNull:false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        originalPrice:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        fridayPrice:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        type:{
            type: DataTypes.STRING,
            allowNull:false
        },
        color:{
            type: DataTypes.STRING,
            allowNull:false
        },
        state:{
            type: DataTypes.STRING,
            allowNull:false
        },
        size:{
            type: DataTypes.STRING,
            allowNull:false
        },
        seasson:{
            type: DataTypes.STRING,
            allowNull:false
        }
        
    },
    { timestamps: false })
}