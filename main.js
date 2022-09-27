const express = require('express')
const app = express()
const port = 5001

//CORS
const cors = require('cors')
app.use(cors())

//parser the body
app.use(express.json())
app.use(express.urlencoded(({extended:true})))

//database
require('./config/config')

//routes
require('./routes')(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})