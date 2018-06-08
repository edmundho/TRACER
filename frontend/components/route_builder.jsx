import React from 'react';
// import mapOptions from '../util/map_util.js';

const mapOptions = {
  // SF
  center: {
    lat: 37.78,
    lng: -122.42
  },
  zoom: 14,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  styles: [
    {
      "featureType": "poi.place_of_worship",
      "stylers": [{
        "visibility": "off"
      }]
    },
    {
      "featureType": "poi.sports_complex",
      "stylers": [{ "visibility": "off" }]
    },
    {
      "featureType": "poi.medical",
      "stylers": [{ "visibility": "off" }]
    },
    {
      "featureType": "poi.government",
      "stylers": [{ "visibility": "off" }]
    },
    {
      "featureType": "poi.business",
      "stylers": [{ "visibility": "off" }]
    },
    {
      "featureType": "poi.school",
      "stylers": [{ "visibility": "off" }]
    },
    {
      "featureType": "poi.attraction",
      "stylers": [{ "visibility": "off" }]
    },

  ]
};

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

const starting = { lat: 37.795940189124806, lng: -122.41733924865724 };
const ending = { lat: 37.777896994949145, lng: -122.42506401062013 };

class RouteBuilder extends React.Component {

  constructor (props) {
    super(props);
    this.clicks = [];
    this.waypoints = [];
    this.route = [];
    this.calculateAndDisplayRoute = this.calculateAndDisplayRoute.bind(this);
  }
  
  componentDidMount () {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.directionsService = new google.maps.DirectionsService;
    this.directionsDisplay = new google.maps.DirectionsRenderer();
    this.directionsDisplay.setMap(this.map);
    this.registerListeners();
  }

  calculateAndDisplayRoute (start, end) {
    // method taken from https://developers.google.com/maps/documentation/javascript/examples/event-poi

    this.directionsService.route({
      origin: start,
      destination: end,
      // waypoints: this.waypoints,
      travelMode: 'WALKING'
    }, (response, status) => {
      if (status === 'OK') {
        console.log(response.geocoded_waypoints);
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  drawRoute(start, end) {

  }

  // method inspired by bench bnb solutions
  registerListeners () {
    google.maps.event.addListener(this.map, 'click', (event) => {
      const coords = getCoordsObj(event.latLng);
      // const waypoint = new google.maps.LatLng(coords.lat, coords.lng);
      // this.waypoints.push(waypoint);
      // console.log(waypoint);
      this.clicks.push(coords);
      let marker = new google.maps.Marker({
        position: coords,
        map: this.map,
        title: "TestMark"
      });
      if (this.clicks.length > 1) {
        this.calculateAndDisplayRoute(this.clicks[this.clicks.length - 2], coords);
        // this.calculateAndDisplayRoute(this.clicks[this.clicks.length - 2], coords);

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