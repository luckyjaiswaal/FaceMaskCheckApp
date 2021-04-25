import React from "react";
import '../style/style.css';
import { withRouter } from "react-router-dom";
import api from '../api'
import { Link } from 'react-router-dom'
import { Component } from "react";



class VenueDashboard extends Component {

  constructor(props){
    super(props)
    this.state = {

      isLoading: false,
    }
  }




  render(){
    return (
      <div className="VenueDashboard">
        <div className="container">
          <h1>Venue Dashboard</h1>
          <div>
          <h1>Venue List</h1>
          <div className = "">

          </div>
          </div>
        </div>
      </div>
    );
  }

}
export default withRouter(VenueDashboard);
