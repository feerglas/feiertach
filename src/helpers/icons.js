const iconsPath = () => {
  const path = '/images/flags/';

  if (!process.isClient) {
    return `/feiertach${path}`;
  }

  return path;
};

export default iconsPath;
