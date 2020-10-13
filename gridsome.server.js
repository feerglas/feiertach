const cantons = require('./src/data/cantons');
const allHolidays = require('./src/data/holidays/allHolidays');
const globalConfig = require('./src/config/global');

const addCantonsCollection = (actions) => {
  const cantonsCollection = actions.addCollection('Canton');
  const {
    years
  } = globalConfig;

  for (const canton of cantons) {
    let holidays = [];

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

module.exports = (api) => {
  api.loadSource((actions) => {
    addCantonsCollection(actions);
  });
};
