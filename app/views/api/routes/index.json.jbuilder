

@routes.each do |route|
  json.set! route.id do
    json.id route.id
    json.title route.title
    json.sport route.sport
    json.distance route.distance
    json.elevation route.elevation
    json.polylineString route.polyline_string
  end
end