import React from 'react';
import { Link } from 'react-router-dom';

class ActivityShow extends React.Component {
  constructor (props) {
    super(props);

  }

  componentDidMount () {
    this.props.getActivity(this.props.activityId).then(response => {
      const routeId = this.props.activity.routeId;
      if (routeId) {
        this.props.getRoute(routeId);
      }
    });
  }


  
  render () {
    const activity = this.props.activity;
    console.log(this.props.route);
    if (this.props.route.length > 0) {
      console.log(this.props.route[0].polylineString);

    }

    if (this.props.activity === undefined) {
      return <div id="activity-show-page">loading...</div>;
    } else {
      return (
        <div id="activity-show-page">
          <Link to="/activities">Back</Link>
          <header>
            <h1>{activity.title}</h1>
          </header>
          <ul>
            <li>{activity.description}</li>
            <li>{activity.sport}</li>
            <li>{activity.time}</li>
            <li>{activity.date.slice(0, 10)}</li>
            <li>{activity.distance}</li>
            <li>{activity.duration}</li>
            <li>{activity.elevation}</li>
          </ul>
        </div>
      );
    }
  }
}

export default ActivityShow;