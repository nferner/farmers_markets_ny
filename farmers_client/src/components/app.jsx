import React from 'react';
import MapView from './maps/mapView.jsx';
import MarketList from './markets/marketList.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      market: '',
      zip: '',
    }
  }
  componentDidMount() {
    fetch('http://localhost:8080/api/v1/zips').then((response) => {
      response.json().then((zips) => {
        this.setState({
          zips
        })
      })
    })
  }

  handleSearch(e) {
    const value = e.target.value
    this.props.router.get(`/zips/${id}`)
  }

  render() {
    return(
      <div>
        <input
          id="zip"
          name="search"
          type="text"
          placeholder="ZIP?"
          value={this.state.position}
          onChange={this.handleChange}
        />
        <button id="search">Search</button>
        <MapView />
        <MarketList />
      </div>
    );
  }
}

export default App;
