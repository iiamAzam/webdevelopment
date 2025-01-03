const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.status(200).json('I am working correctly')
})
app.use('/', require('./src/routes'))

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).send('Something went wrong!')
})

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
})
