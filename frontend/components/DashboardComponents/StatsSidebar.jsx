import React from 'react';
import { Link } from 'react-router-dom';

export default function StatsSidebar({ user, activities }) {
  const activitiesArray = activities;
  let rides = activities.filter(a => a.sport === 'bike').length;
  let runs =  activities.filter(a => a.sport === 'run').length;

  let title, date, lastActivityId;
  if (activities.length > 0) {
    const lastActivity = activities[0];
    title = lastActivity.title;
    date = new Date(lastActivity.date);
    date = date.toDateString();
    lastActivityId = lastActivity.id;
  }

  return (
    <div id="left-sidebar">
      <div id="avatar-image"></div>
      <h3>{`${user.firstName} ${user.lastName}`}</h3>
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
            <strong>{title}</strong>&nbsp;&bull;&nbsp;{date}
          </Link>
        </div>
        <div id="your-training-log">
          <Link to="/activities">
            <div>
              <p>Your Training Log</p>
              <p id="right-carat">&#x276F;</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
