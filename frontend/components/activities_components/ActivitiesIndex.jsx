import React, { useEffect } from 'react';
import ActivitiesIndexItem from './ActivitiesIndexItem';
import { Link } from 'react-router-dom';
import NewActivityForm from './NewActivityForm';

// export default function ActivitiesIndex(props) {
//   useEffect(() => {

//   }, [])
// }

class ActivitiesIndex extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      sport: "bike"
    };

    this.closeForm = this.closeForm.bind(this);
    this.showForm = this.showForm.bind(this);
    this.update = this.update.bind(this);
  }

  update (field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  componentDidMount () {
    this.props.getAllActivities();
    this.props.getAllRoutes();
  }

  closeForm (e) {
    this.props.hideActivityForm();
  }

  showForm () {
    this.props.showActivityForm();
  }

  componentWillUnmount () {
    this.props.hideActivityForm();
  }

  render () {
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
          <div id="activity-button-container" >{
            this.props.showForm
              ? <button id="active-new-activity-button" onClick={this.closeForm}>Log New Activity</button>
              : <button id="new-activity-button" onClick={this.showForm}>Log New Activity</button>
            }
            <div id="activity-index-buttons">
              <h2>- OR -</h2>
              <Link to="/routebuilder">Create New Route</Link>
            </div>
          </div>

        </header>
        {this.props.showForm && <NewActivityForm
          sport={this.state.sport}
          setSport={this.update}
          dropdownRoutes={this.dropdownRoutes}
          postNewActivity={this.props.postNewActivity}
          closeForm={this.closeForm}
          errors={this.props.errors}
        />}
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