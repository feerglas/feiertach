const cantons = [
  {
    flag: 'aargau.svg',
    key: 'ag',
    name: {
      de: 'Aargau',
      en: 'Aargau',
      fr: 'Argovie',
      it: 'Argovia'
    },
    sortValue: 'aargau'
  },
  {
    flag: 'appenzell_ausserrhoden.svg',
    key: 'ar',
    name: {
      de: 'Appenzell Ausserrhoden',
      en: 'Appenzell Ausserrhoden',
      fr: 'Appenzell Rh.-Ext.',
      it: 'Appenzello Esterno'
    },
    sortValue: 'appenzell_ausserrhoden'
  },
  {
    flag: 'appenzell_innerrhoden.svg',
    key: 'ai',
    name: {
      de: 'Appenzell Innerrhoden',
      en: 'Appenzell Innerrhoden',
      fr: 'Appenzell Rh.-Int.',
      it: 'Appenzello Interno'
    },
    sortValue: 'appenzell_innerrhoden'
  },
  {
    flag: 'basel_land.svg',
    key: 'bl',
    name: {
      de: 'Basel-Land',
      en: 'Basel-Land',
      fr: 'Bâle-Campagne',
      it: 'Basilea Campagna'
    },
    sortValue: 'basel_land'
  },
  {
    flag: 'basel.svg',
    key: 'bs',
    name: {
      de: 'Basel-Stadt',
      en: 'Basel-Stadt',
      fr: 'Bâle-Ville',
      it: 'Basilea Città'
    },
    sortValue: 'basel'
  },
  {
    flag: 'bern.svg',
    key: 'be',
    name: {
      de: 'Bern',
      en: 'Bern',
      fr: 'Berne',
      it: 'Berna'
    },
    sortValue: 'bern'
  },
  {
    flag: 'fribourg.svg',
    key: 'fr',
    name: {
      de: 'Freiburg',
      en: 'Fribourg',
      fr: 'Fribourg',
      it: 'Friburgo'
    },
    sortValue: 'fribourg'
  },
  {
    flag: 'geneva.svg',
    key: 'ge',
    name: {
      de: 'Genf',
      en: 'Geneva',
      fr: 'Genève',
      it: 'Ginevra'
    },
    sortValue: 'geneva'
  },
  {
    flag: 'glarus.svg',
    key: 'gl',
    name: {
      de: 'Glarus',
      en: 'Glarus',
      fr: 'Glaris',
      it: 'Glarona'
    },
    sortValue: 'glarus'
  },
  {
    flag: 'graubuenden.svg',
    key: 'gr',
    name: {
      de: 'Graubünden',
      en: 'Graubünden',
      fr: 'Grisons',
      it: 'Grigioni'
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
      it: 'Giura'
    },
    sortValue: 'jura'
  },
  {
    flag: 'lucerne.svg',
    key: 'lu',
    name: {
      de: 'Luzern',
      en: 'Luzern',
      fr: 'Lucerne',
      it: 'Lucerna'
    },
    sortValue: 'lucerne'
  },
  {
    flag: 'neuchatel.svg',
    key: 'ne',
    name: {
      de: 'Neuenburg',
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
      fr: 'Nidwald',
      it: 'Nidvaldo'
    },
    sortValue: 'nidwalden'
  },
  {
    flag: 'obwalden.svg',
    key: 'ow',
    name: {
      de: 'Obwalden',
      en: 'Obwalden',
      fr: 'Obwald',
      it: 'Obvaldo'
    },
    sortValue: 'obwalden'
  },
  {
    flag: 'sankt_gallen.svg',
    key: 'sg',
    name: {
      de: 'Sankt Gallen',
      en: 'Sankt Gallen',
      fr: 'Saint-Gall',
      it: 'San Gallo'
    },
    sortValue: 'sankt_gallen'
  },
  {
    flag: 'schaffhausen.svg',
    key: 'sh',
    name: {
      de: 'Schaffhausen',
      en: 'Schaffhausen',
      fr: 'Schaffhouse',
      it: 'Sciaffusa'
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
      it: 'Svitto'
    },
    sortValue: 'schwyz'
  },
  {
    flag: 'solothurn.svg',
    key: 'so',
    name: {
      de: 'Solothurn',
      en: 'Solothurn',
      fr: 'Soleure',
      it: 'Soletta'
    },
    sortValue: 'solothurn'
  },
  {
    flag: 'tessin.svg',
    key: 'ti',
    name: {
      de: 'Tessin',
      en: 'Ticino',
      fr: 'Tessin',
      it: 'Ticino'
    },
    sortValue: 'tessin'
  },
  {
    flag: 'thurgau.svg',
    key: 'tg',
    name: {
      de: 'Thurgau',
      en: 'Thurgau',
      fr: 'Turgovie',
      it: 'Turgovia'
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
      de: 'Wallis',
      en: 'Valais',
      fr: 'Valais',
      it: 'Vallese'
    },
    sortValue: 'valais'
  },
  {
    flag: 'vaud.svg',
    key: 'vd',
    name: {
      de: 'Waadt',
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
      fr: 'Zoug',
      it: 'Zugo'
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
      it: 'Zurigo'
    },
    sortValue: 'zürich'
  }
];

module.exports = cantons;
