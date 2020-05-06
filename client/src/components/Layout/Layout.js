import React, {Component} from 'react';

import jwt_decode from 'jwt-decode';

import Aux from '../Hoc/Auxilliary/Auxilliary';
import Sidebar from '../Sidebar/Sidebar'
import routes from '../../routes';
import {profile} from '../../Home/components/UserFunctions/UserFunctions';
import JwtDecode from 'jwt-decode';
import axios from 'axios';


class Layout extends Component {
  state = {
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        job:"",
        age:"",
        phone:"",
        city:"",
        usInvestor:"",
        investorType:"",
        accredited:"",
        hearabout:"",
        capital:"",
        fundsType:"",
        liketoKnow:"",
        bitaddress:"",
        photo:null,
        photourl:"",
        documents:null,
        path:"",
        userData:{}
  }

  componentDidMount(){
    const auth = localStorage.getItem("auth");
    profile(auth)
    .then((res) => {
      this.setState({userData:res,path:res.profileImage.name})
      console.log(res.profileImage.name)
    })
  }

  render(){

    const userData = this.state.userData
    const values = userData
    const path = this.state.path
    console.log(values)
    return(
            <Aux>
                <Sidebar 
                routes = {routes}
                values = {values}
                path = {path} />
               
            </Aux>
    )
  }
}
export default Layout;