import React from "react";
import '../style/style.css';
import { withRouter } from "react-router-dom";
import api from '../api'
import { Link } from 'react-router-dom'
import { Component } from "react";
import Webcam from "react-webcam";


class Analytics extends Component {

  constructor(props){
    super(props)
    this.state = {
      data: [],
      venue_id: localStorage.getItem('venue_id'),
    }
  }



   displayAnalytics = () => {
     
     const {venue_id} = this.state
     const venue_info = [{venue_id}]
     //how to call ai api.VenueStats({venue_info}).then(res =>{
     //console.log(res.data) how to print data to console
     //example of how to acces api returned data
     //if (res.data['checkin_info'].check_in === 0){
       //maskFound = "Mask not detected. Please try again."
     //}
     //else{
       //maskFound = "Mask was detected. Check in Successful."
     //}
    

   };

  render(){
    return (
      <div className="VenueDashboard row">
        <div className="column2" key = "column2">
          
        </div>
      </div>
    );
  }

}
export default withRouter(Analytics);
