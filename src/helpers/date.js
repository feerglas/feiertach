const getFormattedDate = (dateObject, localeString) => {
  const date = new Date(dateObject);
  const dateOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  };
  const weekdayOptions = {
    weekday: 'long'
  };
  const dateString = date.toLocaleDateString(localeString, dateOptions);
  const weekdayString = date.toLocaleDateString(localeString, weekdayOptions);

  return {
    date: dateString,
    weekday: weekdayString
  }
};

export default getFormattedDate;
