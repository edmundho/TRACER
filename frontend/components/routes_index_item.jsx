import React from 'react';
import { imageUrlBuilder } from '../util/static_map_url';
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
    const distance = Number((this.props.route.distance * 0.0006).toFixed(2));
    const elevation = Number((this.props.route.elevation * 3.28).toFixed());
    let description;
    if (this.props.route.description) {
      description = this.props.route.description;
    } 
    const dateCreated = new Date(this.props.route.createdAt).toDateString();

    return (
      <li id="routes-index-item" className={css(styles.fadeIn)}>
        <div>
          <ul>
            <img id="route-image" 
              src={imageUrlBuilder(
                this.props.route.polylineString, 
                this.props.route.origin, 
                this.props.route.destination, 
                'small')} alt=""/>
            <li><h3>{this.props.route.title}</h3></li>
            <li id="route-description">{description}</li>
            <ul className="distance-elevation">
              <li id="route-distance">{distance} mi<p>Distance</p></li>
              <li id="route-elevation">{elevation} ft<p>Elevation Gain</p></li>
            </ul>
            <li id="date-created">Created on: {dateCreated}</li>
          </ul>
        </div>
      </li>
    );
  }
}

export default RoutesIndexItem;