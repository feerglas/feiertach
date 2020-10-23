/**
 * Private
 */

/**
 * Create a range as array, from/to numbers provided
 */
const getRangeArrayBetweenNumbers = (options) => {
  const {
    from,
    to
  } = options;

  const range = [];

  for (let i = from; i <= to; i++) {
    range.push(i);
  }

  return range;
};

/**
 * At a given index, go backwards and forwards until a day is found which is
 * not marked as holiday, free or take free
 */
const findSiblingFreeDays = (options) => {
  const {
    days,
    index
  } = options;

  const _days = JSON.parse(JSON.stringify(days));
  const _daysBefore = _days.slice(0, index);
  const _daysAfter = _days.slice(index + 1, _days.length);

  let keepLoop = true;
  let beforeIndex = index;
  let afterIndex = index;

  // iterate backward in time
  while (keepLoop) {
    if (_daysBefore.length > 1) {
      const nextDayToCheck = _daysBefore[_daysBefore.length - 1];

      if (nextDayToCheck.free || nextDayToCheck.holiday) {
        beforeIndex--;
        _daysBefore.pop();
      } else {
        keepLoop = false;
      }
    } else {
      keepLoop = false;
    }
  }

  // iterate forward in time
  while (keepLoop) {
    if (_daysAfter.length > 0) {
      const nextDayToCheck = _daysAfter[0];

      if (nextDayToCheck.free || nextDayToCheck.holiday || nextDayToCheck.takeFree) {
        afterIndex++;
        _daysBefore.shift();
      } else {
        keepLoop = false;
      }
    } else {
      keepLoop = false;
    }
  }

  const delta = afterIndex - beforeIndex;

  if (delta === 0) {
    return undefined;
  }

  return {
    afterIndex,
    beforeIndex
  };
};

/**
 * Iterate over all days between the indexes and check if there's at least
 * one holiday
 */
const daysOfIndexesHaveHoliday = (options) => {
  const {
    afterIndex,
    beforeIndex,
    days
  } = options;

  const range = getRangeArrayBetweenNumbers({
    from: beforeIndex,
    to: afterIndex
  });

  let holidayFound = false;

  range.forEach((index) => {
    const day = days[index];

    if (day.holiday && !day.free) {
      holidayFound = true;
    }
  });

  return holidayFound;

};

/**
 * 2 or more free sibling days (e.g. a free day followed by a holiday)
 * will be extended by adding a day before and after the sibling days
 */
const addDayBeforeAndAfterFreeSiblingDays = (options) => {
  const {
    days
  } = options;

  days.forEach((day, index) => {

    // get days free days before/after current day
    if ((day.holiday || day.free) && !day.takeFree) {
      const siblingFreeDays = findSiblingFreeDays({
        days,
        index
      });

      if (siblingFreeDays !== undefined) {
        const {
          afterIndex,
          beforeIndex
        } = siblingFreeDays;

        // check if at least one of the dates is a holiday
        const hasHoliday = daysOfIndexesHaveHoliday({
          afterIndex,
          beforeIndex,
          days
        });

        if (hasHoliday) {
          if (!days[beforeIndex - 1].holiday && (days[beforeIndex - 1] && !days[beforeIndex - 1].free)) {
            days[beforeIndex - 1].takeFree = true;
          }

          if (!days[afterIndex + 1].holiday && (days[afterIndex + 1] && !days[afterIndex + 1].free)) {
            days[afterIndex + 1].takeFree = true;
          }
        }
      }
    }
  });

  return days;
};

/**
 * For a given index of a day, find a gap of a single day before and after
 * the index
 */
const findGapAroundIndex = (options) => {
  const {
    days,
    index
  } = options;

  const _days = JSON.parse(JSON.stringify(days));
  const _daysBefore = _days.slice(0, index);
  const _daysAfter = _days.slice(index + 1, _days.length);

  let keepLoop = true;
  let emptyFound = false;
  let indexOfEmptyDayBefore = false;
  let indexOfEmptyDayAfter = false;
  let currentIndex = index;

  // iterate backward in time
  while (keepLoop) {
    const nextDayToCheck = _daysBefore[_daysBefore.length - 1];
    const isEmpty = !nextDayToCheck.free && !nextDayToCheck.holiday && !nextDayToCheck.takeFree;

    currentIndex--;

    if (isEmpty) {

      // found an empty one, but already found one in iteration before, so break
      if (emptyFound) {
        keepLoop = false;
        indexOfEmptyDayBefore = false;
      } else {
        emptyFound = true;
        indexOfEmptyDayBefore = currentIndex;
        _daysBefore.pop();
      }

    } else {
      if (emptyFound) {
        keepLoop = false;
      } else {
        _daysBefore.pop();
      }
    }
  }

  // reset for forward loop
  currentIndex = index;
  emptyFound = false;
  keepLoop = true;

  // iterate backward in time
  while (keepLoop) {
    const nextDayToCheck = _daysAfter[0];
    const isEmpty = !nextDayToCheck.free && !nextDayToCheck.holiday && !nextDayToCheck.takeFree;

    currentIndex++;

    if (isEmpty) {

      // found an empty one, but already found one in iteration before, so break
      if (emptyFound) {
        keepLoop = false;
        indexOfEmptyDayAfter = false;
      } else {
        emptyFound = true;
        indexOfEmptyDayAfter = currentIndex;
        _daysAfter.shift();
      }

    } else {
      if (emptyFound) {
        keepLoop = false;
      } else {
        _daysAfter.shift();
      }
    }
  }

  return {
    gapAfter: indexOfEmptyDayAfter,
    gapBefore: indexOfEmptyDayBefore
  };
};

/**
 * Iterate over days and find gaps of 1 day, and fill them up as `takeFree`
 */
const fillGapsInDays = (options) => {
  const {
    days
  } = options;

  days.forEach((day, index) => {
    if (day.takeFree || day.holiday) {
      const {
        gapAfter,
        gapBefore
      } = findGapAroundIndex({
        days,
        index
      });

      if (gapBefore) {
        days[gapBefore].takeFree = true;
      }

      if (gapAfter) {
        days[gapAfter].takeFree = true;
      }
    }
  });

  return days;
};

/**
 * Public
 */
const potentialHolidays = (options) => {
  const {
    days
  } = options;

  // try to do it if user has only 1 free day
  const extendedSiblingFreeDays = addDayBeforeAndAfterFreeSiblingDays({
    days
  });

  const freeDaysWithFilledGaps = fillGapsInDays({
    days: extendedSiblingFreeDays
  });

  return freeDaysWithFilledGaps;
};

export default potentialHolidays;
