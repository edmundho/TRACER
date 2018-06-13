import React from 'react';

class RoutesDropdown extends React.Component {
  constructor (props) {
    super(props);

  }

  render () {
    const routes = (this.props.routes).map(route => {
      const distance = Number((route.distance * 0.0006).toFixed(2));
      const elevation = Number((route.elevation * 3.28).toFixed());
      return (
        <option key={route.id} 
          value={route.id}>
          {route.title} (Distance: {distance} mi, Elevation Gain: {elevation} ft)
          </option>
      );
    });


    return (
      <select onChange={this.props.update('routeId')}>
        <option value="">No Known Route Taken</option>
        {routes}
      </select>
    );
  }
}

export default RoutesDropdown;