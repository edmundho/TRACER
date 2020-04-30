
export const imageUrlBuilder = function (poly, origin, destination, size) {
  let imageSize;
  if (size === 'small') {
    imageSize = '300x200';
  } else if (size === 'large') {
    imageSize = '500x300';
  }
  
  const url = `http://maps.googleapis.com/maps/api/staticmap?size=${imageSize}&scale=2&maptype=roadmap&`;
  const polyline = poly;
  const mapStyle = "style=feature:administrative.land_parcel|visibility:off&style=feature:administrative.neighborhood|visibility:off&&style=feature:poi|element:labels.text|visibility:on&style=feature:poi.attraction|visibility:off&style=feature:poi.business|visibility:off&style=feature:poi.government|visibility:off&style=feature:poi.medical|visibility:off&style=feature:poi.place_of_worship|visibility:off&style=feature:poi.school|visibility:off&style=feature:poi.sports_complex|visibility:off&style=feature:road|element:labels|visibility:on&style=feature:road.arterial|element:labels|visibility:on&style=feature:road.local|element:labels|visibility:on&style=feature:transit|visibility:off&style=feature:water&";
  const key = `key=AIzaSyDCCjUu03fXJYd67HWgh8gdJje65Zj4cFU&`;
  const path = `path=color:0xff0000ff%7Cweight:2%7Cenc:${polyline}&`;
  const start = origin;
  const end = destination;
  const startMark = `markers=anchor:center%7Cicon:http://i.imgur.com/tumjuoO.png|${start}&`;
  const endMark = `markers=anchor:center%7Cicon:http://i.imgur.com/T22mUpd.png|${end}&`;

  return (url + mapStyle + startMark + endMark + path + key);
};
