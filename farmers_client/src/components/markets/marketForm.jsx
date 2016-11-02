import React from 'react';

class MarketForm extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
      <div>
        <ul>
          <li id='market'>Market Name</li>
          <li id='address'>Address, city, zip</li>
          <li id='hours'>Hours of operation</li>
          <li id='season'>OPEN SEASON!!!!!!!!!!!!</li>
          <li id='website'>URL</li>
        </ul>
      </div>
    )
  }
}

export default MarketForm;
