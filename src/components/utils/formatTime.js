// Format seconds to a time display. Output is in hh:mm:ss format.
const formatTime = (seconds) => {
  const date = new Date(null);
  date.setSeconds(seconds); // specify value for SECONDS here
  return date.toISOString().substr(11, 8);
};

export default formatTime;
