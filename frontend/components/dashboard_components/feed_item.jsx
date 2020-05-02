import React from 'react';
import { imageUrlBuilder } from '../../util/static_map_url';
import { Link } from 'react-router-dom';
import { timeConvert } from '../../util/conversions';
import { StyleSheet, css } from 'aphrodite';
import { zoomIn } from 'react-animations';

const styles = StyleSheet.create({
  zoomIn: {
    animationName: zoomIn,
    animationDuration: '0.5s'
  }
});

class FeedItem extends React.Component {
  constructor (props) {
    super(props);

  }

  render () {
    const activity = this.props.activity;
    let routeImage;
    if (this.props.route) {
      const polyline = this.props.route.polylineString;
      const origin = this.props.route.origin;
      const destination = this.props.route.destination;
      const imageUrl = imageUrlBuilder(polyline, origin, destination, 'large');
      routeImage = (<img id="large-route-image" src={imageUrl} alt="" />);
    }

    // console.log(activity);
    let title = (<Link to={`/activities/${activity.id}`}>{activity.title}</Link>);


    let sport, icon;
    if (activity && activity.sport === 'bike') {
      sport = "Ride";
      icon = <i className="fas fa-bicycle"></i>;
    } else if (activity && activity.sport === 'run') {
      sport = "Run";
      icon = <i className="fas fa-walking"></i>;
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
      time = <p>{activity.time.slice(11, 16)}</p>;
      time = <p>at&nbsp;{timeConvert(activity.time.slice(11, 16))}</p>;
    }

    let date = new Date(activity.date).toDateString();

    return (
      <li>
        <div id="feed-item-div" className={css(styles.zoomIn)}>
          <div id="user-div">
            {/* <i className="fas fa-user"></i> */}
            <div id="feed-avatar-image"></div>
            <div>
              <h3 id="feed-user-name">
                {this.props.user.firstName}&nbsp;{this.props.user.lastName}
              </h3>
              <div id="feed-timestamp">{date}&nbsp;{time}</div>
            </div>
          </div>
          <div id="feed-activity-icon">
            {icon}

            <ul id="feed-item-top">
              <li>
                <div id="show-title-div">
                  <div id="activity-title"><p>{title}</p></div>
                </div>
              </li>
              <li>
                <div id="feed-stats-div" >
                  <div>{activity.distance} mi. <p>Distance</p></div>
                  <div>{activity.elevation} ft. <p>Elevation Gain</p></div>
                  {duration}
                </div>
              </li>
            </ul>
          </div>

          <ul className="show-bottom-info">
            <li><div id="show-image-container">{routeImage}</div></li>
          </ul>
        </div>
      </li>
    );
  }
}


export default FeedItem;
