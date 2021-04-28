import React from "react";
import '../style/style.css';
import { withRouter } from "react-router-dom";
import api from '../api'
import { Link } from 'react-router-dom'
import { Component } from "react";
import Webcam from "react-webcam";


class VenueDashboard extends Component {

  constructor(props){
    super(props)
    this.state = {
      visitor_name: "",
      visitor_id: "",
      venue_id: localStorage.getItem('venue_id'),
      image_string: "",
      isLoading: false,
    }
  }

  handleChangeName = async event => {
    const visitor_name = event.target.value;
    this.setState({visitor_name})
  }

  handleChangeID = async event => {
    const visitor_id = event.target.value;
    this.setState({visitor_id})
  }

  setRef = webcam => {
     this.webcam = webcam;
   };

   capture = () => {
     this.setState({image_string: this.webcam.getScreenshot().split(',')[1]})
     const {visitor_name, visitor_id, venue_id,image_string} = this.state
     const visitor_info = [{visitor_name, visitor_id, venue_id},{image_string}]
     api.checkIn({visitor_info}).then(res =>{
     //console.log(res.data)
     var maskFound ;
     if (res.data['checkin_info'].check_in === 0){
      if(res.data['checkin_info'].temp_check === 0 && res.data['checkin_info'].facemask_check ===0){
        maskFound = "Temp too high & Facemask not detected. Please ty again."
      }
      else if(res.data['checkin_info'].temp_check === 1 && res.data['checkin_info'].facemask_check ===0)
        maskFound = "Temp normal but Facemask not detected. Please ty again." 

      else if(res.data['checkin_info'].temp_check === 0 && res.data['checkin_info'].facemask_check ===1)
        maskFound = "Facmask detected but Temp not within range. Please ty again."

     }
     else{
       maskFound = "Mask was detected and Temp within range. Check in Successful."
     }
     document.getElementById("temp").value = res.data['checkin_info'].visitor_temp
     document.getElementById("mask").value = maskFound
     })

   };

  render(){
    const videoConstraints = {
          width: 1280,
          height: 720,
          facingMode: "user"
        };
    return (
      <div className="VenueDashboard row">
        <div className="column2" key = "column2">
          <div>
          <div className = "">
                <div>
              <Webcam
                audio={false}
                height={450}
                ref={this.setRef}
                screenshotFormat="image/jpeg"
                width={650}
                videoConstraints={videoConstraints}
              />
              <center><button id="capture" className="" style={{ backgroundColor:'#008080', width:'200px',height:'40px', color:'white', border:'none' }} onClick={this.capture}>Capture</button></center>
          </div>
          </div>
          </div>
        </div>

        <div className = "column3" key = "column2">
          <div className = "test7">
          <div className="" key = "checkinName">
            <label>Your Name</label>
            <input className="form-control" placeholder="Enter your name" onChange={this.handleChangeName}></input>
          </div>
          <div className="" key = "checkinID">
            <label>Your ID</label>
            <input className="form-control" placeholder="Enter your ID" onChange={this.handleChangeID}></input>
          </div>
          <div className="" key = "checkinName">
            <label>Temperature Detected</label>
            <input readOnly id="temp" className="form-control"></input>
          </div>
          <div className="" key = "checkinID">
            <label>Mask Detected</label>
            <input readOnly id = "mask" className="form-control"></input>
          </div>
          </div>
        </div>
      </div>
    );
  }

}
export default withRouter(VenueDashboard);
