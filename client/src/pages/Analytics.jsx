import React from "react";
import '../style/style.css';
import { withRouter } from "react-router-dom";
import api from '../api'
import { Link } from 'react-router-dom'
import { Component } from "react";
import Webcam from "react-webcam";
import { ResponsivePie } from '@nivo/pie'


class Analytics extends Component {

  constructor(props){
    super(props)
    this.state = {
      data: [],
      venue_id: localStorage.getItem('venue_id'),
    }
  }



   displayAnalytics = () => {
     
     const {venue_id} = this.state
     const venue_info = [{venue_id}]
     //how to call ai api.VenueStats({venue_info}).then(res =>{
     //console.log(res.data) how to print data to console
     //example of how to acces api returned data
     //if (res.data['checkin_info'].check_in === 0){
       //maskFound = "Mask not detected. Please try again."
     //}
     //else{
       //maskFound = "Mask was detected. Check in Successful."
     //}
     api.analytics({venue_id}).then(res =>{
       console.log(res.data)
     })
    

   };

   
  render(){
    let data1 = [
      {
        "id": "hack",
        "label": "hack",
        "value": 515,
        "color": "hsl(44, 70%, 50%)"
      },
      {
        "id": "go",
        "label": "go",
        "value": 469,
        "color": "hsl(296, 70%, 50%)"
      },
      {
        "id": "haskell",
        "label": "haskell",
        "value": 400,
        "color": "hsl(100, 70%, 50%)"
      },
      {
        "id": "erlang",
        "label": "erlang",
        "value": 547,
        "color": "hsl(265, 70%, 50%)"
      },
      {
        "id": "make",
        "label": "make",
        "value": 390,
        "color": "hsl(99, 70%, 50%)"
      }
    ]
    
    const MyResponsivePie = ({ data1 /* see data tab */ }) => (
      <ResponsivePie
          data={data1}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: 'color' }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
          defs={[
              {
                  id: 'dots',
                  type: 'patternDots',
                  background: 'inherit',
                  color: 'rgba(255, 255, 255, 0.3)',
                  size: 4,
                  padding: 1,
                  stagger: true
              },
              {
                  id: 'lines',
                  type: 'patternLines',
                  background: 'inherit',
                  color: 'rgba(255, 255, 255, 0.3)',
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10
              }
          ]}
          fill={[
              {
                  match: {
                      id: 'ruby'
                  },
                  id: 'dots'
              },
              {
                  match: {
                      id: 'c'
                  },
                  id: 'dots'
              },
              {
                  match: {
                      id: 'go'
                  },
                  id: 'dots'
              },
              {
                  match: {
                      id: 'python'
                  },
                  id: 'dots'
              },
              {
                  match: {
                      id: 'scala'
                  },
                  id: 'lines'
              },
              {
                  match: {
                      id: 'lisp'
                  },
                  id: 'lines'
              },
              {
                  match: {
                      id: 'elixir'
                  },
                  id: 'lines'
              },
              {
                  match: {
                      id: 'javascript'
                  },
                  id: 'lines'
              }
          ]}
          legends={[
              {
                  anchor: 'bottom',
                  direction: 'row',
                  justify: false,
                  translateX: 0,
                  translateY: 56,
                  itemsSpacing: 0,
                  itemWidth: 100,
                  itemHeight: 18,
                  itemTextColor: '#999',
                  itemDirection: 'left-to-right',
                  itemOpacity: 1,
                  symbolSize: 18,
                  symbolShape: 'circle',
                  effects: [
                      {
                          on: 'hover',
                          style: {
                              itemTextColor: '#000'
                          }
                      }
                  ]
              }
          ]}
      />
  )
    return (
      <div className="VenueDashboard row">
        <div className="column2" key = "column2">
          <h1> CHarts</h1>
          <MyResponsivePie>hi</MyResponsivePie>
        </div>
      </div>
    );
  }

}
export default withRouter(Analytics);
