
@activities.each do |activity|
  json.set! activity.id do
    json.id activity.id
    json.userId activity.user_id
    json.title activity.title
    json.sport activity.sport
    json.date activity.date
    json.duration activity.duration
    json.distance activity.distance
    json.elevation activity.elevation
    json.routeId activity.route_id
    json.description activity.description
    json.time activity.time
  end

end