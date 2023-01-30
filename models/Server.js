const express = require('express')
const {db} = require('../database/config')
const cors = require('cors')
const {userRouter} = require('../routes/userRouter')
const {transferRouter} = require('../routes/transferRouter')


class Server {
  constructor(){
    this.app = express()
    this.port = process.env.PORT || 4000

    this.path = {
      users:'/api/v1/users',
      transfer:'/api/v1/transfers'
    }

    this.database()

    this.middlewares()

    this.routes()
  }

  middlewares (){
    this.app.use(cors())
    this.app.use(express.json())
  }

  routes(){
    this.app.use(this.path.users, userRouter)
    this.app.use(this.path.transfer, transferRouter)
  }

  database(){
    db.authenticate()
    .then(()=>console.log('autenticado en base de datos'))
    .catch(err => console.log(err))

    db.sync()
      .then(()=>console.log('sincronizado con base de datos'))
      .catch(err=>console.log(err))
  }

  listen(){
    this.app.listen(this.port, ()=>{
      console.log(`Servidor escuchando por el puerto ${this.port}`)
    })
  }
}

module.exports = Server