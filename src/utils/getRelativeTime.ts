export const getRelativeTime = (timeStampInSeconds: number) => {
  const relativeTime = Date.now() / 1000 - timeStampInSeconds;
  if (relativeTime === 0) {
    return 'just now';
  }
  if (relativeTime < 60) {
    return `${Math.floor(relativeTime)} seconds ago`;
  }
  let minutes = Math.floor(relativeTime / 60);
  if (minutes < 60) {
    return `${minutes} minutes ago`;
  }
  let hours = Math.floor(relativeTime / 3600);
  if (hours < 24) {
    return `${hours} hours ago`;
  }
  let days = Math.floor(relativeTime / (3600 * 24));
  if (days < 30) {
    return `${days} days ago`;
  }
  let months = Math.floor(days / 30);
  return `about ${months} months ago`;
};
