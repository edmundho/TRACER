import React from 'react';
import { Link } from 'react-router-dom';

class ActivitiesIndexItem extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const activity = this.props.activity;

    
    return (
      <div id="activity-item">
        <ul>
          <li>{activity.sport}</li>
          <li>{activity.date.slice(0,10)}</li>
          <li><Link to={`/activities/${activity.id}`}>{activity.title}</Link></li>
          <li>{activity.duration ? activity.duration : " "}</li>
          <li>{activity.distance ? activity.distance : " "} mi.</li>
          <li>{activity.elevation ? activity.elevation : " "} ft.</li>
          <li>{activity.routeId ? activity.routeId : " "}</li>
        </ul>
      </div>
    );
  }
}

export default ActivitiesIndexItem;