import React from 'react';
import ActivitiesIndexItem from './ActivitiesIndexItem';
import RoutesDropdown from './routes_dropdown';
import { Link } from 'react-router-dom';
import {
  convertDistanceToMiles,
  convertElevationToFeet
} from '../../util/conversions';

const currentTime = new Date();

const defaultState = {
  title: "",
  sport: "bike",
  date: "",
  time: currentTime.toTimeString().slice(0,5),
  duration: "",
  distance: "",
  elevation: "",
  description: "",
  hours: 0,
  minutes: 0,
  seconds: 0,
};

class ActivitiesIndex extends React.Component {
  constructor (props) {
    super(props);

    this.route = false;

    this.state = {
      title: "",
      sport: "bike",
      date: "",
      time: currentTime.toTimeString().slice(0,5),
      hours: 0,
      minutes: 0,
      seconds: 0,
      distance: "",
      elevation: "",
      description: "",
      routeId: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.showForm = this.showForm.bind(this);
    this.update = this.update.bind(this);
  }

  update (field) {
    return (e) => {
      let matchingRoute = this.dropdownRoutes.find(route => route.id == e.target.value );
      const distance = matchingRoute && convertDistanceToMiles(matchingRoute.distance);
      const elevation = matchingRoute && convertElevationToFeet(matchingRoute.elevation);
      if (distance && elevation) {
        this.setState({
          [field]: e.target.value,
          distance: distance,
          elevation: elevation
        });
      } else {
        this.setState({ [field]: e.target.value });
      }
    };

  }

  componentDidMount () {
    this.props.getAllActivities();
    this.props.getAllRoutes();

    if (this.props.showForm) {
      $('#new-activity-form').removeClass('hidden');
      $('#active-new-activity-button').removeClass('hidden');
      $('#new-activity-button').addClass('hidden');
    }

    let timeOfDay;
    let hourNow = new Date().getHours();
    if (hourNow < 12) {
      timeOfDay = 'Morning';
    } else if (hourNow < 17) {
      timeOfDay = 'Afternoon';
    } else { timeOfDay = 'Evening'; }

    if (this.state.sport === 'bike') {
      this.setState({ title: `${timeOfDay} Ride` });
    } else if (this.state.sport === 'run') {
      this.setState({ title: `${timeOfDay} Run` });
    }

  }

  handleSubmit (e) {
    let duration = this.handleDuration();
    let distance;
    if (this.state.distance < 0) {
      distance = 0;
    } else { distance = this.state.distance; }
    let elevation;
    if (this.state.elevation < 0) {
      elevation = 0;
    } else { elevation = this.state.elevation; }

    e.preventDefault();
    const newActivity = {
      title: this.state.title,
      sport: this.state.sport,
      time: this.state.time,
      date: this.state.date,
      distance: distance,
      elevation: elevation,
      description: this.state.description,
      duration: duration,
      routeId: this.state.routeId
    };

    // console.log(newActivity.date);

    this.props.postNewActivity(newActivity).then(response => {
      const activityId = response.activity.id;
      this.props.history.push(`/activities/${activityId}`);
      this.setState(defaultState);
    });
  }

  closeForm (e) {
    e.preventDefault();
    $('#new-activity-form').addClass('hidden');
    $('#active-new-activity-button').addClass('hidden');
    $('#new-activity-button').removeClass('hidden');
    document.getElementById("activity-date-input").className = "";document.getElementById("activity-title-input").className = '';
    document.getElementById("activity-date-input-error").innerText = "";
    document.getElementById("activity-title-input-error").innerText = "";
    this.props.clearErrors();
    this.setState(defaultState);
  }

  showForm () {
    this.props.getAllRoutes();

    $('#new-activity-form').removeClass('hidden');
    $('#active-new-activity-button').removeClass('hidden');
    $('#new-activity-button').addClass('hidden');
  }

  handleDuration () {
    let hours = this.state.hours;
    let minutes = this.state.minutes;
    let seconds = this.state.seconds;

    return (hours * 3600 + minutes * 60 + seconds);
  }

  highlightIncorrectInputs (errors) {
    const activityDateEl = document.getElementById("activity-date-input");
    const activityTitleEl = document.getElementById("activity-title-input");
    if (errors.includes("Date can't be blank")) {
      const activityDateErrorEl = document.getElementById("activity-date-input-error");
      activityDateEl.className = 'activity-date-input-error';
      activityDateErrorEl.innerText = 'Required';
    }
    if (errors.includes("Title can't be blank")) {
      const activityTitleErrorEl = document.getElementById("activity-title-input-error");
      activityTitleEl.className = 'activity-title-input-error';
      activityTitleErrorEl.innerText = 'Required';
    }
  }

  componentWillUnmount () {
    this.props.hideActivityForm();
  }

  render () {
    const errors = this.props.errors;
    this.highlightIncorrectInputs(errors);

    let dropdownRoutes;
    if (this.state.sport === 'bike') {
      dropdownRoutes = this.props.cyclingRoutes;
      this.dropdownRoutes = dropdownRoutes;
    } else if (this.state.sport === 'run') {
      dropdownRoutes = this.props.runningRoutes;
      this.dropdownRoutes = dropdownRoutes;
    }

    const activities = Object.values(this.props.activities).map(activity => {
      return (
        <ActivitiesIndexItem
          key={activity.id}
          activity={activity}
          deleteActivity={this.props.destroyActivity}
          route={this.props.routes[activity.routeId]} />
      );
    });

    return (
      <div id="activities-index">
        <header>
          <h1>My Activities</h1>
          <div id="activity-button-container" >
            <button id="new-activity-button" onClick={this.showForm} >Log New Activity</button>
            <button id="active-new-activity-button"
              className="hidden"
              onClick={this.closeForm} >Log New Activity</button>
            <div id="activity-index-buttons">
              <h2>- OR -</h2>
              <Link to="/routebuilder">Create New Route</Link>
            </div>
          </div>

        </header>
        <form id="new-activity-form" className="hidden" onSubmit={this.handleSubmit}>
          <div id="activity-form-row-3">
            <label>Sport
            <select onChange={this.update('sport')}>
                <option value="bike">Ride</option>
                <option value="run">Run</option>
              </select>
            </label>
            <label>Known Route Taken?
              <RoutesDropdown
                update={this.update}
                routes={dropdownRoutes} />
            </label>
          </div>
          <div id="activity-form-row-1">
            <label>Distance
              <div id="distance-elevation-divs">
                <input
                  type="number" min="0" step="0.01"
                  onChange={this.update('distance')}
                  value={this.state.distance} />
                  <p>mi.</p>
              </div>
            </label>
            <label id="duration-label">Duration
              <div id="duration-input">
                <input type="number" min="0"
                  onChange={this.update('hours')}
                  value={this.state.hours} />
                <p>hr</p>
                <input type="number" min="0"
                  onChange={this.update('minutes')}
                  value={this.state.minutes} />
                <p>min</p>
                <input type="number" min="0"
                  onChange={this.update('seconds')}
                  value={this.state.seconds} />
                <p>s</p>
              </div>
            </label>
            <label>Elevation
              <div id="distance-elevation-divs">
                <input
                  type="number" min="0"
                  onChange={this.update('elevation')}
                  value={this.state.elevation} />
                  <p>ft.</p>
              </div>
            </label>
          </div>
          <div id="activity-form-row-2">
            <label>Date
              <input id="activity-date-input"
                type="date"
                onChange={this.update('date')}
                value={this.state.date}/>
                <p id="activity-date-input-error"></p>
            </label>
            <label>Time
              <input id="activity-time-input"
                type="time"
                onChange={this.update('time')}
                value={this.state.time}/></label>
          </div>
          <label id="activity-title-form">Title
              <input
                id="activity-title-input"
                type="text"
                onChange={this.update('title')}
                value={this.state.title} /></label>
                <p id="activity-title-input-error"></p>
          <div id="activity-description">
            <label>Description
              <textarea id=""
                placeholder="How did it go? Were you tired or rested? How was the weather?"
                onChange={this.update('description')} value={this.state.description}>
              </textarea>
            </label>
          </div>
          <div id="close-form-buttons">
            <input id="activity-submit-button" type="submit" value="Create"/>
            <button
              id="cancel-new-activity"
              onClick={this.closeForm}>Cancel</button>
          </div>
        </form>
        <h2>{activities.length} activities</h2>
        <table id="activities-list-table" cellSpacing="0" cellPadding="5">
          <tbody>
            <tr>
              <th>Sport</th>
              <th>Date</th>
              <th>Title</th>
              <th>Duration</th>
              <th>Distance</th>
              <th>Elevation Gain</th>
              <th>Route Taken</th>
              <th> </th>
            </tr>
            {activities}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ActivitiesIndex;