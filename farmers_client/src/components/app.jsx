import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      location: "", // will need to include three columns, address line 1, city, state, zip
      zip: "",
      hours: "",
      season: "",
      website: "",
    }
  }
  componentDidMount() {

  }
  render() {
    return(
      <div>
        //need to design views/components
      </div>
    )
  }
}
