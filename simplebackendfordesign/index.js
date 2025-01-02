const express = require('express')
const cors = require ('cors')
const mongose = require('mongoose')
const app = express()

app.use(express.json())
app.use(cors())
app.get('/',(req,res)=>{
        res.status(200).json("iam working correctly")
})

app.use('/api', require('./src/routes'))

app.listen(3000)