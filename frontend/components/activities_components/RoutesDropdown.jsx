import React from 'react';
import {
  convertDistanceToMiles,
  convertElevationToFeet
} from '../../util/conversions';

export default function RoutesDropdown({ routes, update }) {
  const dropdownItems = routes.map(route => {
    const distance = convertDistanceToMiles(route.distance);
    const elevation = convertElevationToFeet(route.elevation);
    return (
      <option key={route.id} value={route.id}>
          {`${route.title} (Distance: ${distance} mi, Elevation Gain: ${elevation} ft)`}
      </option>
    );
  });

  return (
    <select onChange={update('routeId')}>
      <option value="">No Known Route Taken</option>
      {dropdownItems}
    </select>
  );
}
