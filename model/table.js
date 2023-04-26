const { DataTypes }=require('sequelize');
const sequelize=require('../connection/database');

const table=sequelize.define('products',{
  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    unique:true,
    primaryKey:true
  },
  title:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  description:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  imageUrl:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  status:{
    type:DataTypes.STRING,
    allowNull:false
  }
});
module.exports=table;