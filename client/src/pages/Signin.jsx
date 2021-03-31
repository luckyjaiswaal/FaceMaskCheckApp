import React, { Component } from "react";
import '../style/style.css';
import api from '../api'
import { withRouter } from "react-router-dom";

import { Link } from 'react-router-dom'

class Signin extends Component {

  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      msg: '',
      //fullname: ''
    }
  }

  render(){
    return (
      <div className="signin">
        <div className="container">
          <div className="row align-items-center">
          <div className="col-lg-4"></div>
            <div className="col-lg-4 bx">
              <div className="content">
                <div className="column">
                  <h1 className="font-weight-light" style={{color:'#008080'}}>Signin</h1>
                  <form>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail">
                      <i class="fas fa-envelope" style={{ color:'#008080', paddingRight:'5px' }}></i>
                       Email</label>
                      <input type="name" className="form-control" id="exampleInputEmail" onChange={this.handleChangeName} placeholder="Enter Your Email"></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">
                      <i class="fas fa-lock" style={{ color:'#008080', paddingRight:'5px' }}></i>
                      Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" onChange={this.handleChangePassword} placeholder="Password"></input>
                    </div>
                    <center><button id="sign" className="" style={{ backgroundColor:'#008080', width:'200px',height:'40px', color:'white', border:'none' }} onClick={this.handleSignin}>Sign in</button></center>
                    <p className="account"><Link to="" className="" style={{color:'#008080' }}>Forgot your password?</Link></p>
                  </form>
                  {this.state.msg}
                </div>
              </div>
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>
      </div>
    );
  }

}

export default withRouter(Signin);
