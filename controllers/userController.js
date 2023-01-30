const User = require('../models/user.model')
const repairs = require('../models/repairs.model')

const findAllUsers = async(req, res) =>{
  try {
    const allUsers = await User.findAll()
    return res.status(200).json(allUsers)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      status:'fail',
      message:'An error  has ocurred, talk to the adminitrator'
    })
  }
}

const createAccuont = async(req, res) =>{
  try {
    const dataUser = {
      name_User: req.body.name_User,
      account_Number: Math.floor(Math.random() * (999999 - 100000) + 100000),
      password_User: req.body.password_User,
      amount: 1000,
      status: true
    }
    const createUser = await User.create(dataUser)
    return res.status(200).json(createUser)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      status:'fail',
      message:'An error  has ocurred, talk to the adminitrator'
    })
  }
}

const UserLogin = async(req, res) => {
  try {
    const userLogin = await User.findOne({where:{
      name_User:req.body.name_User,
      password_User:req.body.password_User
    }})

    if(userLogin){
      return res.status(200).json('Usuario Logeado')
    }else{
      return res.status(200).json('Contraseña o usuario incorrecto')
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      status:'fail',
      message:'An error  has ocurred, talk to the adminitrator'
    })
  }
}

const showHistoryUser = async(req, res) =>{
  try {
    console.log(req.params.id)
    const transferHistory = await repairs.findAll({where:{
      sender_UserId:req.params.id
    }})
    return res.status(200).json(transferHistory)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      status:'fail',
      message:'An error  has ocurred, talk to the adminitrator'
    })
  }
}

module.exports = {
  findAllUsers, createAccuont, UserLogin, showHistoryUser
}