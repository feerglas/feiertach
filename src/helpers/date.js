const getFormattedDate = (dateObject, localeString) => {
  const date = new Date(dateObject);
  const dateOptions = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
  };
  const weekdayOptions = {
    weekday: 'long'
  };
  const dateString = date.toLocaleDateString(localeString, dateOptions);
  const weekdayString = date.toLocaleDateString(localeString, weekdayOptions);

  return `${dateString} (${weekdayString})`;
};

export default getFormattedDate;
