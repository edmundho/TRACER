import React from 'react';

const RoutesIndexItem = props => {
  console.log(props);
  
  return (
    <div>
      <ul>
        <li>{props.route.title}</li>
        <li>{props.route.distance}</li>
      </ul>
    </div>
  );
}

;

export default RoutesIndexItem;