import React from 'react';
import { Link } from 'react-router-dom';
import FeedItem from './feed_item';
import { Placeholder } from './dashboard_placeholder';
import { StyleSheet, css } from 'aphrodite';
import { fadeIn, fadeOut } from 'react-animations';
import StatsSidebar from './stats_sidebar';

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
      const today = new Date();
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

    } else {
      var noActivities = <Placeholder />;
    }

    return (
      <div id="dashboard">
        {/* <Link to="/routebuilder">
          <div className="route-builder-link">
            Build a new route
          </div>        
        </Link> */}
        <div id="stats-sidebar">

          <StatsSidebar 
            user={this.props.user}
            routes={this.props.routes} 
            activities={this.props.activities} />
          <div id="periodic-stats">
            This week's stats:
          </div>
        </div>
        <div id="activity-feed">
          <ul>
            {activities ? activities : noActivities}
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