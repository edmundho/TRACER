import React from 'react';

class RoutesIndexItem extends React.Component {
  constructor (props) {
    super(props);

    this.imageUrlBuilder = this.imageUrlBuilder.bind(this);

  }

  imageUrlBuilder () {
    const url = `https://maps.googleapis.com/maps/api/staticmap?size=300x200&scale=2&`;
    const polyline = this.props.route.polylineString;
    const path = `path=color:red%7Cenc:${polyline}`;
    return (url + path);
  }

  render () {
    const distance = Number((this.props.route.distance * 0.0006).toFixed(2));
    const elevation = Number((this.props.route.elevation * 3.28).toFixed());
    let description;
    if (this.props.route.description) {
      description = this.props.route.description;
    } 
    const dateCreated = new Date(this.props.route.createdAt).toDateString();

    return (
      <div className="routes-index-item">
        <ul>
          <img id="route-image" src={this.imageUrlBuilder()} alt=""/>
          <li><h3>{this.props.route.title}</h3></li>
          <li id="route-description">{description}</li>
          <ul className="distance-elevation">
            <li id="route-distance">{distance} mi<p>Distance</p></li>
            <li id="route-elevation">{elevation} ft<p>Elevation Gain</p></li>
          </ul>
          <li id="date-created">Created on: {dateCreated}</li>
        </ul>
      </div>
    );
  }
}

export default RoutesIndexItem;