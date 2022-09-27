//Model
const Todo = require('../models/todoModel')

const index = async (req,res) => {
    try {
        const todo = await Todo.find()
        return res.status(200).json(todo)

    } catch (error) {
        console.log(error)
    }

}

const create = async (req,res) =>{
    
    try {
        const {name} = req.body
        const todo = await Todo.create({
            name,status:'InProgress'
        })

        return res.status(200).json(todo)

    } catch (error) {
        console.log('es estaa')
        console.log(error)
    }
}



const done = async (req,res) => {
    try {
        let {_id} = req.params
        let todo = await Todo.findOneAndUpdate(
            {_id},
            {status:'Done'},
            {new:true}
        )

        return res.status(200).json(todo)

    } catch (error) {
        console.log(error)
    }
}

const destroy  = async (req,res) =>{
    try {
        let {_id} = req.params
        let todo = await Todo.findOneAndDelete({_id:_id})
        return res.status(200).json(todo)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {index,create,done,destroy}