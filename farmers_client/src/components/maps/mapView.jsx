import React from 'react';
import request from 'superagent';
import Mapper from './mapper.jsx';
import {Gmaps, Marker, InfoWindow } from 'react-gmaps';

const propTypes = {
  marketInfo: React.PropTypes.func,
}

class MapView extends React.Component {
  constructor() {
    super();
    this.state = {
      markets: [],
    }
  }
  componentDidMount() {
    request.get('http://localhost:3000/api/v1/markets/').then((res) => { this.setState({
        markets: res.body
      })
    })
  }
  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: false
    });
  }
  onCloseClick() {
    console.log('onCloseClick');
  }

  onClick(e) {
    console.log(`${this.state.markets}`);
  }
  render() {
    const mapMarker = this.state.markets.map((market, idx) => {
      return (
        <Marker
          key={idx}
          lat={market.latitude}
          lng={market.longitude}
          onClick={this.onClick}
        />
      )
    });
    return (
      <div id='map'>
        <Gmaps
          width={'900px'}
          height={'700px'}
          lat={40.646462}
          lng={-73.973158}
          zoom={12}
          params={{v: '3.exp', key: 'AIzaSyBL02Rn5sd62yXQvz9IwEuvvjt4Vdi24TA'}}
          onMapCreated={this.onMapCreated}>
            {
              mapMarker
            }
        </Gmaps>
      </div>
    );
  }
}

MapView.propTypes = propTypes;

export default MapView;
