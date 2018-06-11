
export const fetchRoutes = () => (
  $.ajax({
    method: 'get',
    url: '/api/routes',
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
        date: route.date,
        start_time: route.startTime,
        end_time: route.endTime,
        distance: route.distance,
        elevation: route.elevation,
        map_image: route.mapImage,
        polyline_string: route.polylineString,
        description: route.description
      }
    }
  })
);

