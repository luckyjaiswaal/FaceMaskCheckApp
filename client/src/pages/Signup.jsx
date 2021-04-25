import React from "react";
import '../style/style.css';
import signup from '../components/facemaskcheck.jpg'
import { withRouter } from "react-router-dom";
import api from '../api'

import { Link } from 'react-router-dom'
import { Component } from "react";

 class Signup extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      first_name: '',
      last_name: '',
      password: '',
      isLoading: false,
    }
  }

  handleChangeFirstName = async event => {
    const first_name = event.target.value;
    this.setState({first_name})
  }

    handleChangelastname = async event => {
    const last_name = event.target.value;
    this.setState({last_name})
  }


  handleChangeEmail = async event => {
    const email = event.target.value;
    this.setState({email})
  }

  handleChangePassword = async event => {
    const password = event.target.value;
    this.setState({password})
  }


  handleRegisterUser = async event => {
    event.preventDefault();
    const { email, first_name, last_name, password} = this.state
    // Add in validation here
    if (first_name !== '' && last_name !== '' && email !== '' && password !== ''){
      await api.addUserToDatabase({ email, first_name, last_name, password}).then(res => {
        // Do whatever you want to do whether its a page redirect etc.

        console.log(res)
        if (res.status === 201){
          // Success condition
          window.alert('Successful Registration')
          this.props.history.push('/SignIn')
        }
      }, error => {
        console.log(error)
      })
    }

  }

  render() {
    return (
      <div className="signup">
        <div className="container">
          <div className="row align-items-center">
          <div className="col-lg-5 bx">
          <h1 className="font-weight" style={{color:'#008080'}}>Create an account</h1>
              <form>
              <div className="form-group">
                  <label htmlFor="exampleInputName"><i class="fas fa-envelope" style={{ color:'#008080', paddingRight:'5px' }}></i>First Name</label>
                  <input type="name" className="form-control" id="exampleInputName" onChange={this.handleChangeFirstName} placeholder="Enter First Name"></input>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputName"><i class="fas fa-user-alt" style={{ color:'#008080', paddingRight:'5px' }}></i>Last Name</label>
                  <input type="name" className="form-control" id="exampleInputName" onChange={this.handleChangelastname} placeholder="Enter Last Name"></input>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1"><i class="fas fa-envelope" style={{ color:'#008080', paddingRight:'5px' }}></i>Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" onChange={this.handleChangeEmail} aria-describedby="emailHelp" placeholder="Enter email"></input>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1"> <i class="fas fa-lock" style={{ color:'#008080', paddingRight:'5px' }}></i>Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" onChange={this.handleChangePassword} placeholder="Password"></input>
                </div>
                <center><button id="sign" className=""  style={{ backgroundColor:'#008080', width:'200px',height:'40px', color:'white', border:'none' }} onClick={this.handleRegisterUser} >Sign up</button></center>
                <p className="account"><Link to="SignIn" className="" style={{color:'#008080' }}>Already have an account? Sign In</Link></p>
              </form>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-md-6">

            <img className="signuppic" src={signup} width="100%" />
            </div>
          </div>
        </div>
      </div>
    );

  }

}

export default withRouter(Signup);
