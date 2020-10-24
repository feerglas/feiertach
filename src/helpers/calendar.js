import download from './writeFile';
import { getFormattedDate } from './date';

const ics = require('ics');

const addEvents = (events) => {
  const {
    error,
    value
  } = ics.createEvents(events);

  if (error) {
    console.log(error);

    return;
  }

  download('feiertaCH', value);
};

const getCalendarEventForHoliday = (holiday, locale, copyright, canton) => {
  const event = {};
  const date = [
    parseInt(holiday.date.year, 10),
    parseInt(holiday.date.month, 10),
    parseInt(holiday.date.day, 10)
  ];

  event.start = date;
  event.end = date;

  event.title = holiday.title[locale];

  if (canton) {
    event.title += ` (${canton})`;
  }

  const copyrightWithLink = `${copyright}: https://www.feiertach.ch`;

  if (holiday.description) {
    event.description = `${holiday.description[locale]}\n\n${copyrightWithLink}`;
  } else {
    event.description = copyrightWithLink;
  }

  return event;
};

const addEventForHoliday = (holiday, locale, copyright, canton) => {
  const calendarEvent = getCalendarEventForHoliday(holiday, locale, copyright, canton);

  addEvents([calendarEvent]);
};

const addEventsForHolidays = (holidays, locale, copyright, canton) => {
  const events = [];

  holidays.forEach((holiday) => {
    const event = getCalendarEventForHoliday(holiday, locale, copyright, canton);

    events.push(event);
  });

  addEvents(events);
};

const addSuggestions = (suggestion, strings, locale, localeString) => {
  const takeFreeDays = suggestion.days.filter((day) => day.takeFree);
  const events = [];
  const holidays = suggestion.days.filter((day) => day.holiday);
  let holidaysString = '';

  holidays.forEach((holiday) => {
    const dateString = getFormattedDate(holiday.holiday.dateObject, localeString).date;

    holidaysString += `\n${dateString} ${holiday.holiday.title[locale]}`;
  });

  takeFreeDays.forEach((day) => {
    const date = [
      parseInt(day.date.year, 10),
      parseInt(day.date.month, 10),
      parseInt(day.date.date, 10)
    ];

    const description = `
${strings.takeFree}
${strings.totalFree}

${strings.holidays}:
${holidaysString}

${strings.copyright}: https://www.feiertach.ch
    `;

    const event = {
      description,
      end: date,
      start: date,
      title: strings.takeFreeTitle
    };

    events.push(event);
  });

  addEvents(events);
};

export {
  addEventForHoliday,
  addEventsForHolidays,
  addSuggestions
};
