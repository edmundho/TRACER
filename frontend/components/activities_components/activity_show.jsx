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
    // let duration = new Date(null);
    // if (activity.duration) {
    //   duration.setHours(0);
    //   duration.setSeconds(activity.duration);
    //   duration = duration.toTimeString().slice(0, 8);
    // }

    if (this.props.activity === undefined) {
      return <div id="activity-show-page">loading...</div>;
    } else {
      return (
        <div id="activity-show-page">
          <header>
            <div id="show-header-div">
              <h1>{activity.title}</h1>
              <h3>{activity.date.slice(0, 10)}</h3>
            </div>
            <Link to="/activities">Back</Link>
          </header>
          <ul>
            <li>
              <div>
                Description:
              </div>
              <p>{activity.description}</p>
            </li>
            <li>
              <div>
                Sport: 
              </div>
              <p>{activity.sport}</p>
            </li>
            <li>{activity.time.slice(11,19)}</li>
            {/* <li>{duration}</li> */}
            <div>
              <li>{activity.distance}</li>
              <li>{activity.elevation}</li>
            </div>
            <li>{routeImage}</li>
          </ul>
        </div>
      );
    }
  }
}

export default ActivityShow;