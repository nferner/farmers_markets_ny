import React from 'react';
import MarketForm from './marketForm.jsx';

class MarketList extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
      <div>
        <h3>Maybe a list of farmer's markets could live below</h3>
        <MarketForm />
      </div>
    );
  }
}

export default MarketList;
