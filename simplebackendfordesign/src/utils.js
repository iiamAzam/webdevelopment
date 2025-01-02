const  nodemailer = require('nodemailer')

const mailler = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'azambari2001@gmail.com',
        pass:'lqde sdhc ytbw wgzp'
    }
})

const sendmail = async(to,subject,text)=>{
    const mailoption ={
            from : 'azambari2001@gmail.com',
            to,
            subject,
            text
    }

    try {
        const info = await mailler.sendMail(mailoption)
        console.log('mail sent: ', info.response)
    }catch(error){
            console.log(error)
    }   
}

module.exports=sendmail