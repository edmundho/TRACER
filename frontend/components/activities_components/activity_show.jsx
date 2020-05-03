import React, { useEffect } from 'react';
import { imageUrlBuilder } from '../../util/static_map_url';
import { timeConvert } from '../../util/conversions';
import formatDuration from '../../util/formatDuration';

export default function ActivityShow({
  activityId,
  activity,
  route,
  getActivity,
  getRoute,
  history
}) {
  useEffect(() => {
    if (!activity) {
      getActivity(activityId).then(response => {
        getRoute(response.activity[activityId].routeId);
      });
    }
    window.scrollTo(0, 0);
  }, []);

  if (activity === undefined) {
    return <div id="activity-show-page">loading...</div>;
  } else {
    const { sport, time, date, title, description, distance, elevation, duration } = activity;

    let routeImage;
    if (route) {
      const { polylineString, origin, destination } = route;
      const imageUrl = imageUrlBuilder(polylineString, origin, destination, 'large');
      routeImage = (<img id="large-route-image" src={imageUrl} alt=""/>);
    }

    return (
      <div id="activity-show-page">
        <header>
          <div id="show-header-div">
            <i className={sport === 'bike' ? 'fas fa-bicycle' : 'fas fa-walking'}></i>
            <h1>{sport === 'bike' ? 'Ride' : 'Run'}</h1>
          </div>
          <button onClick={() => history.goBack()}>Back</button>
        </header>
        <div id="activity-show-block">
          <ul id="show-top-row-info">
            <li>
              <div id="show-title-div">
                <div>
                  {time && (
                    <h3>
                      {`${timeConvert(time.slice(11,16))} on ${date.slice(0, 10)}`}
                    </h3>
                  )}
                </div>
                <div id="activity-title"><p>{title}</p></div>
              </div>
            </li>
            <li>
              <div id="show-stats-div" >
                <div>{`${distance} mi`}<p>Distance</p></div>
                <div>{`${elevation} ft`}<p>Elevation Gain</p></div>
                {duration && (
                  <div>
                    {formatDuration(duration)}
                    <p>Moving Time</p>
                  </div>
                )}
              </div>
            </li>
          </ul>
          <ul className="show-bottom-info">
            <li>
              <div>
                <h3>Route Taken:</h3>
                <div id="show-image-container">{routeImage}</div>
                {description && (
                  <div id="activity-description-div">
                    <h3>Description:</h3>
                    <p>{description}</p>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }


}
