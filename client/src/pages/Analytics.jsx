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
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class Analytics extends Component {

  constructor(props){
    super(props)
    this.state = {
      data: [],
      venue_id: localStorage.getItem('venue_id'),
      facemask_successful_count: 0,
      total_visitors : 0,
      facemask_unsuccessful_count: 0,
      temperatureList: [],
      personList: []
    }
  }

  CountStats = () => {
    let venueJSON = require('./venue_1.json');
    let len = venueJSON.venue_stats.length;
    this.state.total_visitors = len;
    let a = 0;
    let b = 0;
    for(let i = 0; i<len; i++){
      if(venueJSON.venue_stats[i].facemask_check == 1){
        a++
      }
      if(venueJSON.venue_stats[i].facemask_check == 0){
        b++
      }
      this.state.temperatureList[i] =  venueJSON.venue_stats[i].visitor_temp
      this.state.personList[i] = venueJSON.venue_stats[i].visitor_name
    }
    this.state.facemask_successful_count = a
    this.state.facemask_unsuccessful_count = b
  };


   displayAnalytics = () => {
     
     const {venue_id} = this.state
     const venue_info = [{venue_id}]  
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
    const sevenday = [
      {
          "date": "9 Mar 2021",
          "total_visitors": 50,
          "successful_checkin": 29,
          "unsuccessful_checkin": 21,
          "facemask_fail": 15,
          "temp_fail": 6
      },
      {
          "date": "10 Mar 2021",
          "total_visitors": 72,
          "successful_checkin": 40,
          "unsuccessful_checkin": 32,
          "facemask_fail": 20,
          "temp_fail": 12
      },
      {
          "date": "11 Mar 2021",
          "total_visitors": 30,
          "successful_checkin": 25,
          "unsuccessful_checkin": 5,
          "facemask_fail": 3,
          "temp_fail": 2
      },
      {
          "date": "12 Mar 2021",
          "total_visitors": 45,
          "successful_checkin": 29,
          "unsuccessful_checkin": 16,
          "facemask_fail": 10,
          "temp_fail": 6
      },
      {
          "date": "13 Mar 2021",
          "total_visitors": 64,
          "successful_checkin": 40,
          "unsuccessful_checkin": 24,
          "facemask_fail": 15,
          "temp_fail": 9
      },
      {
          "date": "14 Mar 2021",
          "total_visitors": 77,
          "successful_checkin": 70,
          "unsuccessful_checkin": 7,
          "facemask_fail": 6,
          "temp_fail": 1
      },
      {
          "date": "15 Mar 2021",
          "total_visitors": 67,
          "successful_checkin": 55,
          "unsuccessful_checkin": 12,
          "facemask_fail": 8,
          "temp_fail": 4
      }
  ];
  
  // const classes = useStyles();
    console.log(this.state.temperatureList);
    return (
      <div className="VenueDashboard row"> 
        <div className="column2" key = "column2">
          <center>
          <h1> Venue Analytics</h1>
          </center>
          
          {/* <ResponsiveContainer width="30%" height="30%">
            <PieChart width={600} height={600}>
              <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#82ca9d" stroke= "#000000" label>
                <LabelList dataKey = "name" position="top" fill="	#000000"/>
                </Pie>
            </PieChart>
          </ResponsiveContainer>

            <ResponsiveContainer width="30%" height="30%">
          <LineChart
            width={200}
            height={200}
            data={sevenday}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="natural" dataKey="total_visitors" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="successful_checkin" stroke="#82ca9d" />
            <Line type="monotone" dataKey="unsuccessful_checkin" stroke="#c76565"/>
          </LineChart>
          </ResponsiveContainer>

          <ResponsiveContainer width="30%" height="30%">
          <LineChart
            width={500}
            height={300}
            data={sevenday}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="unsuccessful_checkin" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="facemask_fail" stroke="#82ca9d" />
            <Line type="monotone" dataKey="temp_fail" stroke="#c76565"/>
          </LineChart>
          </ResponsiveContainer> */}
          <div >
      <Grid container spacing={3} style={{margin:30}}>
        <Grid item xs={12} style={{height: 400}}>
        <Card variant="outlined" >
          <CardContent >
            <center>
            <Typography variant="h5" component="h2" gutterBottom>
              Checkin Stats 
            </Typography>

            <PieChart  margin={{top: 0, right: 0, bottom: 0, left: 0}} width={400} height={400} >
              <Pie data={data} dataKey="value"  outerRadius={60} fill="#82ca9d" stroke= "#000000" label>
                <LabelList dataKey = "name" position="top" fill="	#000000"/>
                </Pie>
            </PieChart>
            </center>
          
          </CardContent>
          </Card>
        </Grid>
        
      </Grid>
      <Grid container spacing={3} style={{margin:30}}>
      <Grid item xs={6} style={{height: 400}}>
        <Card variant="outlined">
          <CardContent>
            <center>
            <Typography variant="h5" component="h2" gutterBottom>
              Checkin Stats 7 day period
            </Typography>
            <LineChart
            width={400}
            height={400}
            data={sevenday}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="natural" dataKey="total_visitors" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="successful_checkin" stroke="#82ca9d" />
            <Line type="monotone" dataKey="unsuccessful_checkin" stroke="#c76565"/>
          </LineChart>
            </center>
         
          </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} style={{height: 400}}>
        <Card variant="outlined">
          <CardContent>
            <center>
            <Typography variant="h5" component="h2" gutterBottom>
              Unsuccessful Checkin 7 day distribution
            </Typography>
            <LineChart
            width={400}
            height={400}
            data={sevenday}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="unsuccessful_checkin" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="facemask_fail" stroke="#82ca9d" />
            <Line type="monotone" dataKey="temp_fail" stroke="#c76565"/>
          </LineChart>
            </center>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
        </div>
        
      </div>
      
      
    );
  }

}
export default withRouter(Analytics);
