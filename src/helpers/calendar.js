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

export default addEvents;
