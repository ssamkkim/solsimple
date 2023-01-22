export const getRelativeTime = (timeStampInSeconds: number) => {
  const relativeTime = Date.now() / 1000 - timeStampInSeconds;
  if (relativeTime === 0) {
    return 'now';
  }
  if (relativeTime === 1) {
    return '1 second ago';
  }
  if (relativeTime < 60) {
    return `${Math.floor(relativeTime)} seconds ago`;
  }
  let minutes = Math.floor(relativeTime / 60);
  if (minutes === 1) {
    return '1 minute ago';
  }
  if (minutes < 60) {
    return `${minutes} minutes ago`;
  }
  let hours = Math.floor(relativeTime / 3600);
  if (hours === 1) {
    return '1 hour ago';
  }
  if (hours < 24) {
    return `${hours} hours ago`;
  }
  let days = Math.floor(relativeTime / (3600 * 24));
  if (days === 1) {
    return '1 day ago';
  }
  if (days < 30) {
    return `${days} days ago`;
  }
  let months = Math.floor(days / 30);
  if (months === 1) {
    return '1 month ago';
  }
  return `${months} months ago`;
};
