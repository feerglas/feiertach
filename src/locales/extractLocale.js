const _extractLocale = (prop, obj) => obj.constructor === Object && Object.keys(obj)
  .forEach((key) => {
    const __obj = obj;
    const keys = Object.keys(obj);

    keys.forEach((_key) => {
      const _obj = obj[_key];
      const _keys = Object.keys(_obj);

      if (_keys.includes(prop)) {
        const _value = obj[key][prop];

        delete __obj[key][prop];

        __obj[key] = _value;
      }
    });

    _extractLocale(prop, obj[key]);
  });

const extractLocale = (prop, obj) => {
  const _obj = JSON.parse(JSON.stringify(obj));

  _extractLocale(prop, _obj);

  return _obj;
};

export default extractLocale;
