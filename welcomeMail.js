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

    const welcome = (email,name) => {
        return `
        <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Welcome</title>
    </head>
    <body style="margin:0px;padding:5px;font-size:80%">
        <div style = "color:#535353">
            <p>Dear <span style="text-transform:capitalize;">${name},</span></p>
            <p>Welcome to CSM Wealth, a company dedicated to being a distinctive and trusted provider of asset management solutions for individual and institutional investors.
            </p>
            <p>Our goal is to offer clients high-quality, well-performing investment strategies that meet multiple financial needs. To accomplish this, we employ a multi-manager, multi-strategy approach that delivers a broad array of investment strategies from affiliated managers and select subadvisers.
            </p>
            <p>Each of our investment brokers has a distinct investment philosophy and style, with talent and discipline that have been tested through market cycles and validated by performance over time. Importantly, they all share an unwavering commitment to investor success.
            </p>
            <p>On behalf of the entire team at CSM Wealth , I welcome you to learn more about our brokerage company and investment portfolio that make us a company with a singular focus on providing long-term investment solutions. We hope you will consider joining us as a client.
            </p>
        </div>
        <br />
        <div style="text-align:left;color:#1a1a1a">
            William Schmidt <br />
            Director
        </div>
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
    
    const welcomeMail = (email,name) => {
        let mailOptions = {
            from: '"CSM Wealth" <support@csmwealth.com>',
            to:email,
            subject:'Welcome to CSM Wealth',
            html:welcome(email,name)
        };
        
        transporter.sendMail(mailOptions, (error,info) => {
            if (error){
                return console.log(error)
            }
        
            console.log('Message sent', info.messageId,info.response)
        })
    }
    
// })

module.exports = welcomeMail;