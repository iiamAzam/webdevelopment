const express = require('express')
const sendmail = require('./utils')
const route = express.Router()

route.post('/mehandi', async (req, res) => {
  try {
    console.log(req.body)
    const { name, email, message } = req.body
    const to = 'afreenaims2023@gmail.com'
    const subject = 'Regarding the Mehandi service'
    const content = `Name: ${name}\nemail: ${email}\nmessage: ${message}`

    sendmail(to, subject, content)
    return res.status(200).json({
      message: 'Successfully submitted',
      status: true,
    })
  } catch (error) {
    console.error('Error:', error)
    return res.status(400).json({
      message: 'Not submitted',
      status: false,
    })
  }
})

module.exports = route
