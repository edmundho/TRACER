import React from 'react';

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

class RouteBuilder extends React.Component {

  constructor (props) {
    super(props);
    this.waypoints = [];
    this.clicks = [];
    this.route = undefined;
    this.origin = undefined;
  }
  
  componentDidMount () {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.directionsService = new google.maps.DirectionsService;
    this.directionsDisplay = new google.maps.DirectionsRenderer();
    this.directionsDisplay.setMap(this.map);
    this.registerListeners();
  }

  calculateRoute (start, end) {
    // method taken from https://developers.google.com/maps/documentation/javascript/examples/event-poi
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
        console.log(request);
        console.log(response);
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  drawRoute (directionResultObject) {
    this.directionsDisplay.setDirections(directionResultObject);
  }

  // method inspired by bench bnb solutions
  registerListeners () {
    google.maps.event.addListener(this.map, 'click', (event) => {
      const coords = getCoordsObj(event.latLng);
      console.log(coords);
      if (this.origin === undefined) {
        this.origin = coords;
      }
      const marker = new google.maps.Marker({
        position: this.origin,
      });
      if (this.waypoints.length < 1) {
        marker.setMap(this.map);
      } else {
        marker.setMap(null);
      }
      if (this.clicks.length >= 1) {
        this.waypoints.push({ location: coords, stopover: true });
      }
      this.clicks.push(coords);
      if (this.clicks.length > 1) {
        this.calculateRoute(this.origin, coords);
        marker.setMap(null);
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