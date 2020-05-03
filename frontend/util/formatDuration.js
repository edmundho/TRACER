export default function formatDuration(duration) {
  let formattedDuration = new Date(null);
  formattedDuration.setHours(0);
  formattedDuration.setSeconds(duration);
  formattedDuration = formattedDuration.toTimeString().slice(0, 8);
  return formattedDuration;
}
