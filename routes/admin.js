const AdminBro = require('admin-bro')
const AdminBroExpress = require('admin-bro-expressjs');
const AdminBroMongoose = require('admin-bro-mongoose');

AdminBro.registerAdapter(AdminBroMongoose)

const mongoose = require('mongoose');

const User = require('../models/User');

const adminBro = new AdminBro({
  databases: [mongoose],
  rootPath: '/admin',
  resources:[{
    resource:User,
    options:{
      properties:{
        email:{isVisible:{show:true,list:true,filter:true,edit:false}},
        firstName:{isVisible:true},
        // firstName:{isVisible:{show:true,list:true,filter:true,edit:true}},
        job:{isVisible:{show:true,list:true,filter:true,edit:true}},
        lastName:{isVisible:{show:true,list:true,filter:true,edit:true}},
        tokens:{isVisible:{show:true,list:true,filter:true,edit:false}}
      }
    }
  }],
  branding:{
    companyName:"CSMWealth",
    softwareBrothers:false,
  }
})

const ADMIN = {
  email:process.env.ADMIN_EMAIL || 'csmwealth@developer.com',
  password:process.env.ADMIN_PASSWORD || 'macdaniel008',
}

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro,{
  cookieName:process.env.ADMIN_COOKIE_NAME || 'admin-bro',
  cookiePassword:process.env.ADMIN_COOKIE_PASS || 'super-secret-and-long-password-for-a-cookie-in-the-browser',
  authenticate:async(email,password)=>{
    if(email === ADMIN.email && password === ADMIN.password){
      return ADMIN
    }
    return null
  }
})

module.exports = router