import constantHolidays from './constantHolidays';
import variableHolidays from './variableHolidays';

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

const addLeadingZeroesToDate = (holidays) => {
  const holidaysWithZeroes = holidays.map((day) => {
    const dayWithZeroes = day;
    const _day = dayWithZeroes.date.day;
    const _month = dayWithZeroes.date.month;
    const _dayZero = _day < 10
      ? `0${_day}`
      : _day.toString();

    const _monthZero = _month < 10
      ? `0${_month}`
      : _month.toString();

    dayWithZeroes.date.day = _dayZero;
    dayWithZeroes.date.month = _monthZero;

    return dayWithZeroes;
  });

  return holidaysWithZeroes;
};

const addSortDates = (holidays) => {
  const holidaysWithYear = holidays.map((day) => {
    const dayWithSortDate = day;
    const _day = dayWithSortDate.date.day;
    const _month = dayWithSortDate.date.month;
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
  let variableHolidaysForYear = [];
  const yearKey = `holidays${year}`;
  const variableHolidaysHasYear = Object.keys(variableHolidays)
    .includes(yearKey);

  if (variableHolidaysHasYear) {
    variableHolidaysForYear = variableHolidays[yearKey];
  }

  // add year
  const constantHolidaysWithYear = addYearToHolidays(constantHolidays, year);
  const variableHolidaysWithYear = addYearToHolidays(variableHolidaysForYear, year);

  // add leading zeroes to date and stringify
  const constantWithLeadingZeroDates = addLeadingZeroesToDate(constantHolidaysWithYear);
  const variableWithLeadingZeroDates = addLeadingZeroesToDate(variableHolidaysWithYear);

  // add sort date
  const constantWithSortDate = addSortDates(constantWithLeadingZeroDates);
  const variableWithSortDate = addSortDates(variableWithLeadingZeroDates);

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
  const yearHolidays = getHolidaysForYear(year);
  const filtered = yearHolidays.filter((day) => {
    const cantonKeys = Object.keys(day.cantons);

    return cantonKeys.includes(canton);
  });

  return filtered;
};

export {
  getHolidaysForYear,
  getHolidaysForYearAndCanton
};
