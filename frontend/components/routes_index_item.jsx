import React from 'react';

class RoutesIndexItem extends React.Component {
  constructor (props) {
    super(props);

    this.imageUrlBuilder = this.imageUrlBuilder.bind(this);

  }

  imageUrlBuilder () {
    const url = `https://maps.googleapis.com/maps/api/staticmap?size=300x200&scale=2&maptype=roadmap&`;
    const polyline = this.props.route.polylineString;
    const mapStyle = "style=feature:administrative.land_parcel|visibility:off&style=feature:administrative.neighborhood|visibility:off&&style=feature:poi|element:labels.text|visibility:on&style=feature:poi.attraction|visibility:off&style=feature:poi.business|visibility:off&style=feature:poi.government|visibility:off&style=feature:poi.medical|visibility:off&style=feature:poi.place_of_worship|visibility:off&style=feature:poi.school|visibility:off&style=feature:poi.sports_complex|visibility:off&style=feature:road|element:labels|visibility:on&style=feature:road.arterial|element:labels|visibility:on&style=feature:road.local|element:labels|visibility:on&style=feature:transit|visibility:off&style=feature:water&";
    const path = `path=color:0xff0000ff%7Cweight:2%7Cenc:${polyline}`;
    const start = this.props.route.origin;
    const end = this.props.route.destination;
    const startMark = `markers=anchor:center%7Cicon:http://i.imgur.com/tumjuoO.png|${start}&`;
    const endMark = `markers=anchor:center%7Cicon:http://i.imgur.com/T22mUpd.png|${end}&`;

    return (url + mapStyle + startMark + endMark + path);
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
      <li className="routes-index-item">
        <div>
          <ul>
            <img id="route-image" src={this.imageUrlBuilder()} alt=""/>
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