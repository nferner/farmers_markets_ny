import React from 'react';
import MapView from './maps/mapView.jsx';
import MarketList from './markets/marketList.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      markets: [],
    };
  }
  /*componentDidMount() {
    fetch('http://localhost:3000/api/v1/markets').then((response) => {
      response.json().then((markets) => {
        this.setState({
          markets
        })
      })
    })
  }*/

  render() {
    return(
      <div>
        <MapView />
        <MarketList />
      </div>
    );
  }
}

export default App;
