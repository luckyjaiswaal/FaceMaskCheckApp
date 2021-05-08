import React, { useState } from "react";
import "../style/style.css";
import { withRouter } from "react-router-dom";
import api from "../api";
import { Link } from "react-router-dom";
import { Component } from "react";
import Webcam from "react-webcam";
import QrScan from "react-qr-reader";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
//test

class VenueDashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visitor_name: "",
      visitor_id: "",
      venue_id: localStorage.getItem("venue_id"),
      image_string: "",
      isLoading: false,
      scanData: "No result",
      counter: 5
    };
  }

  handleScan = (data) => {
    if (data) {
      const scanData = data;
      const data_split = data.split(",");
      this.setState({ scanData });
      this.setState({ visitor_name: data_split[0] });
      this.setState({ visitor_id: data_split[1] });
      document.getElementById("name").value = this.state.visitor_name;
      document.getElementById("id").value = this.state.visitor_id;
      document.getElementById("qr").style.display = "none";
      document.getElementById("camVideo").style.display = "inline";
      document.getElementById('label').innerHTML = "FACE SCAN IN"
      this.counter();
    }
  };

  handleError = (err) => {
    console.error(err);
  };


  setRef = (webcam) => {
    this.webcam = webcam;
  };

  capture = () => {
    this.setState({ image_string: this.webcam.getScreenshot().split(",")[1] });
    console.log("image string")
    console.log(this.state.image_string)
    this.checkIn();
  };

  checkIn = () => {
    const { visitor_name, visitor_id, venue_id, image_string } = this.state;
    const visitor_info = [
      { visitor_name, visitor_id, venue_id },
      { image_string },
    ];

    api.checkIn({ visitor_info }).then((res) => {
      //console.log(res.data)
      var maskFound;
      if (res.data["checkin_info"].check_in === 0) {
        if (
          res.data["checkin_info"].temp_check === 0 &&
          res.data["checkin_info"].facemask_check === 0
        ) {
          maskFound = "Temp too high & Facemask not detected. Please ty again.";
        } else if (
          res.data["checkin_info"].temp_check === 1 &&
          res.data["checkin_info"].facemask_check === 0
        )
          maskFound = "Temp normal but Facemask not detected. Please ty again.";
        else if (
          res.data["checkin_info"].temp_check === 0 &&
          res.data["checkin_info"].facemask_check === 1
        )
          maskFound =
            "Facmask detected but Temp not within range. Please ty again.";
      } else {
        maskFound =
          "Mask was detected and Temp within range. Check in Successful.";
      }
      document.getElementById("temp").value =
        res.data["checkin_info"].visitor_temp;
      document.getElementById("mask").value = maskFound;
    });
  };

  counter = () => {
    var number = 5
    const element = document.getElementById("label");
    const count = setInterval(updateCounter, 1000);
    function updateCounter() {
      if (number == 0) {
        clearInterval(count);
        //capture();
      }
      else {
        number--;
        console.log(number.toString())
        document.getElementById("countLabel").value = number.toString();
      }

    }

  }

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user",
    };

    return (
      <div className="VenueDashboard row">
        <div className="column2">
          <div className="video_container">
            <center>
              <label id =  "label">SCAN QR CODE</label>
              <input readOnly id="countLabel" className="form-control"></input>
              <div style={{ marginTop: 30 }} id="qr">
                <QrScan
                  delay={300}
                  onError={this.handleError}
                  onScan={this.handleScan}
                  style={{ height: 450, width: 320 }}
                />
              </div>
            </center>

            <center>
              <div
                className="cam_video"
                id="camVideo"
                style={{ display: "none" }}
              >
                <Webcam
                  audio={false}
                  height={450}
                  ref={this.setRef}
                  screenshotFormat="image/jpeg"
                  width={650}
                  videoConstraints={videoConstraints}
                />
                <center>
                  <button
                    id="capture"
                    className=""
                    style={{
                      backgroundColor: "#008080",
                      width: "200px",
                      height: "40px",
                      color: "white",
                      border: "none",
                    }}
                    onClick={this.capture}
                  >
                    Capture
                  </button>
                </center>
              </div>
            </center>
          </div>
        </div>

        <div className="column3">
          <div className="test7">
            <div className="">
              <label>Your Name</label>
              <input readOnly id="name" className="form-control"></input>
            </div>
            <div className="">
              <label>Your ID</label>
              <input readOnly id="id" className="form-control"></input>
            </div>
            <div className="">
              <label>Temperature Detected</label>
              <input readOnly id="temp" className="form-control"></input>
            </div>
            <div className="">
              <label>Mask Detected</label>
              <input readOnly id="mask" className="form-control"></input>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(VenueDashboard);
