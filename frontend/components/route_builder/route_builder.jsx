import React from 'react';
import { Link } from 'react-router-dom';
import { mapOptions } from '../../util/map_options';

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
    this.markersArray = [];
    this.ignoreClicks = false;
    this.distanceDelta = 0;
    this.elevationGain = 0;
    this.undoneClicks = [];
    this.undoneWaypoints = [];

    this.state = {
      searchQuery: "",
      totalDistance: 0,
      elevationGain: 0,
    };

    this.recenterMap = this.recenterMap.bind(this);
    this.clearRoute = this.clearRoute.bind(this);
    this.undoRouteLeg = this.undoRouteLeg.bind(this);
    this.redoRouteLeg = this.redoRouteLeg.bind(this);
  }
  
  componentDidMount () {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.directionsService = new google.maps.DirectionsService;
    this.directionsDisplay = new google.maps.DirectionsRenderer;
    this.geocoder = new google.maps.Geocoder;
    this.elevator = new google.maps.ElevationService;
    this.directionsDisplay.setMap(this.map);
    this.registerListeners();
  }

  calculateElevation (path, setState = true) {
    this.elevator.getElevationAlongPath({
      'path': path,
      'samples': 9
    }, (elevations, status) => {
      let elevationDelta = 0;
      this.elevationGain = 0;
      if (status === 'OK') {
        for (let i = 0; i < elevations.length - 1; i++) {
          if (elevations[i + 1].elevation > elevations[i].elevation) {
            elevationDelta = (elevations[i + 1].elevation - elevations[i].elevation);
            this.elevationGain += elevationDelta;
          }
        }
        if (setState) {
          this.setState({ 
            elevationGain: this.state.elevationGain + this.elevationGain 
          });
        }
      } else {
        this.ignoreClicks = true;
        window.alert('An elevation request error returned due to ' + status);
      }
    });
  }

  calculateRoute (start, end, setState = true) {
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

    this.directionsService.route(request, (response, status) => {
      if (status === 'OK') {
        console.log(response);
        const lastLeg = response.routes[0].legs[this.waypoints.length - 1];
        const lastLegPath = [lastLeg.start_location, lastLeg.end_location];
        this.distanceDelta = lastLeg.distance.value;
        this.calculateElevation(lastLegPath, setState);
        if (setState) {
          this.setState({ 
            totalDistance: this.state.totalDistance += lastLeg.distance.value
          });
        }
        this.directionsDisplay.setDirections(response);
      } else {
        this.ignoreClicks = true;
        window.alert('Directions failed to load due to ' + status);
      }
    });
  }

  registerListeners () {
    google.maps.event.addListener(this.map, 'click', (event) => {
      const coords = getCoordsObj(event.latLng);
      this.clicks.push(coords);
      
      if (this.origin === undefined) {
        this.directionsDisplay.setMap(this.map);
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

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  recenterMap() {
    this.geocoder.geocode({ address: this.state.searchQuery }, (result, status) => {
      if (status === 'OK') {
        const newCenter = result[0].geometry.location;
        this.map.setCenter(newCenter);
        this.setState({ searchQuery: "" });
      } else {
        window.alert('Search was unsuccessful due to: ' + status);
      }
    });
  }

  undoRouteLeg () {
    
    if (this.clicks.length > 2) {
      this.undoneClicks.push(this.clicks.pop());
      this.undoneWaypoints.push(this.waypoints.pop());
      const newDistance = this.state.totalDistance - this.distanceDelta;
      const newElevation = this.state.elevationGain - this.elevationGain;
      
      this.calculateRoute(this.origin, this.clicks[this.clicks.length - 1], false);
  
      this.setState({
        totalDistance: newDistance,
        elevationGain: newElevation
      });
    } else if (this.clicks.length === 2) {
      this.undoneClicks.push(this.clicks.pop());
      this.undoneWaypoints.push(this.waypoints.pop());
      this.setState({
        totalDistance: 0,
        elevationGain: 0
      });
      this.directionsDisplay.set('directions', null);
    } 
  }

  redoRouteLeg () {
    if (this.undoneClicks.length > 0) {
      this.clicks.push(this.undoneClicks.pop());
      this.waypoints.push(this.undoneWaypoints.pop());

      this.calculateRoute(this.origin, this.clicks[this.clicks.length - 1]);
    }
  }

  clearRoute() {
    this.clicks = [];
    this.waypoints = [];
    for (let i = 0; i < this.markersArray.length; i++) {
      this.markersArray[i].setMap(null);
    }
    this.markersArray = [];
    this.origin = undefined;
    this.setState({
      totalDistance: 0,
      elevationGain: 0
    });
    this.directionsDisplay.set('directions', null);
  }

  render () {
    const distance = Number((this.state.totalDistance * 0.0006).toFixed(2));
    const elevation = Number((this.state.elevationGain * 3.28).toFixed(2));
    
    return (
      <div id="route-builder-container">
        <div id="route-builder-header">
          <Link to="/dashboard"><h1>TRACER</h1></Link>
          <Link to="/dashboard"><p>Exit Route Builder</p></Link>
        </div>
        <div id="map-controls">
          <div id="map-search">
            <form onSubmit={this.recenterMap}>
              <input id="search-bar" type="text" onChange={this.update('searchQuery')} value={this.state.searchQuery} placeholder="Search a City, Address, or Place" />
              <button id="recenter-button" onClick={this.recenterMap}><i className="fas fa-search"></i></button>
            </form>
          </div>
          <div id="route-controls">
            <button onClick={this.undoRouteLeg}><p>undo</p><i className="fas fa-undo"></i></button>
            <button onClick={this.redoRouteLeg}><p>redo</p><i className="fas fa-redo"></i></button>
            <button onClick={this.clearRoute}><p>clear</p><i className="fas fa-times"></i></button>
          </div>
          <div id="route-sport">
            <button><p>Ride</p><i className="fas fa-bicycle"></i></button>
            <button><p>Run</p><i className="fas fa-walking"></i></button>
          </div>
          <div>
            <button id="route-save-button">Save</button>
          </div>
        </div>
        <div id="map-container" ref="map">
        </div>
        <div id="route-stats-bar">
          <ul>
            <li>
              Distance: {distance} miles
            </li>
            <li>
              Elevation: {elevation} feet
            </li>
          </ul>
        </div>
      </div>
    );
  }

}

export default RouteBuilder;