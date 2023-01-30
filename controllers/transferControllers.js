const repairs = require('../models/repairs.model')
const User = require('../models/user.model')


const transfer = async(req, res) =>{
try {
  const userSender = await User.findOne({where:{
    account_Number:req.body.account_Number_sender
  }})

  const userRecive = await User.findOne({where:{
    account_Number:req.body.account_Number_recive
  }})

  if(userRecive){
    if(userSender.amount - req.body.amount > 0){

      userRecive.set({
        amount: userRecive.amount + req.body.amount
      })
      userSender.set({
        amount: userSender.amount - req.body.amount
      })
      userRecive.save()
      userSender.save()

      const repairscreate = await repairs.create({
        amount: req.body.amount,
        sender_UserId: userSender.id,
        recever_UserId: userRecive.id
      })

      return res.status(200).json([userRecive, userSender, repairscreate]) 

    }else{
      return res.status(200).json(`la cuenta ${req.body.account_Number_sender} no cuenta con los fondos suficientes para realizar la transaccion`)    
    }
  }else{
    return res.status(200).json(`la cuenta ${req.body.account_Number_recive} no existe`)  
  }
} catch (error) {
  console.log(error)
  return res.status(500).json({
    status:'fail',
    message:'An error  has ocurred, talk to the adminitrator'
  })
}
}

module.exports = {
  transfer
}