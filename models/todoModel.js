const mongoose = require ('mongoose')

const todoSchema = mongoose.Schema({
    name:String,
    status:{
      type:String,  
      enum:['InProgress','Done'],
      default:'Done'
    }
})

const Todo = mongoose.model('todo',todoSchema)

module.exports = Todo