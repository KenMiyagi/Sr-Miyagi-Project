const { DataTypes } = require('sequelize')

module.exports = (sequelize) =>{
    sequelize.define('courses',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement:true
        },
        courseName:{
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
        includes:{
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull:false
        },
        requirements:{
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull:false
        },
        payment:{
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull:false
        },
        theoricSchedule:{
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull:false
        },
        practiceSchedule:{
            type: DataTypes.STRING,
            allowNull:false
        }
        
    },
    { timestamps: false })
}