import React from 'react';
import { Link } from 'react-router-dom';
import { imageUrlBuilder } from '../../util/static_map_url';

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
      window.scrollTo(0, 0);
    });
  }

  render () {
    const activity = this.props.activity;
    let routeImage;
    if (this.props.route.length > 0) {
      const polyline = this.props.route[0].polylineString;
      const origin = this.props.route[0].origin;
      const destination = this.props.route[0].destination;
      const imageUrl = imageUrlBuilder(polyline, origin, destination, 'large');
      routeImage = (<img id="large-route-image" src={imageUrl} alt=""/>);
    }

    console.log(activity);

    let sport;
    if (activity && activity.sport === 'bike') {
      sport = "Ride";
    } else if (activity && activity.sport === 'run') {
      sport = "Run";
    }

    let description;
    if (activity && activity.description.length > 0) {
      description = (
        <div id="activity-description-div">
          <h3>Description:</h3>
          <p>{activity.description}</p>
        </div>
      );
    } else {
      description = <div></div>;
    }

    let duration;
    if (activity && activity.duration) {
      duration = new Date(null);
      duration.setHours(0);
      duration.setSeconds(activity.duration);
      duration = duration.toTimeString().slice(0, 8);
      duration = <div>{duration}<p>Moving Time</p></div>;
    } else {
      duration = <div></div>;
    }

    let time;
    if (activity && activity.time) {
      time = <h3>{activity.time.slice(11,16)} on</h3>;
    }


    if (this.props.activity === undefined) {
      return <div id="activity-show-page">loading...</div>;
    } else {
      return (
        <div id="activity-show-page">
          <header>
            <div id="show-header-div">
              <h1>{sport}</h1>
            </div>
            <Link to="/activities">Back</Link>
          </header>
          <div id="activity-show-block">
            <ul id="show-top-row-info">
              <li>
                <div id="show-title-div">
                  <div>
                    {time}<h3>{activity.date.slice(0, 10)}</h3>
                  </div>
                  <div id="activity-title"><p>{activity.title}</p></div>
                </div>
              </li>
              <li>
                <div id="show-stats-div" >
                  <div>{activity.distance} mi. <p>Distance</p></div>
                  <div>{duration}</div>
                  <div>{activity.elevation} ft. <p>Elevation Gain</p></div>
                </div>
              </li>
            </ul>
            <ul className="show-bottom-info">
              <li>
                <div>
                  <h3>Route Taken:</h3>
                  <div id="show-image-container">{routeImage}</div>
                  {description}
                </div>
              </li>
            </ul>
          </div>
        </div>
      );
    }
  }
}

export default ActivityShow;