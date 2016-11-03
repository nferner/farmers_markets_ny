import React from 'react';
import MapProcessor from './mapProcessor.jsx';

class MapView extends React.Component {
  constructor() {
    super();

  }
  render() {
    return(
      <div id="mapView">
        <p>a google map should go here... not in the html</p>
        <MapProcessor />
      </div>
    );
  }
}

export default MapView;
