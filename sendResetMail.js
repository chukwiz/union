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

    const welcome = (email,name,link) => {
        return `
        <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Welcome</title>
    </head>
    <body style="margin:0px;padding:5px;">
        <div style = "color:#535353">
            <p>
            Hi, ${name} <br />
            Please click on the <a href="${link}">link</a> to reset your password.
            If you did not request this, please ignore this email and your password will remain unchanged.            
            </p>
        </div>
        <br />
        <br />
        <hr style="1px solid #e9e9e9"/>
        <br />
        <div style="color:#6e6e6e;text-align:center;font-size:80%">
        <p>This email was sent to ${email}. You are receiving this email because you signed up at <a href="http://csmwealth.com">csmwealth.com</a> . We hope that 
        you found this email useful.</p>
        <p>Copyright &copy; 2020 csmwealth, All rights reserved</p>
        <p>1A Windsor Road Northam Bideford Devon EX39 1EN</p>
        </div>
    </body>
    </html>
        `
    }
    
    const sendReset = (email,name,link) => {
        let mailOptions = {
            from: '"CSM Wealth" <support@csmwealth.com>',
            to:'wymastyle@gmail.com',
            subject:'Reset Password',
            html:welcome(email,name,link)
        };
        
        transporter.sendMail(mailOptions, (error,info) => {
            if (error){
                return console.log(error)
            }
        
            console.log('Message sent', info.messageId,info.response)
        })
    }
    
// })

module.exports = sendReset;