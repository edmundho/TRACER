import React from 'react';
import { Link } from 'react-router-dom';
import FeedItem from './feed_item';
import { StyleSheet, css } from 'aphrodite';
import { fadeIn, fadeOut } from 'react-animations';

const styles = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: '0.5s'
  },
  fadeIn2: {
    animationName: fadeIn,
    animationDuration: '3s'
  }
});


class Dashboard extends React.Component {
  constructor (props) {
    super(props);

  }

  closeTooltip(e) {
    $('#new-user-tooltip').addClass('hidden');
    $('#close-dashboard-tooltip-x').addClass('hidden');
  }

  componentDidMount () {
    this.props.getAllActivities();
    this.props.getAllRoutes();
  }
 
  render () {
    if (this.props.activities.length > 0) {
      var activities = this.props.activities.map(activity => {
        if (activity.routeId) {
          let route = this.props.routes[activity.routeId];
          return <FeedItem key={activity.id}
          user={this.props.user}
          activity={activity}
          route={route} />;
        } else {
          return <FeedItem key={activity.id}
          user={this.props.user}
          activity={activity} />;
        }
      });
    } 
    const loading = <div>loading...</div>;

    return (
      <div id="dashboard">
        {/* <Link to="/routebuilder">
          <div className="route-builder-link">
            Build a new route
          </div>        
        </Link> */}
        <div id="left-sidebar">
          left sidebar
        </div>
        <div id="activity-feed">
          <ul>
            {activities ? activities : loading}
          </ul>
        </div>
        {/* <div id="new-user-tooltip" className={css(styles.fadeIn2)}>
          Click above to build a route!
        </div>
        <button id="close-dashboard-tooltip-x"
          className={css(styles.fadeIn2)}
          onClick={this.closeTooltip}>&times;</button> */}
      </div>
    );
  }
}

export default Dashboard;