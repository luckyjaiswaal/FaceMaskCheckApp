import React from "react";
import '../style/style.css';
import { withRouter } from "react-router-dom";
import api from '../api'
import { Link } from 'react-router-dom'
import { Component } from "react";
import Webcam from "react-webcam";
import './venue_1.json';
import { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, LabelList } from 'recharts';



class Analytics extends Component {

  constructor(props){
    super(props)
    this.state = {
      data: [],
      venue_id: localStorage.getItem('venue_id'),
      facemask_successful_count: 0,
      total_visitors : 0,
      facemask_unsuccessful_count: 0,
    }
  }

  CountStats = () => {
    let venueJSON = require('./venue_1.json');
    let len = venueJSON.venue_stats.length;
    this.state.total_visitors = len;
    let a = 0;
    let b = 0;
    const tempList = [];
    for(let i = 0; i<len; i++){
      if(venueJSON.venue_stats[i].facemask_check == 1){
        a++
      }
      if(venueJSON.venue_stats[i].facemask_check == 0){
        b++
      }
      tempList[i] = (venueJSON.venue_stats[i].visitor_name, venueJSON.venue_stats[i].visitor_temp)
    }
    this.state.facemask_successful_count = a
    this.state.facemask_unsuccessful_count = b
  };

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
     api.analytics({venue_id}).then(res =>{
       console.log(res.data)
     })
    

   };

   
  render(){
    this.CountStats();
    const data = [
      {"name": "Successful FaceMask Check", value: this.state.facemask_successful_count},
      {"name": "Unsuccessful FaceMask Check", value: this.state.facemask_unsuccessful_count}
  ];
    return (
      <div className="VenueDashboard row"> 
        <div className="column2" key = "column2">
          <h1> CHarts</h1>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#82ca9d" label>
                <LabelList datakey = "name"/>
                </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

    );
  }

}
export default withRouter(Analytics);
