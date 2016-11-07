import React from 'react';

const propTypes = {
  marketLatitude: React.PropTypes.string,
  marketLongitude: React.PropTypes.string,
  marketName: React.PropTypes.string,
  marketAddress: React.PropTypes.string,
  marketCity: React.PropTypes.string,
  marketZip: React.PropTypes.number,
  marketHours: React.PropTypes.string,
  marketSeason: React.PropTypes.string,
  marketLink: React.PropTypes.string,
};

class MarketForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.marketLatitude}
        {this.props.marketLongitude}
        {this.props.marketName}
        {this.props.marketAddress}
        {this.props.marketCity}
        {this.props.marketZip}
        {this.props.marketHours}
        {this.props.marketSeason}
        {this.props.marketLink}
      </div>
    );
  }
}

export default MarketForm;
