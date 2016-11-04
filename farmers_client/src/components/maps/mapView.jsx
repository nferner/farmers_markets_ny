import React from 'react';
import MapProcessor from './mapProcessor.jsx';

class MapView extends React.Component {
  constructor() {
    super();

  }
  render() {
    return(
      <div id="map"></div>
    );
  }
}

export default MapView;
