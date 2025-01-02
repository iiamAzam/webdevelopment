const express = require('express')
const  MehandiDatabase  = require('./database')
const sendmail = require ('./utils')
const route= express.Router()


route.post('/api/mehandi',async(req , res )=>{
   try{
        console.log(req.body)
    const {name,contact,area} = req.body
   
    // const newdata  = new MehandiDatabase({
    //         name ,
    //         contact,
    //         area
    // })
    // const dataid = await newdata.save()
    const to = 'azaanpq@gmail.com'
    const subject = `regarding the mehandi service`
    const content =  `name:${name}\n contect:${contact}\n area:${area}`
    sendmail(to,subject,content)
    return res.status(200).json({
            message:'successfully submitted',
            status: true
    })
}catch(erroor){
        return res.status(400).json ({
            message : 'not submitted',
            status : false 
        }
        )
}
})

module.exports=route

