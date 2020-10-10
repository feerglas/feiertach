const getDeepLocale = (prop, obj) => obj.constructor === Object && Object.keys(obj)
  .forEach((key) => {
    const __obj = obj;
    const keys = Object.keys(obj);
    let shouldStop = false;

    keys.forEach((_key) => {
      if (shouldStop) {
        return;
      }

      const _obj = obj[_key];
      const _keys = Object.keys(_obj);

      if (_keys.includes(prop)) {
        shouldStop = true;

        const _value = obj[key][prop];

        delete __obj[key][prop];

        __obj[key] = _value;

      } else {
        shouldStop = false;
      }
    });

    getDeepLocale(prop, obj[key]);
  });

const extractLocale = (prop, originalLocales) => {
  const localesCopy = JSON.parse(JSON.stringify(originalLocales));

  getDeepLocale(prop, localesCopy);

  return localesCopy;
};

export default extractLocale;
