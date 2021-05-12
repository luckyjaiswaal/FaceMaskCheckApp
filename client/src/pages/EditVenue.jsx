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
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}
handleChange(event) {
  this.setState({value: event.target.value});
}

  render(){
      return(  
        <div className= "venueContainer"
          <div className= "editVenue">Edit Venue</div>
            <form action="#"
              <div className= "user details">
                <div className= "input box">
                  <span className= "details">Venue name</span>
                  <input type = "text" placeholder "Enter venue name" 
                </div>
                <div className= "input box">
                  <span className= "details">Venue capacity</span>
                  <input type = "text" placeholder "Enter venue capacity"
                </div>
                <div className= "input box">
                  <span className= "details"></Authority> name</span>
                  <input type = "text" placeholder "Enter Authority name" 
                </div>
                <div className= "input box">
                  <span className= "details"></Authority contact number</span>
                  <input type = "text" placeholder "Enter Authority contact number" 
                </div>
                </div className= "input box">
                  <span className= "details">Authorisation code</span>
                  <input type = "text" placeholder "Authorisation code" 
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
