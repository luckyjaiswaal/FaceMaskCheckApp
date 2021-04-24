import React from "react";
import '../style/style.css';
import signup from '../components/facemaskcheck.jpg'
import { withRouter } from "react-router-dom";
import api from '../api'
import { Link } from 'react-router-dom'
import { Component } from "react";

class AdminDashboard extends Component {

  constructor(props){
    super(props)
    this.state = {
      user_id: "1",
      venueData : [],
      isLoading: false,
    }
  }

getVenuesData(){
  api.getVenues
}

  render(){
    return (
      <div className="AdminDashboard">
        <div className="container">
          <h1>Admin Dashboard</h1>
        </div>
      </div>
    );
  }

}
export default withRouter(AdminDashboard);
