import React from "react";
import '../style/style.css';
import cardImg from '../components/cardImg.png'
import { withRouter } from "react-router-dom";
import api from '../api'
import { Link } from 'react-router-dom'
import { Component } from "react";
import {Card } from "react-bootstrap";
import { Button} from 'react-bootstrap';


class AdminDashboard extends Component {

  constructor(props){
    super(props)
    this.state = {
      user_id: localStorage.getItem('user_id'),
      venueData : [],
      isLoading: false,
    }
  }

componentDidMount(){
  const {user_id} = this.state
  api.getVenues({user_id}).then(res =>{
    this.setState({venueData: res.data.venue_list})
  //  window.alert(res.data.venue_list[0].venue_name)
  })
}


renderVenues(){
  return this.state.venueData.map((venue, index) => {
    const {venue_name, venue_id, authority_name, venue_capacity} = venue
    return(
      <Card className ="test" key={venue_id} style={{ width: '18rem'}}>
      <Card.Img variant="top" src={cardImg} />
        <Card.Body>
          <Card.Title>{venue_name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Capacity {venue_capacity}</Card.Subtitle>
          <Card.Text>
            {authority_name}
          </Card.Text>
          <Button variant="primary">View Details</Button>
        </Card.Body>
      </Card>
    )
  })
}

  render(){
    return (
      <div className="AdminDashboard">
        <div className="container">
          <h1>Admin Dashboard</h1>
          <div>
          <h1>Venue List</h1>
          <div className = "venue">

            {this.renderVenues()}
          </div>
          </div>
        </div>
      </div>
    );
  }

}
export default withRouter(AdminDashboard);
