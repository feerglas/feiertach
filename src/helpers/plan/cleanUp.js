/**
 * For days that are holidays and are free days, remove holidays prop
 * @type {[type]}
 */
const removeHolidayIfIsFree = (options) => {
  const {
    days
  } = options;

  const newDays = [];

  days.forEach((day) => {
    const _day = day;

    if (_day.holiday && _day.free) {
      delete _day.holiday;
    }

    newDays.push(_day);
  });

  return newDays;
};

/**
 * Iterate over days, skip empty days and add days that are not empty
 * inside an object to the array
 */
const removeEmptyDays = (options) => {
  const {
    days
  } = options;

  const results = [];
  let span = [];

  days.forEach((day) => {
    const isEmpty = !day.free && !day.holiday && !day.takeFree;

    if (isEmpty) {
      if (span.length > 0) {

        if (span.length > 1) {
          results.push(span);
        }

        span = [];
      }
    } else {
      span.push(day);
    }
  });

  return results;
};

/**
 * Find span objects that don't contain a holiday
 */
const removeSpansWithoutHolidays = (options) => {
  const {
    days
  } = options;

  return days.filter((span) => {
    let holidayFound = false;

    span.forEach((day) => {
      if (day.holiday && !day.free) {
        holidayFound = true;
      }
    });

    return holidayFound;
  });
};

const cleanUp = (options) => {
  const {
    days
  } = options;

  const daysWithHolidayRemovedIfIsFreeDay = removeHolidayIfIsFree({
    days
  });

  const emptyDaysRemoved = removeEmptyDays({
    days: daysWithHolidayRemovedIfIsFreeDay
  });

  const results = removeSpansWithoutHolidays({
    days: emptyDaysRemoved
  });

  return results;
};

export default cleanUp;
