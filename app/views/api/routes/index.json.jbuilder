
@routes.each do |route|
  json.set! route.id do
    json.id route.id
    json.title route.title
    json.sport route.sport
    json.distance route.distance
    json.elevation route.elevation
    json.polylineString route.polyline_string
  end

  if route.sport == 'bike'
    json.cycling do
      json.set! route.id do
        json.id route.id
        json.title route.title
        json.sport route.sport
        json.distance route.distance
        json.elevation route.elevation
        json.polylineString route.polyline_string
      end
    end
  elsif route.sport == 'run'
    json.running do
      json.set! route.id do
        json.id route.id
        json.title route.title
        json.sport route.sport
        json.distance route.distance
        json.elevation route.elevation
        json.polylineString route.polyline_string
      end
    end
  end
end