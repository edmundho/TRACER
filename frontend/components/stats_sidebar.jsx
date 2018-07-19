import React from 'react';
import { Link } from 'react-router-dom';

class StatsSidebar extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const activitiesArray = this.props.activities;
    let rides = 0;
    let runs = 0;
    activitiesArray.forEach(activity => {
      if (activity.sport === 'bike') { rides += 1; }
      if (activity.sport === 'run') { runs += 1; }
    });

    let title, date, lastActivityId;
    if (activitiesArray.length > 0) {
      // const lastActivity = activitiesArray[activitiesArray.length - 1];
      const lastActivity = activitiesArray[0];
      title = lastActivity.title;
      date = new Date(lastActivity.date);
      date = date.toDateString();
      lastActivityId = lastActivity.id;
    }

    return (
      <div id="left-sidebar">
        <div id="avatar-image"></div>
        <h3>{`${this.props.user.firstName} ${this.props.user.lastName}`}</h3>
        <div>
          <Link to='/activities'>
            <ul>
              <li><p>Activities</p>{activitiesArray.length}</li>
              <li><p>Rides</p>{rides}</li>
              <li><p>Runs</p>{runs}</li>
            </ul>
          </Link>

          <div id="latest-activity">
            <p>Latest Activity</p>
            <Link to={`/activities/${lastActivityId}`}>
              <strong>{title}</strong>
              &nbsp;&bull;&nbsp;{date}</Link>
          </div>
          <div id="your-training-log">
            <Link to="/activities">
              <div><p>Your Training Log</p>
              <p id="right-carat">&#x276F;</p></div>
            </Link>
          </div>
        </div>
        
        
      </div>
    );
  }
}

export default StatsSidebar;