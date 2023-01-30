const {DataTypes} = require('sequelize')
const {db} = require('../database/config')

const repairs = db.define('repairs', {
  id:{
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    type:DataTypes.INTEGER
    },
  amount:{
    allowNull:false,
    type:DataTypes.INTEGER
  },
  sender_UserId:{
    allowNull:false,
    type:DataTypes.INTEGER
  },
  recever_UserId:{
    allowNull:false,
    type:DataTypes.INTEGER
  }
})

module.exports = repairs