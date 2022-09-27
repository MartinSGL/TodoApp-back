const express = require('express')
const router = express.Router()

const {create,index,done,destroy} = require("../controllers/todoController")

router.get(`/api/v1/todos/`,index)
router.post(`/api/v1/todos`,create)
router.put(`/api/v1/todos/:_id`,done)
router.delete(`/api/v1/todos/:_id`,destroy)

module.exports = router