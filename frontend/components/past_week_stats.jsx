import React from 'react';

class PastWeekStats extends React.Component {

  render () {
    const sevenDays = 604800000; // milliseconds
    let today = new Date();
    let weekAgo = new Date(Math.abs(today - sevenDays));
    const pastWeekActivities = [];

    this.props.activities.forEach(activity => {
      let activityDate = new Date(activity.date);
      if (activityDate >= weekAgo && activityDate <= today) {
        pastWeekActivities.push(activity);
      } 
    });

    let overallStats = {
      distance: 0,
      duration: 0,
      elevation: 0
    };

    let rideStats = {
      distance: 0,
      duration: 0,
      elevation: 0,
    };

    let runStats = {
      distance: 0,
      duration: 0,
      elevation: 0,
    };

    pastWeekActivities.forEach(recentActivity => {
      overallStats.distance += recentActivity.distance;
      overallStats.duration += recentActivity.duration;
      overallStats.elevation += recentActivity.elevation;
      if (recentActivity.sport === 'bike') {
        rideStats.distance += recentActivity.distance;
        rideStats.duration += recentActivity.duration;
        rideStats.elevation += recentActivity.elevation;
      }
      if (recentActivity.sport === 'run') {
        runStats.distance += recentActivity.distance;
        runStats.duration += recentActivity.duration;
        runStats.elevation += recentActivity.elevation;
      }
    });
    
    let overallDuration = new Date(null);
    overallDuration.setHours(0);
    overallDuration.setSeconds(overallStats.duration);
    overallDuration = overallDuration.toTimeString().slice(0, 8);

    let ridesDuration = new Date(null);
    ridesDuration.setHours(0);
    ridesDuration.setSeconds(rideStats.duration);
    ridesDuration = ridesDuration.toTimeString().slice(0, 8);

    let runsDuration = new Date(null);
    runsDuration.setHours(0);
    runsDuration.setSeconds(runStats.duration);
    runsDuration = runsDuration.toTimeString().slice(0, 8);

   

    return (
      <div id="weeks-stats">
          <h2>THIS WEEK</h2>
          <h3>OVERALL</h3>
          <p>{Number(overallStats.distance).toFixed(1)} mi. covered</p>
        <ul>
          <li><p>Moving Time</p>{overallDuration}</li>
          <li><p>Elevation Gained</p>{overallStats.elevation} ft.</li>
        </ul>
        <h3><i className="fas fa-bicycle"></i></h3>
          <p>{Number(rideStats.distance).toFixed(1)} mi. covered</p>
        <ul>
          <li><p>Moving Time</p>{ridesDuration}</li>
          <li><p>Elevation Gained</p>{rideStats.elevation} ft.</li>
        </ul>
          <h3><i className="fas fa-walking"></i></h3>
          <p>{Number(runStats.distance).toFixed(1)} mi. covered</p>
        <ul>
          <li><p>Moving Time</p>{runsDuration}</li>
          <li><p>Elevation Gained</p>{runStats.elevation} ft.</li>
        </ul>
      </div>
    );
  }
}

export default PastWeekStats;