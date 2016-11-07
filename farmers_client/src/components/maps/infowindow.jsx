import React from 'react';
import request from 'superagent';
import Mapper from './mapper.jsx';
import {Gmaps, Marker, InfoWindow } from 'react-gmaps';

class Infowindow extends React.Component {
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

  onCloseClick() {
    console.log('onCloseClick');
  }

  render() {
    const infoElement = this.state.markets.map((market, idx) => {
      return (
        <InfoWindow
          key={idx}
          lat={market.latitude}
          lng={market.longitude}
          content={market.market}
          onCloseClick={this.onCloseClick}
        />
      )
    });
    return (
      <Gmaps
        width={'800px'}
        height={'600px'}
        lat={40.646462}
        lng={-73.973158}
        zoom={12}
        params={{v: '3.exp', key: 'AIzaSyBL02Rn5sd62yXQvz9IwEuvvjt4Vdi24TA'}}
        onMapCreated={this.onMapCreated}>
          {
            infoElement
          }
      </Gmaps>
    );
  }
}

export default Infowindow;
