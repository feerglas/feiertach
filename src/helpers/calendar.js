import download from './writeFile';

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

  event.title = `${holiday.title[locale]} (${canton})`;

  if (holiday.description) {
    event.description = `${holiday.description[locale]}\n\n${copyright}`;
  } else {
    event.description = copyright;
  }

  // console.log(event);

  return event;
};

export {
  addEvents,
  getCalendarEventForHoliday
};
