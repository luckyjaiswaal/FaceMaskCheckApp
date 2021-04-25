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
      image_string: "",
      isLoading: false,
    }
  }

  setRef = webcam => {
     this.webcam = webcam;
   };

   capture = () => {
     this.setState({image_string: this.webcam.getScreenshot().split(',')[1]})
     const {image_string} = this.state
     window.alert(image_string)

   };


  render(){
    const videoConstraints = {
          width: 1280,
          height: 720,
          facingMode: "user"
        };
    return (
      <div className="VenueDashboard">
        <div className="container">
          <h1>Venue Dashboard</h1>
          <div>
          <h1>Venue List</h1>
          <div className = "">
                <div>
              <Webcam
                audio={false}
                height={350}
                ref={this.setRef}
                screenshotFormat="image/jpeg"
                width={350}
                videoConstraints={videoConstraints}
              />
              <button onClick={this.capture}>Capture photo</button>
          </div>
          </div>
          </div>
        </div>
      </div>
    );
  }

}
export default withRouter(VenueDashboard);
