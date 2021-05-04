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
            isLoading: false,
        }
    }

    render(){
        return (
            <div className= "venueContainer">
                <div className= "addNewVenue">Add New Venue</div>
                <form action="#">
                    <div className="user-details">
                        <div className="input-box">
                            <span className= "details">Venue name</span>
                            <i nput type="text" placeholder="Enter Venue name" required/>
                        </div>
                        <div className="input-box">
                            <span className= "details">Venue capacity</span>
                            <input type="text" placeholder="Enter the venue capacity" required/>
                        </div>
                        <div className="input-box">
                            <span className= "details">Authority name</span>
                            <input type="text" placeholder="Enter the authority name" required/>
                        </div>
                        <div className="input-box">
                            <span className= "details">Authority Contact number</span>
                            <input type="text" placeholder="Enter the authority's contact number" required/>
                        </div>
                        <div className="input-box">
                            <span className= "details">Authorisation code</span>
                            <input type="text" placeholder="Enter the authorisation code" required/>
                        </div>
                        <div className="input-box">
                            <span className= "details">Confirm Authorisation code</span>
                            <input type="text" placeholder="Confirm authorisation code" required/>
                        </div>
                    </div>
                    <div className="button">
                        <input type="submit" value="Create venue"/>
                    </div>
                </form>
            </div>
        );
    }
}
export default withRouter(addNewVenue);
