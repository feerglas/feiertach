const cantons = [
  {
    flag: 'aargau.svg',
    key: 'ag',
    name: {
      de: 'Aargau',
      en: 'Aargau',
      fr: 'Aargau',
      it: 'Aargau'
    },
    sortValue: 'aargau'
  },
  {
    flag: 'appenzell_ausserrhoden.svg',
    key: 'ar',
    name: {
      de: 'Appenzell Ausserrhoden',
      en: 'Appenzell Ausserrhoden',
      fr: 'Appenzell Ausserrhoden',
      it: 'Appenzell Ausserrhoden'
    },
    sortValue: 'appenzell_ausserrhoden'
  },
  {
    flag: 'appenzell_innerrhoden.svg',
    key: 'ai',
    name: {
      de: 'Appenzell Innerrhoden',
      en: 'Appenzell Innerrhoden',
      fr: 'Appenzell Innerrhoden',
      it: 'Appenzell Innerrhoden'
    },
    sortValue: 'appenzell_innerrhoden'
  },
  {
    flag: 'basel_land.svg',
    key: 'bl',
    name: {
      de: 'Basel Land',
      en: 'Basel Land',
      fr: 'Basel Land',
      it: 'Basel Land'
    },
    sortValue: 'basel_land'
  },
  {
    flag: 'basel.svg',
    key: 'bs',
    name: {
      de: 'Basel',
      en: 'Basel',
      fr: 'Basel',
      it: 'Basel'
    },
    sortValue: 'basel'
  },
  {
    flag: 'bern.svg',
    key: 'be',
    name: {
      de: 'Bern',
      en: 'Bern',
      fr: 'Bern',
      it: 'Bern'
    },
    sortValue: 'bern'
  },
  {
    flag: 'fribourg.svg',
    key: 'fr',
    name: {
      de: 'Fribourg',
      en: 'Fribourg',
      fr: 'Fribourg',
      it: 'Fribourg'
    },
    sortValue: 'fribourg'
  },
  {
    flag: 'geneva.svg',
    key: 'ge',
    name: {
      de: 'Geneva',
      en: 'Geneva',
      fr: 'Geneva',
      it: 'Geneva'
    },
    sortValue: 'geneva'
  },
  {
    flag: 'glarus.svg',
    key: 'gl',
    name: {
      de: 'Glarus',
      en: 'Glarus',
      fr: 'Glarus',
      it: 'Glarus'
    },
    sortValue: 'glarus'
  },
  {
    flag: 'graubuenden.svg',
    key: 'gr',
    name: {
      de: 'Graubuenden',
      en: 'Graubuenden',
      fr: 'Graubuenden',
      it: 'Graubuenden'
    },
    sortValue: 'graubünden'
  },
  {
    flag: 'jura.svg',
    key: 'ju',
    name: {
      de: 'Jura',
      en: 'Jura',
      fr: 'Jura',
      it: 'Jura'
    },
    sortValue: 'jura'
  },
  {
    flag: 'lucerne.svg',
    key: 'lu',
    name: {
      de: 'Lucerne',
      en: 'Lucerne',
      fr: 'Lucerne',
      it: 'Lucerne'
    },
    sortValue: 'lucerne'
  },
  {
    flag: 'neuchatel.svg',
    key: 'ne',
    name: {
      de: 'Neuchâtel',
      en: 'Neuchâtel',
      fr: 'Neuchâtel',
      it: 'Neuchâtel'
    },
    sortValue: 'neuchatel'
  },
  {
    flag: 'nidwalden.svg',
    key: 'nw',
    name: {
      de: 'Nidwalden',
      en: 'Nidwalden',
      fr: 'Nidwalden',
      it: 'Nidwalden'
    },
    sortValue: 'nidwalden'
  },
  {
    flag: 'obwalden.svg',
    key: 'ow',
    name: {
      de: 'Obwalden',
      en: 'Obwalden',
      fr: 'Obwalden',
      it: 'Obwalden'
    },
    sortValue: 'obwalden'
  },
  {
    flag: 'sankt_gallen.svg',
    key: 'sg',
    name: {
      de: 'Sankt Gallen',
      en: 'Sankt Gallen',
      fr: 'Sankt Gallen',
      it: 'Sankt Gallen'
    },
    sortValue: 'sankt_gallen'
  },
  {
    flag: 'schaffhausen.svg',
    key: 'sh',
    name: {
      de: 'Schaffhausen',
      en: 'Schaffhausen',
      fr: 'Schaffhausen',
      it: 'Schaffhausen'
    },
    sortValue: 'schaffhausen'
  },
  {
    flag: 'schwyz.svg',
    key: 'sz',
    name: {
      de: 'Schwyz',
      en: 'Schwyz',
      fr: 'Schwyz',
      it: 'Schwyz'
    },
    sortValue: 'schwyz'
  },
  {
    flag: 'solothurn.svg',
    key: 'so',
    name: {
      de: 'Solothurn',
      en: 'Solothurn',
      fr: 'Solothurn',
      it: 'Solothurn'
    },
    sortValue: 'solothurn'
  },
  {
    flag: 'tessin.svg',
    key: 'ti',
    name: {
      de: 'Tessin',
      en: 'Tessin',
      fr: 'Tessin',
      it: 'Tessin'
    },
    sortValue: 'tessin'
  },
  {
    flag: 'thurgau.svg',
    key: 'tg',
    name: {
      de: 'Thurgau',
      en: 'Thurgau',
      fr: 'Thurgau',
      it: 'Thurgau'
    },
    sortValue: 'thurgau'
  },
  {
    flag: 'uri.svg',
    key: 'ur',
    name: {
      de: 'Uri',
      en: 'Uri',
      fr: 'Uri',
      it: 'Uri'
    },
    sortValue: 'uri'
  },
  {
    flag: 'valais.svg',
    key: 'vs',
    name: {
      de: 'Valais',
      en: 'Valais',
      fr: 'Valais',
      it: 'Valais'
    },
    sortValue: 'valais'
  },
  {
    flag: 'vaud.svg',
    key: 'vd',
    name: {
      de: 'Vaud',
      en: 'Vaud',
      fr: 'Vaud',
      it: 'Vaud'
    },
    sortValue: 'vaud'
  },
  {
    flag: 'zug.svg',
    key: 'zg',
    name: {
      de: 'Zug',
      en: 'Zug',
      fr: 'Zug',
      it: 'Zug'
    },
    sortValue: 'zug'
  },
  {
    flag: 'zuerich.svg',
    key: 'zh',
    name: {
      de: 'Zürich',
      en: 'Zürich',
      fr: 'Zürich',
      it: 'Zürich'
    },
    sortValue: 'zürich'
  }
];

module.exports = cantons;
