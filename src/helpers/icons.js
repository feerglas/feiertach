const iconsPath = () => {
  const path = '/images/flags/';

  if (process.env.NODE_ENV === 'development') {
    return path;
  }

  return `/feiertach${path}`;
};

module.exports = iconsPath;
