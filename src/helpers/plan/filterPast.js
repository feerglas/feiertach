const filterPast = (options) => {
  const {
    suggestions
  } = options;

  const today = (new Date())
    .getTime();

  return suggestions.filter((suggestion) => {
    const firstDayDate = new Date(suggestion.days[0].dateObject)
      .getTime();

    return today < firstDayDate;
  });
};

export default filterPast;
