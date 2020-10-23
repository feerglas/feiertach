const meta = (options) => {
  const {
    suggestions
  } = options;

  const results = [];

  suggestions.forEach((suggestion) => {
    const takeFree = suggestion.filter((item) => item.takeFree);
    const suggestionObject = {};

    suggestionObject.totalFree = suggestion.length;
    suggestionObject.takeFree = takeFree.length;
    suggestionObject.days = suggestion;

    results.push(suggestionObject);
  });

  return results;
};

export default meta;
