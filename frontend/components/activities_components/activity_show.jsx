import React from 'react';

class ActivityShow extends React.Component {
  constructor (props) {
    super(props);

    const id = this.props.match.params.activityId;
  }

  render () {
    return (
      <div id="activity-show-page">
        SHOWING{this.id}
      </div>
    );
  }
}

export default ActivityShow;