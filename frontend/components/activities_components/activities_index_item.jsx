import React from 'react';
import { Link } from 'react-router-dom';

class ActivitiesIndexItem extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const activity = this.props.activity;
    // console.log(this.props.route);
    const route = this.props.route ? this.props.route : null;
    let sport;
    if (activity.sport === 'bike') { sport = 'Ride'; }
    if (activity.sport === 'run') { sport = 'Run'; }
    let duration = new Date(null);
    if (activity.duration) {
      duration.setHours(0);
      duration.setSeconds(activity.duration);
      duration = duration.toTimeString().slice(0, 8);
    }
    
    return (
      <tr id="activities-table">
        <td>{sport}</td>
        <td>{activity.date.slice(0, 10)}</td>
        <td><Link to={`/activities/${activity.id}`}>{activity.title}</Link></td>
        <td>{activity.duration ? duration : " "}</td>
        <td>{activity.distance ? activity.distance : " "} mi.</td>
        <td>{activity.elevation ? activity.elevation : " "} ft.</td>
        <td>{route ? route.title : " "}</td>
        <td>
          <button
            onClick={() => this.props.delete(activity.id)}>
            Delete</button>
        </td>
      </tr>
    );
  }
}

export default ActivitiesIndexItem;