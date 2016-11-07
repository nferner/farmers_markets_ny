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
  }
  render() {
    return (
      <div>
        <h1 id='title'>NY Farmers Markets</h1>
        <div id='wrapper'>
          <MapView id='map'/>
        </div>
      </div>
    )
  }
}

export default App;
