import { getHolidaysForYearAndCanton } from '../../data/holidays/allHolidays';
import globalConfig from '../../config/global';

/**
 * Months: 1-based
 * Dates (01., 02. 03, ...): 1-based
 * Days (So, Mo, Di, ...): 0-based
 */

/**
 * Private
 */

// e.g. years are 2020-2023. Add last holidays from 2019 and first from 2024
const addHolidaysBeforeAndAfter = (options) => {
  const {
    canton,
    holidays
  } = options;
  const {
    planerDaySpanToIncludeForYearBeforeFirstAndAfterLast,
    years
  } = globalConfig;
  const firstYear = years[0];
  const lastYear = years[years.length - 1];
  const previousYear = firstYear - 1;
  const nextYear = lastYear + 1;
  const firstDate = new Date(`${firstYear}-1-1`);
  const lastDate = new Date(`${lastYear}-12-31`);
  const holidaysForPreviousYear = getHolidaysForYearAndCanton(previousYear, canton.id);
  const holidaysForNextYear = getHolidaysForYearAndCanton(nextYear, canton.id);

  firstDate.setDate(firstDate.getDate() - planerDaySpanToIncludeForYearBeforeFirstAndAfterLast);
  lastDate.setDate(lastDate.getDate() + planerDaySpanToIncludeForYearBeforeFirstAndAfterLast);

  const filteredPreviousHolidays = holidaysForPreviousYear.filter((holiday) => (new Date(holiday.dateObject))
    .getTime() > firstDate);
  const filteredNextHolidays = holidaysForNextYear.filter((holiday) => (new Date(holiday.dateObject))
    .getTime() < lastDate);

  const appendPrevious = [
    ...filteredPreviousHolidays,
    ...holidays
  ];

  const appendNext = [
    ...appendPrevious,
    ...filteredNextHolidays
  ];

  return appendNext;

};

// filter holidays by `allCanton` and `official` based on user options selection
const filterHolidays = (options) => {
  const {
    holidays,
    onlyAllCanton,
    onlyOfficial
  } = options;

  return holidays.filter((holiday) => {
    if (onlyAllCanton && !holiday.allCanton) {
      return false;
    }

    if (onlyOfficial && !holiday.official) {
      return false;
    }

    return true;
  });
};

// get array of all dates from month and year
const getDaysInMonth = (options) => {
  const {
    month,
    year
  } = options;

  const date = new Date(Date.UTC(year, month, 1));
  const days = [];

  while (date.getUTCMonth() === month) {
    days.push(new Date(date));
    date.setUTCDate(date.getUTCDate() + 1);
  }

  return days;
};

// get all dates for all months and all years
const getAllDatesForAllYears = () => {

  const dates = [];
  const years = JSON.parse(JSON.stringify(globalConfig.years));

  // add a year before and after
  years.unshift(years[0] - 1);
  years.push(years[years.length - 1] + 1);

  // itreate years
  years.forEach((year) => {

    const months = Array.from(Array(12)
      .keys());

    // iterate months
    months.forEach((month) => {

      const daysOfMonth = getDaysInMonth({
        month,
        year
      });

      daysOfMonth.forEach((day) => {
        dates.push({
          date: {
            date: day.getDate(),
            day: day.getDay(),
            month: month + 1,
            year
          },
          dateObject: day
        });
      });
    });
  });

  return dates;
};

// mark the dates that are holidays
const markHolidays = (options) => {
  const {
    allDaysOfYear,
    holidays
  } = options;

  const _allDaysOfYear = JSON.parse(JSON.stringify(allDaysOfYear));
  const _holidays = JSON.parse(JSON.stringify(holidays));
  let _holiday = _holidays[0];

  return _allDaysOfYear.map((day) => {
    const _day = JSON.parse(JSON.stringify(day));

    if (_holiday !== undefined) {
      if (_day.date.year === _holiday.date.year && _day.date.month === _holiday.date.month && _day.date.date === _holiday.date.day) {
        _day.holiday = _holiday;
        _holidays.shift();

        if (_holidays.length > 0) {
          [_holiday] = _holidays;
        } else {
          _holiday = undefined;
        }
      }
    }

    return _day;
  });
};

// mark the dates on which the user has free time anyway
const markFreeDays = (options) => {
  const {
    daysOfYearWithHolidays,
    freeDays
  } = options;

  return daysOfYearWithHolidays.map((holiday) => {
    const _holiday = JSON.parse(JSON.stringify(holiday));

    if (freeDays.includes(_holiday.date.day)) {
      _holiday.free = true;
    }

    return _holiday;
  });
};

/**
 * Public
 */

const preparedDates = (options) => {

  const {
    canton,
    freeDays,
    onlyOfficial,
    onlyAllCanton
  } = options;

  // e.g. years are 2020-2023. Add last holidays from 2019 and first from 2024
  const extendedHolidays = addHolidaysBeforeAndAfter({
    canton,
    holidays: canton.holidays
  });

  // filter holidays by selected options
  const holidays = filterHolidays({
    holidays: extendedHolidays,
    onlyAllCanton,
    onlyOfficial
  });

  // get an array of all dates for all years
  const allDaysOfYear = getAllDatesForAllYears();

  // mark the dates that are holidays
  const daysOfYearWithHolidays = markHolidays({
    allDaysOfYear,
    holidays
  });

  // mark the dates on which the user has free time anyway
  const daysOfYearWithFreeDays = markFreeDays({
    daysOfYearWithHolidays,
    freeDays
  });

  return daysOfYearWithFreeDays;
};

export default preparedDates;
