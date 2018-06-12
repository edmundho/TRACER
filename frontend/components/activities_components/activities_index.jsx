import React from 'react';
import ActivitiesIndexItem from './activities_index_item';

class ActivitiesIndex extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      title: "",
      sport: "",
      date: "",
      duration: "",
      distance: "",
      elevation: "",
      description: "",
    };
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  componentDidMount () {
    this.props.getAllActivities();
  }

  render () {
    console.log(this.props.activities);
    const activities = Object.values(this.props.activities).map(activity => {
      return <ActivitiesIndexItem key={activity.id} activity={activity} />;
    });

    return (
      <div id="activities-index">
        <header>
          <h1>My Activities</h1>
        </header>
        <form id="new-activity-form" onSubmit={this.handleSubmit}>
          <label>Title<input type="text" /></label>
          <label>Sport
            <select name="" id="">
              <option value="ride">Ride</option>
              <option value="run">Run</option>
            </select>
          </label>
          <label>Date <input type="date" /></label>
          <label>Duration <input type="time" /></label>
          <label>Distance <input type="number" /></label>
          <label>Elevation <input type="number" /></label>
          <label>Description
            <textarea id="" placeholder="Description"></textarea>
          </label>
          <input type="submit"/>
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