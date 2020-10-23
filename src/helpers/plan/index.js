import clean from './cleanUp';
import filterPast from './filterPast';
import find from './potentialHolidays';
import meta from './meta';
import prepare from './prepareDates';

/**
 * Months: 1-based
 * Dates (01., 02. 03, ...): 1-based
 * Days (So, Mo, Di, ...): 0-based
 */

/**
 * Public
 */
const planHolidays = (options) => {

  // create array of dates for all days of all years, mark holidays & free days
  const days = prepare(options);

  // add mark dates that use could takeFree
  const found = find({
    days
  });

  // get array of objects which contains the time spans
  const results = clean({
    days: found
  });

  // add meta data for total days off and amount of days to take free
  const suggestionsWithMeta = meta({
    suggestions: results
  });

  const suggestionsWithoutPast = filterPast({
    suggestions: JSON.parse(JSON.stringify(suggestionsWithMeta))
  });

  return {
    all: suggestionsWithMeta,
    onlyUpcoming: suggestionsWithoutPast
  };
};

export default planHolidays;
