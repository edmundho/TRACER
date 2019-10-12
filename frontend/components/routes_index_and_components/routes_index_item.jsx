import React from 'react';
import { imageUrlBuilder } from '../../util/static_map_url';
import { StyleSheet, css } from 'aphrodite';
import { fadeIn } from 'react-animations';

const styles = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: '0.5s'
  }
});

class RoutesIndexItem extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { distance, elevation } = this.getDistanceAndElevation();
    const { title, description, createdAt, polylineString, origin, destination } = this.props.route;

    return (
      <li id="routes-index-item" className={css(styles.fadeIn)}>
        <div>
          <ul>
            <img id="route-image" 
              src={imageUrlBuilder(polylineString, origin, destination, 'small')} alt=""/>
            <li><h3>{title}</h3></li>
            <li id="route-description">{description}</li>
            <ul className="distance-elevation">
              <li id="route-distance">{distance} mi<p>Distance</p></li>
              <li id="route-elevation">{elevation} ft<p>Elevation Gain</p></li>
            </ul>
            <li id="date-created">Created on: {this.formatDateCreated(createdAt)}</li>
          </ul>
        </div>
      </li>
    );
  }

  formatDateCreated(createdAt) {
    return new Date(createdAt).toDateString();
  }

  formatElevation() {
    return Number((this.props.route.elevation * 3.28).toFixed());
  }

  formatDistance() {
    return Number((this.props.route.distance * 0.0006).toFixed(2));
  }

  getDistanceAndElevation() {
    return { distance: this.formatDistance(), elevation: this.formatElevation() };
  }
}

export default RoutesIndexItem;
