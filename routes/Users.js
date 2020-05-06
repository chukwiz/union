const express = require('express');
const users = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const fs = require('fs');
const _ = require('lodash');
const sendMail = require('../welcomeMail');
const passConfirmMail = require('../passConfirmMail');
const sendResetMail = require('../sendResetMail');


// var {authenticate} = require('../middleware/authenticate');

const storage = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null,'./client/public/uploads');
    },filename:function(req, file, cb){
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
    }
})
const upload = multer({storage:storage});
// const upload = multer({dest:'uploads/'});
const User = require("../models/User");
users.use(cors());

// process.env.SECRET_KEY = "secretssshy";

users.post('/register',upload.fields([{name:"documents", maxCount:1},{name:"photo", maxCount:1}]), (req, res) => {
    
    const files = req.files
    const body = req.body
    
    let documents = fs.readFileSync(files.documents[0].path)
    let photo = fs.readFileSync(files.photo[0].path)

    let encoded_image = photo.toString('base64')
    let encoded_documents = documents.toString('base64')

    let final_image = {
        contentType:req.files.photo[0].mimetype,
        path:req.files.photo[0].path,
        name:req.files.photo[0].filename,
        image:new Buffer(encoded_image, 'base64')
    }
    // console.log(req.files.photo[0])

    let image_path = req.files.photo[0].filename

    let final_document = {
        contentType:req.files.documents[0].mimetype,
        path:req.files.documents[0].path,
        image:new Buffer(encoded_documents, 'base64')
    }

    let referralID = new Date().getTime().toString(36) + Math.random().toString(36).slice(2);
    let referrer = req.body.referredBy;
    // console.log(referralID);

    // yourSchema.findById(id, function (err, doc) {
    //     if (err)console.log(err);

    //     var base64 = doc.img.data.toString('base64');
    //     res.send('data:'+doc.img.contentType+';base64,' + base64);

    //   });

    let first_name = req.body.firstName;
    let email = req.body.email;
    const today = new Date();
    const userData = {
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:req.body.password,
        job:req.body.job,
        age:req.body.age,
        phone:req.body.phone,
        city:req.body.city,
        usInvestor:req.body.usInvestor,
        investorType:req.body.investorType,
        accredited:req.body.accredited,
        hearabout:req.body.hearabout,
        capital:req.body.capital,
        fundsType:req.body.fundsType,
        liketoKnow:req.body.liketoKnow,
        bitaddress:req.body.bitaddress,
        referralID:referralID,
        profileImage:final_image,
        userdocument:final_document,
        imagePath:image_path,
        created:today
    }
    // console.log(userData)
    // let user = new User(userData)
    // user.save()
    // .then(() => {
        
    //     return user.generateAuthToken();
        
    // })
    // .then((token) => {
    //     sendMail(email, first_name)
    //     console.log('user registered')
    //     res.header('x-auth', token).send(user)
    // })
    // .catch((err) => {
    //     // res.status(400).send(err)
    //     console.log(err)
    // })

if(referrer !== ""){
    User.findOne({
        referralID:referrer
    })
    .then(user => {
        if(!user){
            res.json({error:'cannot find referrer'})
        }else{
            // console.log(user.re)
            user.referrals += 1
            user.save()
        }
    })
}

    User.findOne({
        email:req.body.email
    })
    .then(user => {
        if(!user){
            bcrypt.hash(req.body.password,10,(err,hash) => {
                userData.password = hash
                User.create(userData)
                .then(user => {
                    res.json({status:user.email + ' registered'})
                })
                .catch(err => {
                    res.send('error:' +err)
                })
            })
        }else{
            res.json({error:'User already exists'})
        }
    })
    .catch(err => {
        res.send('error:' + err)
    })
})

users.get('/pdf',(req,res) => {
    let file = fs.createReadStream("./public/quotation.pdf");
    res.writeHead(200,{
        'Content-Type':'application/pdf',
        'Content-Disposition':'attachment; filename=quotation.pdf',
        'Content-Transfer-Encoding':'Binary'
    })
    file.pipe(res)
})

let authenticate = (req, res, next) => {
    let token = req.header('x-auth');
    User.findByToken(token)
    .then((user) => {
        if(!user){
            return Promise.reject()
        }
        req.user = user;
        req.token = token;
        next();
    }).catch((e) => {
        res.status(401).send({})
    })
}

