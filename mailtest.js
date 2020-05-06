const express = require('express');
const sender = express.Router();

const nodemailer = require('nodemailer');


// sender.post('/send', (req, res) => {
    let transporter = nodemailer.createTransport({
        host: "mail.csmwealth.com",
        port: 587,
        secure: false,
        auth: {
            user: 'support@csmwealth.com', // generated ethereal user
            pass: 'macdaniel008' // generated ethereal password
          },
          tls:{
              rejectUnauthorized:false
          }
    });
    
    const sending = () => {
        let mailOptions = {
            from: '"CSM Wealth" <support@csmwealth.com>',
            to:'wymastyle@gmail.com',
            subject:'welcome back',
            html:'<h1>Welcome back</h1>'
        };
        
        transporter.sendMail(mailOptions, (error,info) => {
            if (error){
                return console.log(error)
            }
        
            console.log('Message sent', info.messageId,info.response)
        })
    }
    
// })

module.exports = sender;