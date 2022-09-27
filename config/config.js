//Db connection
const mongoose = require('mongoose')

const conection = async () =>{
    let res = await  mongoose.connect('mongodb://localhost/todo')
    return console.log('me he conectado')
}

module.exports = conection()