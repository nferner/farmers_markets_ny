import React from 'react';

const propTypes  = {
  text: React.PropTypes.string,
}

class MarketForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.text}
      </div>
    );
  }
}

MarketForm.propTypes = propTypes;

export default MarketForm;
