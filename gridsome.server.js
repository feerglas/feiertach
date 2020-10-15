const cantons = require('./src/data/cantons');
const allHolidays = require('./src/data/holidays/allHolidays');
const globalConfig = require('./src/config/global');
const iconsPath = require('./src/helpers/icons');

const addCantonsCollection = (actions) => {
  const cantonsCollection = actions.addCollection('Canton');
  const {
    years
  } = globalConfig;

  for (const canton of cantons) {
    let holidays = [];

    // fix svg path
    canton.flag = iconsPath() + canton.flag;

    for (const year of years) {
      const holidaysForYear = allHolidays.getHolidaysForYearAndCanton(year, canton.key);
      const extractCantonInfo = holidaysForYear.map((holiday) => {
        const cantonInfo = holiday.cantons[canton.key];
        const _holiday = JSON.parse(JSON.stringify(holiday));

        _holiday.allCanton = cantonInfo.allCanton;
        _holiday.official = cantonInfo.official;
        _holiday.half = cantonInfo.half;

        return _holiday;
      });

      holidays = holidays.concat(extractCantonInfo);
    }

    cantonsCollection.addNode({
      holidays,
      id: canton.key,
      ...canton
    });
  }
};

const addHolidaysCollection = (actions) => {
  const holidaysCollection = actions.addCollection('Holiday');
  let holidays = [];
  const {
    years
  } = globalConfig;

  for (const year of years) {
    const holidaysForYear = allHolidays.getHolidaysForYear(year);

    const extractCantonInfo = holidaysForYear.map((holiday) => {
      const _holiday = JSON.parse(JSON.stringify(holiday));
      const cantonKeys = Object.keys(_holiday.cantons);

      _holiday.cantons = cantonKeys;

      return _holiday;
    });

    holidays = holidays.concat(extractCantonInfo);

  }

  holidaysCollection.addNode({
    holidays
  });
};

module.exports = (api) => {
  api.loadSource((actions) => {
    addCantonsCollection(actions);
    addHolidaysCollection(actions);
  });
};
