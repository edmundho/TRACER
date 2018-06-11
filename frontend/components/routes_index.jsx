import React from 'react';

class RoutesIndex extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.getAllRoutes();
  }
  
  render () {
    return (
      <div id="routes-index">
        <h1>index</h1>
      </div>
    );
  }
}

export default RoutesIndex;