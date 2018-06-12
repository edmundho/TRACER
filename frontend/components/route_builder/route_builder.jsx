import React from 'react';
import { Link } from 'react-router-dom';
import { mapOptions } from '../../util/map_options';
import { StyleSheet, css } from 'aphrodite';
import { fadeIn, fadeOut } from 'react-animations';

const styles = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: '0.5s'
  },
  fadeOut: {
    animationName: fadeOut,
    animationDuration: '1s'
  }
});

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

class RouteBuilder extends React.Component {

  constructor (props) {
    super(props);
    this.waypoints = [];
    this.clicks = [];
    this.routePolyline = undefined;
    this.origin = undefined;
    this.markersArray = [];
    this.ignoreClicks = false;
    this.distanceDelta = 0;
    this.elevationGain = 0;
    this.undoneClicks = [];
    this.undoneWaypoints = [];

    this.state = {
      searchQuery: "",
      routeName: "",
      totalDistance: 0,
      elevationGain: 0,
      sport: "Ride",
      showModal: false,
      description: "",
    };

    this.recenterMap = this.recenterMap.bind(this);
    this.clearRoute = this.clearRoute.bind(this);
    this.undoRouteLeg = this.undoRouteLeg.bind(this);
    this.redoRouteLeg = this.redoRouteLeg.bind(this);
    this.setRide = this.setRide.bind(this);
    this.setRun = this.setRun.bind(this);
    this.openRouteForm = this.openRouteForm.bind(this);
    this.closeRouteForm = this.closeRouteForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount () {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.directionsService = new google.maps.DirectionsService;
    this.directionsDisplay = new google.maps.DirectionsRenderer({
      suppressBicyclingLayer: true,
      // draggable: true
    });
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
    let travelMode;
    if (this.state.sport === 'Ride') {
      travelMode = 'BICYCLING';
    } else if (this.state.sport === 'Run') {
      travelMode = 'WALKING';
    }

    let request;
    if (this.waypoints.length < 2) {
      request = {
        origin: this.origin,
        destination: end,
        travelMode: travelMode
      };
    } else {
      request = {
        origin: this.origin,
        destination: end,
        waypoints: this.waypoints.slice(0, this.waypoints.length - 1),
        travelMode: travelMode
      };
    }

    this.directionsService.route(request, (response, status) => {
      if (status === 'OK') {
        // console.log(response.routes[0]);
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
      document.getElementsByClassName("route-save-button")[0].id = "route-save-button-inactive";
      
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
        document.getElementsByClassName("route-save-button")[0].id = "route-save-button";
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
      document.getElementsByClassName("route-save-button")[0].id = "route-save-button-inactive";
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
    document.getElementsByClassName("route-save-button")[0].id = "route-save-button-inactive";
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

  setRun () {
    const runEl = document.getElementsByClassName('run-mode');
    const rideEl = document.getElementsByClassName('ride-mode');
    runEl[0].id = "run-mode";
    rideEl[0].id = "";
    this.setState({ 
      sport: "Run" 
    });
  }

  setRide () {
    const runEl = document.getElementsByClassName('run-mode');
    const rideEl = document.getElementsByClassName('ride-mode');
    runEl[0].id = "";
    rideEl[0].id = "ride-mode";
    this.setState({ sport: "Ride" });
  }

  openRouteForm () {
    if (this.clicks.length >= 2) {
      this.routePolyline = this.directionsDisplay.directions.routes[0].overview_polyline;
      const closedModalEl = document.getElementById('route-form-modal-hidden');
      closedModalEl.id = "route-form-modal";
      this.setState({
        showModal: true
      });
    }
  }

  closeRouteForm () {
    const openModalEl = document.getElementById('route-form-modal');
    openModalEl.id = "route-form-modal-hidden";
    this.props.clearRouteErrors();
    document.getElementById('route-name-input').className = "";
    document.getElementById('route-name-required').innerText = "";
    this.setState({
      showModal: false
    });
  }

  handleSubmit (e) {
    e.preventDefault();
    let routeSport;
    if (this.state.sport === 'Ride') {
      routeSport = 'bike';
    } else if (this.state.sport === 'Run') {
      routeSport = 'run';
    }

    const route = {
      title: this.state.routeName,
      description: this.state.description,
      sport: routeSport,
      elevation: this.state.elevationGain,
      distance: this.state.totalDistance,
      polylineString: this.routePolyline
    };

    this.props.postNewRoute(route)
      .then(() => this.props.history.push("/dashboard"),
      errors => console.log(errors)
    );
  }

  componentWillUnmount () {
    this.props.clearRouteErrors();
  }

  highlightIncorrectInputs (errors) {
    const routeNameEl = document.getElementById('route-name-required');
    if (errors.includes("Title can't be blank")) {
      const routeNameInputEl = document.getElementById('route-name-input');
      routeNameInputEl.className = 'route-name-input-with-errors';
      routeNameEl.innerText = "Required";
    }
  }

  render () {
    const errors = this.props.errors;
    this.highlightIncorrectInputs(errors);
    const distance = Number((this.state.totalDistance * 0.0006).toFixed(2));
    const elevation = Number((this.state.elevationGain * 3.28).toFixed());
    
    return (
      <div id="route-builder-container">
        <div id="route-builder-header">
          <Link to="/dashboard"><h1>TRACER</h1></Link>
          <Link to="/routes" id="exit-builder"><p>Exit Builder</p></Link>
        </div>
        <div id="map-controls">
          <div id="map-search">
            <form onSubmit={this.recenterMap}>
              <input 
                id="search-bar" 
                type="text" 
                onChange={this.update('searchQuery')} 
                value={this.state.searchQuery} 
                placeholder="Search a City, Address, or Place" />
              <button id="recenter-button" onClick={this.recenterMap}><i className="fas fa-search"></i></button>
            </form>
          </div>
          <div id="route-controls">
            <button onClick={this.undoRouteLeg}><p>undo</p><i className="fas fa-undo"></i></button>
            <button onClick={this.redoRouteLeg}><p>redo</p><i className="fas fa-redo"></i></button>
            <button onClick={this.clearRoute}><p>clear</p><i className="fas fa-times"></i></button>
          </div>
          <div id="route-sport">
            <button id="ride-mode" className="ride-mode" onClick={this.setRide}><p>Ride</p><i className="fas fa-bicycle"></i></button>
            <button className="run-mode" onClick={this.setRun}><p>Run</p><i className="fas fa-walking"></i></button>
          </div>
          <div id="route-controls-save">
            <button 
              id="route-save-button-inactive" 
              className="route-save-button" 
              onClick={this.openRouteForm}>Save</button>
          </div>
        </div>
        <div id="map-container" ref="map">
        </div>
        <div id="route-stats-bar">
          <ul>
            <li><p>{this.state.sport}</p>Route Type</li>
            <li><p>{distance} mi</p>Distance</li>
            <li><p>{elevation} ft</p>Elevation Gain</li>
          </ul>
        </div>
        <div id="route-form-modal-hidden" className={css(styles.fadeIn)}>
          <div id="route-form">
            <h1>Save</h1>
            <p>Enter a name and description for your route below. On the next page, you'll be able to </p>
            <form>
              <label>
                <h3>Route Name (required)</h3>
                <input 
                  id="route-name-input"
                  type="text" 
                  onChange={this.update('routeName')} 
                  value={this.state.routeName} />
                <p id="route-name-required"></p>
              </label>
              <label>
                <h3>Description</h3>
                <textarea onChange={this.update('description')} value={this.state.description} cols="30" rows="10"></textarea>
              </label>
            </form>
            <div id="route-form-buttons">
              <button id="route-form-cancel" onClick={this.closeRouteForm}>Cancel</button>
              <button id="route-form-save" onClick={this.handleSubmit}>Save</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default RouteBuilder;