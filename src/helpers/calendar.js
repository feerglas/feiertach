import download from './writeFile';

const ics = require('ics');

const addEvent = (details) => {
  ics.createEvent(details, (error, value) => {
    if (error) {
      console.log(error);

      return;
    }

    download('feiertaCH', value);

  });
};

export default addEvent;
