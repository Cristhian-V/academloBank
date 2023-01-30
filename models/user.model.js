const {DataTypes} = require('sequelize')
const {db} = require('../database/config')

const User = db.define('Users', {
  id:{
    primaryKey:true,
    autoIncrement:true,
    allowNull:false,
    type:DataTypes.INTEGER
  },
  name_User:{
    allowNull:false,
    type:DataTypes.STRING
  },
  account_Number:{
    allowNull:false,
    type:DataTypes.INTEGER
  },
  password_User:{
    allowNull:false,
    type:DataTypes.STRING
  },
  amount:{
    allowNull:false,
    type:DataTypes.INTEGER
  },
  status:{
    allowNull:false,
    type:DataTypes.BOOLEAN
  }
})

module.exports = User