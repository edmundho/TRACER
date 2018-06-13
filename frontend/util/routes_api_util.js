
export const fetchRoutes = () => (
  $.ajax({
    method: 'get',
    url: '/api/routes',
  })
);

export const fetchRoute = routeId => (
  $.ajax({
    method: 'get',
    url: `/api/routes/${routeId}`
  })
);

export const postRoute = route => (
  $.ajax({
    method: 'post',
    url: `/api/routes`,
    data: {
      route: {
        title: route.title,
        sport: route.sport,
        distance: route.distance,
        elevation: route.elevation,
        polyline_string: route.polylineString,
        description: route.description,
        origin: route.origin,
        destination: route.destination
      }
    }
  })
);

