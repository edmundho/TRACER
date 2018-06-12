
export const fetchActivities = () => (
  $.ajax({
    method: 'get',
    url: '/api/activities',
  })
);

export const postActivity = activity => (
  $.ajax({
    method: 'post',
    url: '/api/activities',
    data: {
      activity: {
        title: activity.title,
        sport: activity.sport,
        distance: activity.distance,
        elevation: activity.elevation,
        date: activity.date,
        duration: activity.duration,
        routeId: activity.route_id,
        description: activity.description
      }
    }
  })
);
