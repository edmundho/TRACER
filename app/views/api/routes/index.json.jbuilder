

@routes.each do |route|
  json.set! route.id do
    json.id route.id
    json.title route.title
    json.sport route.sport
    json.date route.date
    json.startTime route.start_time
    json.endTime route.end_time
    json.distance route.distance
    json.elevation route.elevation
    json.mapImage route.map_image
    json.polylineString route.polyline_string
  end
end