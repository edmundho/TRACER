import React from 'react';
import ActivitiesIndexItem from './activities_index_item';
import RoutesDropdown from './routes_dropdown';

const defaultState = {
  title: "",
  sport: "bike",
  date: "",
  time: "19:00",
  duration: "",
  distance: "",
  elevation: "",
  description: "",
  hours: 0,
  minutes: 0,
  seconds: 0
};

class ActivitiesIndex extends React.Component {
  constructor (props) {
    super(props);

    this.route = false;

    this.state = {
      title: "",
      sport: "bike",
      date: "",
      time: "19:00",
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
    return (e) => this.setState({ [field]: e.target.value });
  }

  componentDidMount () {
    this.props.getAllActivities();
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
    
    this.props.postNewActivity(newActivity).then(response => {
      this.setState(defaultState);
    });
  }

  closeForm (e) {
    e.preventDefault();
    $('#new-activity-form').addClass('hidden');
    $('#active-new-activity-button').addClass('hidden');
    $('#new-activity-button').removeClass('hidden');
    this.setState(defaultState);
  }

  showForm () {
    this.props.getAllRoutes();
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

  // componentDidUpdate () {
  //   if (this.state.routeId.length > 0 && this.route) {
  //     let route = this.props.routes[this.state.routeId];
  //     const distance = Number((route.distance * 0.0006).toFixed(2));
  //     const elevation = Number((route.elevation * 3.28).toFixed());

  //     this.setState({
  //       distance: distance,
  //       elevation: elevation
  //     });
  //   } 
  // }


  render () {
    console.log(this.state);
    let dropdownRoutes;
    if (this.state.sport === 'bike') {
      dropdownRoutes = this.props.cyclingRoutes;
    } else if (this.state.sport === 'run') {
      dropdownRoutes = this.props.runningRoutes;
    }

    const activities = Object.values(this.props.activities).map(activity => {
      return (
        <ActivitiesIndexItem 
          key={activity.id} 
          activity={activity} 
          route={this.props.routes[activity.routeId]} />
      );
    });

    return (
      <div id="activities-index">
        <header>
          <h1>My Activities</h1>
          <button id="new-activity-button" onClick={this.showForm} >Log New Activity</button>
          <button id="active-new-activity-button" 
            className="hidden"
            onClick={this.closeForm} >Log New Activity</button>
        </header>
        <form id="new-activity-form" className="hidden" onSubmit={this.handleSubmit}>
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
                value={this.state.date}/></label>
            <label>Time 
              <input id="activity-time-input"
                type="time" 
                onChange={this.update('time')} 
                value={this.state.time}/></label>
          </div>
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
                routes={dropdownRoutes}/>
            </label>
          </div>
          <label id="activity-title">Title
              <input
                type="text"
                onChange={this.update('title')}
                value={this.state.title} /></label>
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
        <ul id="activities-list-columns">
          <li>Sport</li>
          <li>Date</li>
          <li>Title</li>
          <li>Time</li>
          <li>Duration</li>
          <li>Distance</li>
          <li>Elevation</li>
        </ul>
        <ul id="activities-list">
          <li>{activities}</li>
        </ul>
      </div>
    );
  }
}

export default ActivitiesIndex;