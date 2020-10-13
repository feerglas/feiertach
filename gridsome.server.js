const cantons = require('./src/data/cantons');

const addCantonsCollection = (actions) => {
  const cantonsCollection = actions.addCollection('Canton');

  for (const canton of cantons) {
    cantonsCollection.addNode({
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
