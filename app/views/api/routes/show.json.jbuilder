
json.set! @route.id do
  json.id @route.id
  json.title @route.title
  json.sport @route.sport
  json.distance @route.distance
  json.elevation @route.elevation
  json.polylineString @route.polyline_string
  json.description @route.description
  json.createdAt @route.created_at
  json.origin @route.origin
  json.destination @route.destination
end