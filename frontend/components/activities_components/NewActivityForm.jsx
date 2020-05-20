import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import RoutesDropdown from './RoutesDropdown';
import {
  convertDistanceToMiles,
  convertElevationToFeet
} from '../../util/conversions';

export default function NewActivityForm({
  dropdownRoutes,
  postNewActivity,
  closeForm,
  setSport,
  sport
}) {
  const [distance, setDistance] = useState('');
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [elevation, setElevation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState(new Date().toTimeString().slice(0,5));
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [routeId, setRouteId] = useState('');

  const setDistanceAndElevationFromDropdown = (e) => {
    const matchingRoute = dropdownRoutes.find(route => route.id == e.target.value );
    const distance = matchingRoute && convertDistanceToMiles(matchingRoute.distance);
    const elevation = matchingRoute && convertElevationToFeet(matchingRoute.elevation);

    if (distance && elevation) {
      setDistance(distance);
      setElevation(elevation);
    }
    setRouteId(e.target.value);
  }

  const history = useHistory();

  const submit = () => {
    const duration = hours * 3600 + minutes * 60 + seconds;

    const newActivity = {
      title,
      sport,
      time,
      date,
      distance,
      elevation,
      description,
      duration,
      routeId
    };

    postNewActivity(newActivity).then(response => {
      const activityId = response.activity.id;
      history.push(`/activities/${activityId}`);
    })
  }

  useEffect(() => {
    let timeOfDay;
    let hourNow = new Date().getHours();
    if (hourNow < 12) {
      timeOfDay = 'Morning';
    } else if (hourNow < 17) {
      timeOfDay = 'Afternoon';
    } else {
      timeOfDay = 'Evening';
    }

    if (sport === 'bike') {
      setTitle(`${timeOfDay} Ride`);
    } else if (sport === 'run') {
      setTitle(`${timeOfDay} Run`);
    }
  }, [sport])

  return (
    <form id="new-activity-form" onSubmit={submit}>
      <div id="activity-form-row-3">
        <label>
          Sport
          <select onChange={setSport('sport')}>
            <option value="bike">Ride</option>
            <option value="run">Run</option>
          </select>
        </label>
        <label>
          Known Route Taken?
          <RoutesDropdown
            update={setDistanceAndElevationFromDropdown}
            routes={dropdownRoutes} />
        </label>
      </div>
      <div id="activity-form-row-1">
        <label>
          Distance
          <div id="distance-elevation-divs">
            <input
              type="number" min="0" step="0.01"
              onChange={e => setDistance(e.target.value)}
              value={distance} />
              <p>mi.</p>
          </div>
        </label>
        <label id="duration-label">Duration
          <div id="duration-input">
            <input type="number" min="0"
              onChange={e => setHours(e.target.value)}
              value={hours} />
            <p>hr</p>
            <input type="number" min="0"
              onChange={e => setMinutes(e.target.value)}
              value={minutes} />
            <p>min</p>
            <input type="number" min="0"
              onChange={e => setSeconds(e.target.value)}
              value={seconds} />
            <p>s</p>
          </div>
        </label>
        <label>
          Elevation
          <div id="distance-elevation-divs">
            <input
              type="number" min="0"
              onChange={e => setElevation(e.target.value)}
              value={elevation} />
              <p>ft.</p>
          </div>
        </label>
      </div>
      <div id="activity-form-row-2">
        <label>
          Date
          <input id="activity-date-input"
            type="date"
            onChange={e => setDate(e.target.value)}
            value={date}/>
            <p id="activity-date-input-error"></p>
        </label>
        <label>
          Time
          <input id="activity-time-input"
            type="time"
            onChange={e => setTime(e.target.value)}
            value={time}/></label>
      </div>
      <label id="activity-title-form">
        Title
        <input
          id="activity-title-input"
          type="text"
          onChange={e => setTitle(e.target.value)}
          value={title} />
      </label>
      <p id="activity-title-input-error"></p>
      <div id="activity-description">
        <label>
          Description
          <textarea id=""
            placeholder="How did it go? Were you tired or rested? How was the weather?"
            onChange={e => setDescription(e.target.value)} value={description}>
          </textarea>
        </label>
      </div>
      <div id="close-form-buttons">
        <input id="activity-submit-button" type="submit" value="Create"/>
        <button
          id="cancel-new-activity"
          onClick={closeForm}>Cancel</button>
      </div>
    </form>
  )
}
