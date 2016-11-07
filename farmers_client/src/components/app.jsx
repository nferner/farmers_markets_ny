import React from 'react';
import {Gmaps, Marker, InfoWindow } from 'react-gmaps';
import Mapper from './maps/mapper.jsx';
import request from 'superagent';
import MapView from './maps/mapView.jsx';
import MarketForm from './markets/marketForm.jsx';
import Infowindow from './maps/infowindow.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state ={
      markets: [],
    }
  }
  componentDidMount() {
    request.get('http://localhost:3000/api/v1/markets/').then((res) => { this.setState({
        markets: res.body
      })
    })
  }
  render() {
    const marketInfo = this.state.markets.map((market, idx) => {
      return (
        <div id='info' key={idx}>
          <div id='format'>
            <h3><a href={market.link}>{market.market}</a></h3>
            <p>{market.address}, {market.city}, NY {market.zip}</p>
            <p>{market.hours}</p>
            <p>{market.season}</p>
          </div>
        </div>
      )
    })
    return (
      <div>
        <h1 id='title'>NY Farmers Markets</h1>
        <div id='wrapper'>
          <MapView id='map'/>
      </div>
        {
          //marketInfo
        }
      </div>
    )
  }
}

export default App;
