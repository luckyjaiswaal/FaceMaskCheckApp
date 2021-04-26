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
      visitor_name: "Test Name",
      visitor_id: 99,
      venue_id: localStorage.getItem('venue_id'),
      image_string: "",
      result: [],
      isLoading: false,
    }
  }

  setRef = webcam => {
     this.webcam = webcam;
   };

   capture = () => {
     this.setState({image_string: this.webcam.getScreenshot().split(',')[1]})
     const {visitor_name, visitor_id, venue_id,image_string} = this.state
     const visitor_info = [{visitor_name, visitor_id, venue_id},{image_string}]
     api.checkIn({visitor_info}).then(res =>{
       this.setState({result: res.data})
       console.log(res.data)
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
        <div className="column" key = "column2">
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

        <div className = "column" key = "column3">
        <div className="" key = "checkinName">
          <label>Your Name</label>
          <input className="form-control" placeholder="Enter your name"></input>
        </div>
        <div className="" key = "checkinID">
          <label>Your ID</label>
          <input className="form-control" placeholder="Enter your ID"></input>
        </div>
        <div className="" key = "checkinName">
          <label>Temperature Detected</label>
          <input className="form-control"></input>
        </div>
        <div className="" key = "checkinID">
          <label>Mask Detected</label>
          <input className="form-control"></input>
        </div>
        </div>
      </div>
    );
  }

}
export default withRouter(VenueDashboard);
