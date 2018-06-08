

@routes.each do |route|
  json.title route.title
  json.type route.type
  json.date route.date
  json.startTime route.start_time
  json.endTime route.end_time
  json.distance route.distance
  json.elevation route.elevation
  json.mapImage route.map_image
  json.polylineString route.polyline_string
end