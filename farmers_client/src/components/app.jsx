import React from 'react';
import {Gmaps, Marker, InfoWindow } from 'react-gmaps';
import Mapper from './map/mapper.jsx';
import request from 'superagent';
import MapView from './map/mapView.jsx';
import MarketForm from './markets/marketForm.jsx';


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
  onClick(e) {
    console.log(`${market.hours}`);
  }
  render() {
    const marketInfo = this.state.markets.map((market, idx) => {
      return (
        <div id='info' key={idx}>
          <div id='format'>
            <h3>
              <a href={market.link}>{market.market}</a></h3>
              <button onClick={this.onClick} type="button">Find Me</button>
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
        <div id='scroll'>
          {
            marketInfo
          }
        </div>
        <MapView id='map'/>
      </div>
    )
  }
}

export default App;
