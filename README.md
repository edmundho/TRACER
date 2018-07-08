# TRACER

[Visit the Live Site!](https://tracer-tracker.herokuapp.com/#/)

## Overview
Track your cycling & running activities with the TRACER tracker app! Create your own routes from the built-in Route Builder feature. Log and view your activity data on the dashboard sidebar and feed. 

## Technologies Utilized
* User authentication
  * BCrypt
* Back-end
  * Ruby on Rails
  * PostgreSQL
* Front-end
  * React
  * Redux
  * Google Maps API

## Features

Users can...
* Create their own cycling and running routes in a built-in Google map, and save them for future use.

![tracer](https://github.com/edmundho/TRACER/blob/master/app/assets/images/readme_demo.gif?raw=true)

* Log workouts (activities) with or without reference to a previously created route.
* View past activities in their dashboard's activity feed.
* View activity stats in the sidebar of their dashboard.

### Route Builder Dynamically Updates Route Distance and Elevation Gain

The Directions Service request below allows for the route builder to dynamically update the distance and elevation gain of the route in the route stats bar.
```javascript
    this.directionsService.route(request, (response, status) => {
      if (status === 'OK') {
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
      }
    }
```

## Future Plans

Moving forward, I plan to implement...
* A 'Friends' feature so that users can follow their friends and view their friends' activities in the feed.
* Workout 'Comments' for friends to comment on each other's activities.
* Functionality that allows user to upload images to individual activities.