users.get('/me',authenticate,(req, res) => {
    let body = _.pick(req.user, ['email','firstName','lastName', 'job','age','city','investorType','accredited','capital','fundsType','bitaddress','imagePath','profileImage','capitalAmount','profit','total','referrals','referralID']);
    // console.log(req.user.profit,req.user.total,req.user.capitalAmount)
    console.log(body)
    res.send(body)
})

users.delete('/me/logout', authenticate, (req, res) => {
    req.user.removeToken(req.token)
    .then(() => {
        res.status(200).send()
    }, () => {
        res.status(400).send()
    }); 
})



// users.post('/login', (req, res) => {
//     User.findOne({
//         email:req.body.email
//     })
//     .then(user => {
//         if(user){
//             if(bcrypt.compareSync(req.body.password,user.password)){
//                 const payload = {
//                     _id:user.id,
//                     first_name:user.first_name,
//                     last_name:user.last_name,
//                     email:user.email
//                 }
//                 let token = jwt.sign(payload, process.env.SECRET_KEY,{
//                     expiresIn:3600
//                 })
//                 // res.send(token)
//                 res.send(user)
//             }else{
//                 res.json({error:'User does not exist'})
//             }
//         }else{
//             res.json({error:'User does not exist'})
//         }
//     })
//     .catch(err => {
//         res.send('error'+ err)
//     })
// })

users.post('/send',(req, res) => {
    sendMail('wymastyle@gmail.com','wisdom')
})

users.post('/recover', (req, res) => {
    let email = req.body.email
    User.findOne({email:email})
    .then(user => {
        if(user){
            let firstName = user.firstName
            let email = user.email
            user.generatePasswordReset();
            // 
            user.save()
                .then(user => {
                    // send email
                    let link = "http://" + req.headers.host + "/users/reset/" + user.resetPasswordToken;
                    res.status(200).json({res:"ok"})
                    console.log(link)
                    sendResetMail(email,firstName,link)

                    
                    
                    // .then((res) => {
                    //     res.status(200).json({message: 'A reset email has been sent to ' + user.email + '.'});
                    // })
                })
                .catch(err => res.status(500).json({message: err.message}));
        }else{
            return res.status(401).json({message:'The email address ' + req.body.email + ' is not associated with any account. Double-check your email address and try again.'})
        }
    })
})

users.get('/reset/:token', (req, res) => {
    User.findOne({resetPasswordToken: req.params.token, resetPasswordExpires: {$gt: Date.now()}})
    .then((user) => {
        if (!user) return res.status(401).json({message: 'Password reset token is invalid or has expired.'});

        //Redirect user to form with the email address
        // res.render('reset', {user});
        res.render('reset', {user});

    })
    .catch(err => res.status(500).json({message: err.message}));
})

users.post('/reset/:token', (req, res) => {
    User.findOne({resetPasswordToken: req.params.token, resetPasswordExpires: {$gt: Date.now()}})
    .then(user => {
        if (!user) return res.status(401).json({message: 'Password reset token is invalid or has expired.'});
        //Set the new password
        newpass = bcrypt.hashSync(req.body.password,10)
            user.password = newpass;
            user.resetPasswordToken = undefined;
            user.resetPasswordExpires = undefined;

        user.save((err) => {
            if (err) return res.status(500).json({message: err.message});
            passConfirmMail(user.email,user.firstName)
            // .then((res) => {
                res.status(200).json({status : 'success', message : 'Success! Your password has been changed.'})
            // })
            // sendconfirmationmail(user.firstName,user.email)
            // const mailOptions = {
            //     to: user.email,
            //     from: process.env.FROM_EMAIL,
            //     subject: "Your password has been changed",
            //     text: `Hi ${user.username} \n 
            //     This is a confirmation that the password for your account ${user.email} has just been changed.\n`
            // };

        })
    })
})


users.post('/login', (req,res) => {
    let body = _.pick(req.body, ['email', 'password']);
    User.findByCredentials(body.email, body.password)
    .then((user) => {
        if (user.activated !== 0){
            // if(user.isAdmin !== 0){
            //     return res.json({admin:true})
            // }
            // console.log(user.isAdmin)
            // else{
                return user.generateAuthToken()
        .then((token) => {
            res.header('x-auth', token).send(user)
        })
            // }
            
        }else{
            res.json({error:'Your account has not being activated'})
        }
    }).catch((e) => {
        res.status(400).send();
    })
})

users.post('/profile',(req, res) => {
    let decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
    User.findOne({
        _id:decoded._id
    })
    .then(user => {
        if(user){
            res.json(user)
        }else{
            res.send('User does not exist')
        }
    })
    .catch(err => {
        res.send('error:' + err)
    })
})

module.exports = users;