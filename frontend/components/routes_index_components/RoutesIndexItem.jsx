import React from 'react';
import { imageUrlBuilder } from '../../util/static_map_url';
import { StyleSheet, css } from 'aphrodite';
import { fadeIn } from 'react-animations';
import {
  convertDistanceToMiles,
  convertElevationToFeet
} from '../../util/conversions';

const styles = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: '0.5s'
  }
});

function formatDateCreated(createdAt) {
  return new Date(createdAt).toDateString();
}

const RoutesIndexItem = (props) => {
  const { route } = props;
  const {
    title,
    description,
    createdAt,
    polylineString,
    origin,
    destination,
    distance,
    elevation
  } = route;

  return (
    <li id="routes-index-item" className={css(styles.fadeIn)}>
      <div>
        <ul>
          <img
            id="route-image"
            src={imageUrlBuilder(polylineString, origin, destination, 'small')}
            alt=""
          />
          <li><h3>{title}</h3></li>
          <li id="route-description">{description}</li>
          <ul className="distance-elevation">
            <li id="route-distance">
              {`${convertDistanceToMiles(distance)} mi`}<p>Distance</p>
            </li>
            <li id="route-elevation">
              {`${convertElevationToFeet(elevation)} ft`}<p>Elevation Gain</p>
            </li>
          </ul>
          <li id="date-created">Created on: {formatDateCreated(createdAt)}</li>
        </ul>
      </div>
    </li>
  );
};

export default RoutesIndexItem;
