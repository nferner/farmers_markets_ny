import React from 'react';
import request from 'superagent';
import MapView from './maps/mapView.jsx';
import MarketForm from './markets/marketForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markets: [],
    }
  }
  componentDidMount() {
    request.get('http://localhost:3000/api/v1/markets').then((res) => {
      this.setState({
        markets: res.body
      })
    })
  }
  render() {
    const marketElement = this.state.markets.map((market, idx) => {
      return (
        <MarketForm
          key={idx}
          text={market.market}
        />
      );
    });
    return (
      <div>
        {
          marketElement
        }
      </div>
    )
  }
}

export default App;
