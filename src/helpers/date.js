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
  };
};

const getNextHolidayAfterDate = (holidays, date) => {

  const today = date || new Date();
  const thisYear = today.getFullYear();
  const thisMonth = today.getMonth() + 1;
  const thisDay = today.getDate();

  let nextHoliday = false;
  let lastHoliday = false;

  holidays.forEach((holiday) => {
    const {
      year
    } = holiday.date;
    const month = parseInt(holiday.date.month, 10);
    const day = parseInt(holiday.date.day, 10);

    if (year >= thisYear && month >= thisMonth && day >= thisDay) {
      lastHoliday = holiday;

      if (!nextHoliday) {
        nextHoliday = lastHoliday;
      }
    }
  });

  return nextHoliday;

};

const getLastHolidayOfEachYear = (holidays) => {
  const years = {};
  let currentYear = false;
  let lastHoliday = false;

  holidays.forEach((holiday) => {
    if (currentYear) {
      if (currentYear !== holiday.date.year) {
        years[currentYear] = lastHoliday;
        currentYear = false;
        lastHoliday = false;
      }
    } else {
      currentYear = holiday.date.year;
    }

    lastHoliday = holiday;
  });

  return years;

};

export {
  getFormattedDate,
  getLastHolidayOfEachYear,
  getNextHolidayAfterDate
};
