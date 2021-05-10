import React from "react";
import '../style/addVenue.css';
import signup from '../components/facemaskcheck.jpg'
import { withRouter } from "react-router-dom";
import api from '../api'
import { Link } from 'react-router-dom'
import { Component } from "react";

class addNewVenue extends Component {
  constructor(props){
    super(props)
    this.state = {
       user_id: localStorage.getItem('user_id'),
       venue_name: "" ,
       venue_capacity: "",
       authority_name: "",
       authority_contact: "",
       auth_code : "",
       isLoading: false,
    }
  }

  handleChangeVenueName = async event => {
    const venue_name = event.target.value;
    this.setState({venue_name})
  }
  handleChangeVenueCapacity = async event => {
    const venue_capacity = event.target.value;
    this.setState({venue_capacity})
  }
  handleChangeAuthorityName = async event => {
    const authority_name = event.target.value;
    this.setState({authority_name})
  }
  handleChangeAuthorityContact = async event => {
    const authority_contact = event.target.value;
    this.setState({authority_contact})
  }
  handleChangeAuthorityCode = async event => {
    const auth_code = event.target.value;
    this.setState({auth_code})
  }
  handleCreateVenue = async event => {
    event.preventDefault();
    const {user_id, venue_name, venue_capacity, authority_name, authority_contact, auth_code} = this.state

    await api.addVenue({user_id, venue_name, venue_capacity, authority_name, authority_contact, auth_code}).then(res =>{
      if(res.status === 201){
        window.alert("Venue Added Successfully")
        this.props.history.push('/AdminDashboard')
      }
    },error => {
      console.log(error)
      window.alert("Venue could not be added!")
    })
  }

    render(){
        return (
            <div className= "venueContainer" style={{padding: 40, marginTop: 40, marginBottom: 40}}>
                <div className= "addNewVenue">Add New Venue</div>
                <form action="#">
                    <div className="user-details">
                        <div className="input-box">
                            <span className= "details">Venue name</span>
                            <input type="text" placeholder="Enter venue name" required onChange={this.handleChangeVenueName}/>
                        </div>
                        <div className="input-box">
                            <span className= "details">Venue capacity</span>
                            <input type="text" placeholder="Enter venue capacity" required onChange={this.handleChangeVenueCapacity}/>
                        </div>
                        <div className="input-box">
                            <span className= "details">Authority name</span>
                            <input type="text" placeholder="Enter authority name" required onChange={this.handleChangeAuthorityName}/>
                        </div>
                        <div className="input-box">
                            <span className= "details">Authority contact number</span>
                            <input type="text" placeholder="Enter authority's contact number" required onChange={this.handleChangeAuthorityContact}/>
                        </div>
                        <div className="input-box">
                            <span className= "details">Authorisation code</span>
                            <input type="text" placeholder="Enter authorisation code" required onChange={this.handleChangeAuthorityCode}/>
                        </div>
                    </div>
                    <div className="button">
                        <input type="submit" value="Create venue" onClick={this.handleCreateVenue}/>
                    </div>
                </form>
            </div>
        );
    }
}
export default withRouter(addNewVenue);
