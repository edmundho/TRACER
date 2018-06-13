import React from 'react';

class ActivityShow extends React.Component {
  constructor (props) {
    super(props);

  }

  componentDidMount () {
    this.props.getActivity(this.props.activityId);
  }

  render () {
    const activity = this.props.activity;
    console.log(activity);
    
    return (
      <div id="activity-show-page">
        SHOWING{this.props.activityId}
      </div>
    );
  }
}

export default ActivityShow;