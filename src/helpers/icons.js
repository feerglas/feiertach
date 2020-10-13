const iconsPath = () => {
  const path = '/images/flags/';

  if (process.isClient) {
    return path;
  }
  console.log(`/feiertach${path}`);

  return `/feiertach${path}`;
};

export default iconsPath;
