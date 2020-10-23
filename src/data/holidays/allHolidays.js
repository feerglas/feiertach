const constantHolidays = require('./constantHolidays');
const variableHolidays = require('./variableHolidays');

/**
 * Private
 */
const addYearToHolidays = (holidays, year) => {
  const holidaysWithYear = holidays.map((day) => {
    const dayWithYear = day;

    dayWithYear.date.year = year;

    return dayWithYear;
  });

  return holidaysWithYear;
};

const setDateForVariableHoliday = (holidays, year) => {
  const holidaysWithYear = holidays.map((day) => {
    const newDay = day;
    const date = day.dates[year];

    date.year = year;

    newDay.date = date;

    return newDay;
  });

  return holidaysWithYear;
};

const convertNumberToStringWithLeadingZero = (number) => (number < 10
  ? `0${number}`
  : number.toString());

const addSortDates = (holidays) => {
  const holidaysWithYear = holidays.map((day) => {
    const dayWithSortDate = day;
    const _day = convertNumberToStringWithLeadingZero(dayWithSortDate.date.day);
    const _month = convertNumberToStringWithLeadingZero(dayWithSortDate.date.month);
    const _year = dayWithSortDate.date.year;

    dayWithSortDate.sortDate = `${_year}${_month}${_day}`;
    dayWithSortDate.dateObject = new Date(`${_year}-${_month}-${_day}`);

    return dayWithSortDate;
  });

  return holidaysWithYear;
};

const addType = (holidays, isFix) => {
  const holidaysWithType = holidays.map((day) => {
    const dayWithType = day;

    dayWithType.isFix = isFix;

    return dayWithType;
  });

  return holidaysWithType;
};

/**
 * Public
 */
const getHolidaysForYear = (year) => {
  const variableHolidaysForYear = variableHolidays
    .filter((holiday) => Object.keys(holiday.dates)
      .includes(year.toString()));

  // add year
  const constantHolidaysWithYear = addYearToHolidays(constantHolidays, year);
  const variableHolidaysWithYear = setDateForVariableHoliday(variableHolidaysForYear, year);

  // add sort date
  const constantWithSortDate = addSortDates(constantHolidaysWithYear);
  const variableWithSortDate = addSortDates(variableHolidaysWithYear);

  // add type
  const constantWithType = addType(constantWithSortDate, true);
  const variableWithType = addType(variableWithSortDate, false);

  // merge holidays
  const holidays = constantWithType.concat(variableWithType);

  // sort
  holidays.sort((a, b) => {
    const aInt = parseInt(a.sortDate, 10);
    const bInt = parseInt(b.sortDate, 10);

    return aInt - bInt;
  });

  return holidays;
};

const getHolidaysForYearAndCanton = (year, canton) => {
  const yearHolidays = JSON.parse(JSON.stringify(getHolidaysForYear(year)));

  const filtered = yearHolidays.filter((day) => {
    const cantonKeys = Object.keys(day.cantons);

    return cantonKeys.includes(canton);
  });

  return filtered;
};

module.exports = {
  getHolidaysForYear,
  getHolidaysForYearAndCanton
};
