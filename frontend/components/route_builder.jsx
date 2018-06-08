import React from 'react';

import { mapOptions } from '../util/map_options';

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

class RouteBuilder extends React.Component {

  constructor (props) {
    super(props);
    this.waypoints = [];
    this.clicks = [];
    this.route = undefined;
    this.origin = undefined;
    this.totalDistance = 0;
    this.markersArray = [];
    this.ignoreClicks = false;
  }
  
  componentDidMount () {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.directionsService = new google.maps.DirectionsService;
    this.directionsDisplay = new google.maps.DirectionsRenderer();
    this.directionsDisplay.setMap(this.map);
    this.registerListeners();
  }

  calculateElevation (path, numLegs) {
    const elevator = new google.maps.ElevationService;
    elevator.getElevationAlongPath({
      'path': path,
      'samples': 9*numLegs
    }, (elevations, status) => {
      let elevationGain = 0;
      if (status === 'OK') {
        for (let i = 0; i < elevations.length - 1; i++) {
          if (elevations[i + 1].elevation > elevations[i].elevation) {
            elevationGain += (elevations[i + 1].elevation - elevations[i].elevation);
          }
        }
        console.log(elevationGain);
        // setState elevationGain here:
        return elevationGain;
      } else {
        this.ignoreClicks = true;
        window.alert('Elevation request failed due to ' + status);
      }
    });
  }

  calculateRoute (start, end) {
    let request;
    if (this.waypoints.length < 2) {
      request = {
        origin: this.origin,
        destination: end,
        travelMode: 'WALKING'
      };
    } else {
      request = {
        origin: this.origin,
        destination: end,
        waypoints: this.waypoints.slice(0, this.waypoints.length - 1),
        travelMode: 'WALKING'
      };
    }

    // console.log(this.clicks);
    // console.log(this.waypoints);
    
    this.directionsService.route(request, (response, status) => {
      if (status === 'OK') {
        // console.log(request);
        console.log(response);
        const lastLeg = response.routes[0].legs[this.waypoints.length - 1];
        // console.log(lastLeg);
        this.totalDistance += lastLeg.distance.value;
        // setState totalDistance here:
        console.log(this.totalDistance);
        const elevationGain = this.calculateElevation(this.clicks, this.waypoints.length);
        this.directionsDisplay.setDirections(response);
      } else {
        this.ignoreClicks = true;
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  registerListeners () {
    google.maps.event.addListener(this.map, 'click', (event) => {
      const coords = getCoordsObj(event.latLng);
      this.clicks.push(coords);
      
      if (this.origin === undefined) {
        this.origin = coords;
      }

      if (this.clicks.length === 1) {
        let marker = new google.maps.Marker({
          position: coords,
          animation: google.maps.Animation.DROP,
        });
        marker.setMap(this.map);
        this.markersArray.push(marker);
      }

      if (this.clicks.length > 1) {
        this.waypoints.push({ location: coords });
        this.markersArray[0].setMap(null);
        this.calculateRoute(this.origin, coords);
      }
    });
    
  }

  render () {
    return (
      <div id="map-container" ref="map">
      </div>
    );
  }

}

export default RouteBuilder;