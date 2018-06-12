import React from 'react';


class ActivitiesIndex extends React.Component {
  constructor (props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount () {
    this.props.getAllActivites();
  }

  render () {
    return (
      <div>
        
      </div>
    );
  }
}

export default ActivitiesIndex;