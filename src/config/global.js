const today = new Date();
const year = today.getFullYear();

const config = {
  planerDaySpanToIncludeForYearBeforeFirstAndAfterLast: 7,
  planerMaxFreeDays: 3,
  years: [
    year,
    year + 1,
    year + 2
  ]
};

module.exports = config;
