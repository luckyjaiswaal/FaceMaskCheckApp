import React from "react";
import '../style/style.css';
import signup from '../components/facemaskcheck.jpg'
import { withRouter } from "react-router-dom";
import api from '../api'
import { Link } from 'react-router-dom'
import { Component } from "react";

class EditVenue extends Component {

  constructor(props){
    super(props)
    this.state = {
      isolating: false,
    } 
  } 

  render(){
      return(  
        <div className= "venueContainer"
          <div className= "editVenue">Edit Venue</div>
            <form action="#"
              <div className= "user details">
                <div className= "input box">
                  <span className= "details">Venue name</span>
                  <input type = "text" placeholder "Enter venue name" onChange= {this.handleChangeName} />
                </div>
                <div className= "input box">
                  <span className= "details">Venue capacity</span>
                  <input type = "text" placeholder "Enter venue capacity" onChange= {this.handleChangeName} />
                </div>
                <div className= "input box">
                  <span className= "details"></Authority> name</span>
                  <input type = "text" placeholder "Enter Authority name" onChange= {this.handleChangeName} />
                </div>
                <div className= "input box">
                  <span className= "details"></Authority contact number</span>
                  <input type = "text" placeholder "Enter Authority contact number" onChange= {this.handleChangeName} />
                </div>
                </div className= "input box">
                  <span className= "details">Authorisation code</span>
                  <input type = "text" placeholder "Authorisation code" onChange= {this.handleChangeName} />
                </div>
              </div>
              </div> className="button">
                <input type="submit" value="submit changes"/>
              </div>
            <form>
          </div>
    );
  }
}
export default withRouter(EditVenue);
