import React from 'react';
import ActivitiesIndexItem from './activities_index_item';


class ActivitiesIndex extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      title: "",
      sport: "bike",
      date: "",
      duration: "",
      distance: "",
      elevation: "",
      description: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.showForm = this.showForm.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  componentDidMount () {
    this.props.getAllActivities();
  }

  handleSubmit (e) {
    e.preventDefault();
    
    this.props.postNewActivity(this.state).then(response => {
      this.setState({
        title: "",
        sport: "bike",
        date: "",
        duration: "",
        distance: "",
        elevation: "",
        description: "",
      });
    });
  }

  closeForm (e) {
    e.preventDefault();
    $('#new-activity-form').addClass('hidden');
    this.setState({
      title: "",
      sport: "bike",
      date: "",
      duration: "",
      distance: "",
      elevation: "",
      description: "",
    });
  }

  showForm () {
    let timeOfDay;
    let hourNow = new Date().getHours();
    if (hourNow < 12) {
      timeOfDay = 'Morning';
    } else if (hourNow < 17) {
      timeOfDay = 'Afternoon';
    } else { timeOfDay = 'Evening'; }
    console.log(timeOfDay);

    if (this.state.sport === 'bike') {
      this.setState({ title: `${timeOfDay} ride` });
    } else if (this.state.sport === 'run') {
      this.setState({ title: `${timeOfDay} run` });
    }

    $('#new-activity-form').removeClass('hidden');
  }

  render () {
    console.log(this.props.activities);
    // console.log(this.state);
    const activities = Object.values(this.props.activities).map(activity => {
      return <ActivitiesIndexItem key={activity.id} activity={activity} />;
    });

    return (
      <div id="activities-index">
        <header>
          <h1>My Activities</h1>
          <button id="new-activity-button" onClick={this.showForm} >Log New Activity</button>
        </header>
        <form id="new-activity-form" className="hidden" onSubmit={this.handleSubmit}>
          <div id="activity-form-row-1">
            <label>Duration 
              <input 
                type="text" 
                onChange={this.update('duration')} 
                value={this.state.duration}/></label>
            <label>Distance 
              <input 
                type="number" 
                onChange={this.update('distance')} 
                value={this.state.distance}/>mi.</label>
            <label>Elevation 
              <input 
                type="number" 
                onChange={this.update('elevation')} 
                value={this.state.elevation}/>ft.</label>
          </div>
          <div id="activity-form-row-2">
            <label>Title
              <input 
                type="text" 
                onChange={this.update('title')}
                value={this.state.title} /></label>
            <label>Sport
              <select id="" onChange={this.update('sport')}>
                <option value="bike">Ride</option>
                <option value="run">Run</option>
              </select>
            </label>
            <label>Date 
              <input 
                type="date" 
                onChange={this.update('date')} 
                value={this.state.date}/></label>
          </div>
          <div id="activity-description">
            <label>Description
              <textarea id="" placeholder="Description" onChange={this.update('description')} value={this.state.description}>
              </textarea>
            </label>
          </div>
          <div id="close-form-buttons">
            <input id="activity-submit-button" type="submit" value="Create"/>
            <button id="cancel-new-activity" onClick={this.closeForm}>Cancel</button>
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