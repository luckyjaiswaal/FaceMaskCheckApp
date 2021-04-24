import React from "react";
import '../style/style.css';
import signup from '../components/facemaskcheck.jpg'
import { withRouter } from "react-router-dom";
import api from '../api'

import { Link } from 'react-router-dom'
import { Component } from "react";

class Signin extends Component {

  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      msg: '',
      isLoading: false,
    }
  }

  handleChangeName = async event => {
    const email = event.target.value;
    this.setState({email})
  }

  handleChangePassword = async event => {
    const password = event.target.value;
    this.setState({password})
  }

  handleSignin = async event => {
    event.preventDefault();
    const {email, password} = this.state
    if (email !== '' && password !== '') {
      await api.login({email, password}).then(res => {
        if(res.status === 200){
            //  this.setState({msg:'Succesfull Login!'})
             this.props.history.push('/Signup')
        }
      }, error => {
        console.log(error)
        window.alert('Email or Password is wrong.')
      })
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
