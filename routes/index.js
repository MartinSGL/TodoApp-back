const todoRoutes = require('./todoRoutes')

module.exports = app => {
    //todo app 
    app.use(todoRoutes)
}