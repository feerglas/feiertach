const cantons = [
  {
    flag: 'aargau',
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
    flag: 'appenzell_ausserrhoden',
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
    flag: 'appenzell_innerrhoden',
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
    flag: 'basel_land',
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
    flag: 'basel',
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
    flag: 'bern',
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
    flag: 'fribourg',
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
    flag: 'geneva',
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
    flag: 'glarus',
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
    flag: 'graubuenden',
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
    flag: 'jura',
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
    flag: 'lucerne',
    key: 'lu',
    name: {
      de: 'Luzern',
      en: 'Lucerne',
      fr: 'Lucerne',
      it: 'Lucerna'
    },
    sortValue: 'lucerne'
  },
  {
    flag: 'neuchatel',
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
    flag: 'nidwalden',
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
    flag: 'obwalden',
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
    flag: 'sankt_gallen',
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
    flag: 'schaffhausen',
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
    flag: 'schwyz',
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
    flag: 'solothurn',
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
    flag: 'tessin',
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
    flag: 'thurgau',
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
    flag: 'uri',
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
    flag: 'valais',
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
    flag: 'vaud',
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
    flag: 'zug',
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
    flag: 'zuerich',
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
