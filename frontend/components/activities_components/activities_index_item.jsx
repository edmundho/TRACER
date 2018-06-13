import React from 'react';

class ActivitiesIndexItem extends React.Component {
  constructor (props) {
    super(props);

  }

  render () {
    const activity = this.props.activity;
    const date = new Date(this.props.activity.date);
    
    return (
      <div id="activity-item">
        <ul>
          <li>{activity.sport}</li>
          <li>{date.toDateString()}</li>
          <li>{activity.title}</li>
          {/* <li>{activity.description ? activity.description : " "}</li> */}
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