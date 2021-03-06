const holidays = [

  // 01.01. Neujahrstag
  {
    cantons: {
      ag: {
        allCanton: true,
        official: true
      },
      ai: {
        allCanton: true,
        official: true
      },
      ar: {
        allCanton: true,
        official: true
      },
      be: {
        allCanton: true,
        official: true
      },
      bl: {
        allCanton: true,
        official: true
      },
      bs: {
        allCanton: true,
        official: true
      },
      fr: {
        allCanton: true,
        official: true
      },
      ge: {
        allCanton: true,
        official: true
      },
      gl: {
        allCanton: true,
        official: true
      },
      gr: {
        allCanton: true,
        official: true
      },
      ju: {
        allCanton: true,
        official: true
      },
      lu: {
        allCanton: true,
        official: true
      },
      ne: {
        allCanton: true,
        official: true
      },
      nw: {
        allCanton: true,
        official: true
      },
      ow: {
        allCanton: true,
        official: true
      },
      sg: {
        allCanton: true,
        official: true
      },
      sh: {
        allCanton: true,
        official: true
      },
      so: {
        allCanton: true,
        official: true
      },
      sz: {
        allCanton: true,
        official: true
      },
      tg: {
        allCanton: true,
        official: true
      },
      ti: {
        allCanton: true,
        official: true
      },
      ur: {
        allCanton: true,
        official: true
      },
      vd: {
        allCanton: true,
        official: true
      },
      vs: {
        allCanton: true,
        official: true
      },
      zg: {
        allCanton: true,
        official: true
      },
      zh: {
        allCanton: true,
        official: true
      }
    },
    date: {
      day: 1,
      month: 1
    },
    link: {
      de: 'https://de.m.wikipedia.org/wiki/Neujahr',
      en: 'https://en.m.wikipedia.org/wiki/New_Year%27s_Day',
      fr: 'https://fr.wikipedia.org/wiki/Jour_de_l%27an',
      it: 'https://it.m.wikipedia.org/wiki/Capodanno'
    },
    title: {
      de: 'Neujahrstag',
      en: 'New Year\'s Day',
      fr: 'Nouvel An',
      it: 'Capodanno'
    }
  },

  // 02.01. Berchtoldstag
  {
    cantons: {
      ag: {
        allCanton: false,
        official: true
      },
      be: {
        allCanton: true,
        official: true
      },
      fr: {
        allCanton: true,
        official: false
      },
      gl: {
        allCanton: true,
        official: false
      },
      gr: {
        allCanton: false,
        official: false
      },
      ju: {
        allCanton: true,
        official: true
      },
      lu: {
        allCanton: true,
        official: false
      },
      ne: {
        allCanton: true,
        official: false
      },
      ow: {
        allCanton: true,
        official: false
      },
      sh: {
        allCanton: true,
        official: false
      },
      so: {
        allCanton: true,
        official: false
      },
      tg: {
        allCanton: true,
        official: true
      },
      vd: {
        allCanton: true,
        official: true
      },
      zg: {
        allCanton: true,
        official: false
      },
      zh: {
        allCanton: true,
        official: false
      }
    },
    date: {
      day: 2,
      month: 1
    },
    link: {
      de: 'https://de.m.wikipedia.org/wiki/Berchtoldstag',
      en: 'https://en.wikipedia.org/wiki/Berchtold%27s_Day',
      fr: 'https://fr.wikipedia.org/wiki/Saint-Berchtold',
      it: 'https://it.m.wikipedia.org/wiki/San_Basilio'
    },
    title: {
      de: 'Berchtoldstag',
      en: 'Berchtold\'s Day',
      fr: 'Saint-Berchtold',
      it: 'San Basilio'
    }
  },

  // 06.01. Heilige drei Könige
  {
    cantons: {
      gr: {
        allCanton: false,
        official: true
      },
      sz: {
        allCanton: true,
        official: true
      },
      ti: {
        allCanton: true,
        official: true
      },
      ur: {
        allCanton: true,
        official: true
      }
    },
    date: {
      day: 6,
      month: 1
    },
    link: {
      de: 'https://de.m.wikipedia.org/wiki/Heilige_Drei_Könige',
      en: 'https://en.wikipedia.org/wiki/Epiphany_(holiday)',
      fr: 'https://fr.wikipedia.org/wiki/%C3%89piphanie',
      it: 'https://it.m.wikipedia.org/wiki/Epifania'
    },
    title: {
      de: 'Heilige Drei Könige',
      en: 'Epiphany',
      fr: 'Epiphanie',
      it: 'Epifania'
    }
  },

  // 01.03. Jahrestag der Ausrufung der Republik
  {
    cantons: {
      ne: {
        allCanton: true,
        official: false
      }
    },
    date: {
      day: 1,
      month: 3
    },
    link: {
      de: 'https://de.m.wikipedia.org/wiki/Kanton_Neuenburg#Republikanische_Verfassung',
      en: 'https://en.wikipedia.org/wiki/Republic_Day',
      fr: 'https://fr.wikipedia.org/wiki/Canton_de_Neuch%C3%A2tel',
      it: 'https://it.wikipedia.org/wiki/Neuch%C3%A2tel'
    },
    title: {
      de: 'Jahrestag der Ausrufung der Republik',
      en: 'Republic Day',
      fr: 'L\'indépendance du Canton de Neuchâtel',
      it: 'Instauration de la République Neuchâtel'
    }
  },

  // 19.03. Josefstag
  {
    cantons: {
      gr: {
        allCanton: false,
        official: true
      },
      lu: {
        allCanton: false,
        official: true
      },
      nw: {
        allCanton: true,
        official: true
      },
      sz: {
        allCanton: true,
        official: true
      },
      ti: {
        allCanton: true,
        official: true
      },
      ur: {
        allCanton: true,
        official: true
      },
      vs: {
        allCanton: true,
        official: true
      },
      zg: {
        allCanton: false,
        official: true
      }
    },
    date: {
      day: 19,
      month: 3
    },
    link: {
      de: 'https://de.m.wikipedia.org/wiki/Josefstag',
      en: 'https://en.wikipedia.org/wiki/St_Joseph%27s_Day',
      fr: 'https://fr.wikipedia.org/wiki/Joseph_(Nouveau_Testament)',
      it: 'https://it.m.wikipedia.org/wiki/San_Giuseppe'
    },
    title: {
      de: 'Josefstag',
      en: 'Saint Joseph\'s Day',
      fr: 'Saint Joseph',
      it: 'San Giuseppe'
    }
  },

  // 01.05. Tag der Arbeit
  {
    cantons: {
      ag: {
        allCanton: false,
        official: false
      },
      bl: {
        allCanton: true,
        official: true
      },
      bs: {
        allCanton: true,
        official: true
      },
      fr: {
        allCanton: false,
        half: true,
        official: true
      },
      ju: {
        allCanton: true,
        official: true
      },
      ne: {
        allCanton: true,
        official: true
      },
      sh: {
        allCanton: true,
        official: true
      },
      so: {
        allCanton: true,
        half: true,
        official: true
      },
      tg: {
        allCanton: true,
        official: true
      },
      ti: {
        allCanton: true,
        official: true
      },
      zh: {
        allCanton: true,
        official: true
      }
    },
    date: {
      day: 1,
      month: 5
    },
    link: {
      de: 'https://de.m.wikipedia.org/wiki/Erster_Mai',
      en: 'https://en.wikipedia.org/wiki/International_Workers%27_Day',
      fr: 'https://fr.wikipedia.org/wiki/F%C3%AAte_du_Travail',
      it: 'https://it.m.wikipedia.org/wiki/Festa_del_lavoro'
    },
    title: {
      de: 'Tag der Arbeit',
      en: 'Labor Day',
      fr: 'Fête du travail',
      it: 'Festa del lavoro'
    }
  },

  // 23.06. Fest der Unabhängikeit
  {
    cantons: {
      ju: {
        allCanton: true,
        official: false
      }
    },
    date: {
      day: 23,
      month: 6
    },
    link: {
      de: 'https://de.m.wikipedia.org/wiki/Kanton_Jura',
      en: 'https://en.wikipedia.org/wiki/Independence_Day',
      fr: 'https://fr.wikipedia.org/wiki/Canton_du_Jura',
      it: 'https://de.m.wikipedia.org/wiki/Kanton_Jura'
    },
    title: {
      de: 'Fest der Unabhängigkeit',
      en: 'Independence Day',
      fr: 'La commémoration du plébiscite du Canton du Jura',
      it: 'Fest der Unabhängigkeit'
    }
  },

  // 29.06. Peter und Paul
  {
    cantons: {
      gr: {
        allCanton: false,
        official: false
      },
      lu: {
        allCanton: false,
        official: false
      },
      ti: {
        allCanton: true,
        official: false
      }
    },
    date: {
      day: 29,
      month: 6
    },
    link: {
      de: 'https://de.m.wikipedia.org/wiki/Peter_und_Paul',
      en: 'https://en.wikipedia.org/wiki/Feast_of_Saints_Peter_and_Paul',
      fr: 'https://de.m.wikipedia.org/wiki/Peter_und_Paul',
      it: 'https://de.m.wikipedia.org/wiki/Peter_und_Paul'
    },
    title: {
      de: 'Peter und Paul',
      en: 'Saints Peter and Paul',
      fr: 'Saint-Pierre et Paul',
      it: 'Peter e Paul'
    }
  },

  // 01.08. Bundesfeier
  {
    cantons: {
      ag: {
        allCanton: true,
        official: true
      },
      ai: {
        allCanton: true,
        official: true
      },
      ar: {
        allCanton: true,
        official: true
      },
      be: {
        allCanton: true,
        official: true
      },
      bl: {
        allCanton: true,
        official: true
      },
      bs: {
        allCanton: true,
        official: true
      },
      fr: {
        allCanton: true,
        official: true
      },
      ge: {
        allCanton: true,
        official: true
      },
      gl: {
        allCanton: true,
        official: true
      },
      gr: {
        allCanton: true,
        official: true
      },
      ju: {
        allCanton: true,
        official: true
      },
      lu: {
        allCanton: true,
        official: true
      },
      ne: {
        allCanton: true,
        official: true
      },
      nw: {
        allCanton: true,
        official: true
      },
      ow: {
        allCanton: true,
        official: true
      },
      sg: {
        allCanton: true,
        official: true
      },
      sh: {
        allCanton: true,
        official: true
      },
      so: {
        allCanton: true,
        official: true
      },
      sz: {
        allCanton: true,
        official: true
      },
      tg: {
        allCanton: true,
        official: true
      },
      ti: {
        allCanton: true,
        official: true
      },
      ur: {
        allCanton: true,
        official: true
      },
      vd: {
        allCanton: true,
        official: true
      },
      vs: {
        allCanton: true,
        official: true
      },
      zg: {
        allCanton: true,
        official: true
      }
    },
    date: {
      day: 1,
      month: 8
    },
    link: {
      de: 'https://de.m.wikipedia.org/wiki/Bundesfeier',
      en: 'https://en.wikipedia.org/wiki/Swiss_National_Day',
      fr: 'https://fr.wikipedia.org/wiki/F%C3%AAte_nationale_suisse',
      it: 'https://it.m.wikipedia.org/wiki/Festa_nazionale_svizzera'
    },
    title: {
      de: 'Bundesfeier',
      en: 'Swiss National Day',
      fr: 'Fête nationale Suisse',
      it: 'Festa nazionale della Svizzera'
    }
  },

  // 15.08. Maria Himmelfahrt
  {
    cantons: {
      ag: {
        allCanton: false,
        official: true
      },
      ai: {
        allCanton: true,
        official: true
      },
      bl: {
        allCanton: false,
        official: true
      },
      fr: {
        allCanton: false,
        official: true
      },
      gr: {
        allCanton: false,
        official: true
      },
      ju: {
        allCanton: true,
        official: true
      },
      lu: {
        allCanton: true,
        official: true
      },
      nw: {
        allCanton: true,
        official: true
      },
      ow: {
        allCanton: true,
        official: true
      },
      so: {
        allCanton: false,
        official: true
      },
      sz: {
        allCanton: true,
        official: true
      },
      ti: {
        allCanton: true,
        official: true
      },
      ur: {
        allCanton: true,
        official: true
      },
      vs: {
        allCanton: true,
        official: true
      },
      zg: {
        allCanton: true,
        official: true
      }
    },
    date: {
      day: 15,
      month: 8
    },
    link: {
      de: 'https://de.m.wikipedia.org/wiki/Maria_Himmelfahrt',
      en: 'https://en.wikipedia.org/wiki/Assumption_of_Mary',
      fr: 'https://fr.wikipedia.org/wiki/Assomption',
      it: 'https://it.m.wikipedia.org/wiki/Assunzione'
    },
    title: {
      de: 'Mariä Himmelfahrt',
      en: 'Assumption of Mary',
      fr: 'Assomption',
      it: 'Assunzione'
    }
  },

  // 22.09. Mauritiustag
  {
    cantons: {
      ai: {
        allCanton: false,
        official: false
      }
    },
    date: {
      day: 22,
      month: 9
    },
    link: {
      de: 'https://de.m.wikipedia.org/wiki/Kanton_Appenzell_Innerrhoden',
      en: 'https://de.m.wikipedia.org/wiki/Kanton_Appenzell_Innerrhoden',
      fr: 'https://de.m.wikipedia.org/wiki/Kanton_Appenzell_Innerrhoden',
      it: 'https://de.m.wikipedia.org/wiki/Kanton_Appenzell_Innerrhoden'
    },
    title: {
      de: 'Mauritiustag',
      en: 'Mauritiustag',
      fr: 'Mauritiustag',
      it: 'Mauritiustag'
    }
  },

  // 25.09. Bruderklausenfest
  {
    cantons: {
      ow: {
        allCanton: true,
        official: false
      }
    },
    date: {
      day: 25,
      month: 9
    },
    link: {
      de: 'https://de.m.wikipedia.org/wiki/Niklaus_von_Flüe',
      en: 'https://en.wikipedia.org/wiki/Nicholas_of_Fl%C3%BCe',
      fr: 'https://fr.wikipedia.org/wiki/Nicolas_de_Flue',
      it: 'https://de.m.wikipedia.org/wiki/Niklaus_von_Flüe'
    },
    title: {
      de: 'Bruderklausenfest',
      en: 'Saint Nicholas of Flüe Day',
      fr: 'Fête de Saint-Nicolas de Flue',
      it: 'Bruderklausenfest'
    }
  },

  // 30.09. St. Ursentag
  {
    cantons: {
      so: {
        allCanton: false,
        memo: {
          de: 'Nur in der Stadt Solothurn',
          en: 'Nur in der Stadt Solothurn',
          fr: 'Nur in der Stadt Solothurn',
          it: 'Nur in der Stadt Solothurn'
        },
        official: true
      }
    },
    date: {
      day: 30,
      month: 9
    },
    link: {
      de: 'https://de.wikipedia.org/wiki/Ursus_von_Solothurn',
      en: 'https://de.wikipedia.org/wiki/Ursus_von_Solothurn',
      fr: 'https://de.wikipedia.org/wiki/Ursus_von_Solothurn',
      it: 'https://de.wikipedia.org/wiki/Ursus_von_Solothurn'
    },
    title: {
      de: 'St. Ursentag',
      en: 'St. Ursentag',
      fr: 'St. Ursentag',
      it: 'St. Ursentag'
    }
  },

  // 02.10. Schutzengelfest
  {
    cantons: {
      lu: {
        allCanton: false,
        memo: {
          de: 'Nur Stadt Luzern',
          en: 'Nur Stadt Luzern',
          fr: 'Nur Stadt Luzern',
          it: 'Nur Stadt Luzern'
        },
        official: true
      }
    },
    date: {
      day: 2,
      month: 10
    },
    link: {
      de: 'https://de.wikipedia.org/wiki/Schutzengelfest',
      en: 'https://de.wikipedia.org/wiki/Schutzengelfest',
      fr: 'https://de.wikipedia.org/wiki/Schutzengelfest',
      it: 'https://de.wikipedia.org/wiki/Schutzengelfest'
    },
    title: {
      de: 'Schutzengelfest',
      en: 'Schutzengelfest',
      fr: 'Schutzengelfest',
      it: 'Schutzengelfest'
    }
  },

  // 01.11. Allerheiligen
  {
    cantons: {
      ag: {
        allCanton: false,
        official: true
      },
      ai: {
        allCanton: true,
        official: true
      },
      fr: {
        allCanton: false,
        official: true
      },
      gl: {
        allCanton: true,
        official: true
      },
      gr: {
        allCanton: false,
        official: true
      },
      ju: {
        allCanton: true,
        official: true
      },
      lu: {
        allCanton: true,
        official: true
      },
      nw: {
        allCanton: true,
        official: true
      },
      ow: {
        allCanton: true,
        official: true
      },
      sg: {
        allCanton: true,
        official: true
      },
      so: {
        allCanton: false,
        official: true
      },
      sz: {
        allCanton: true,
        official: true
      },
      ti: {
        allCanton: true,
        official: true
      },
      ur: {
        allCanton: true,
        official: true
      },
      vs: {
        allCanton: true,
        official: true
      },
      zg: {
        allCanton: true,
        official: true
      }
    },
    date: {
      day: 1,
      month: 11
    },
    link: {
      de: 'https://de.m.wikipedia.org/wiki/Allerheiligen',
      en: 'https://en.wikipedia.org/wiki/All_Saints_Day',
      fr: 'https://fr.wikipedia.org/wiki/Toussaint',
      it: 'https://it.m.wikipedia.org/wiki/Ognissanti'
    },
    title: {
      de: 'Allerheiligen',
      en: 'All Saints\' Day',
      fr: 'La Toussaint',
      it: 'Ognissanti'
    }
  },

  // 08.12. Maria Empfängnis
  {
    cantons: {
      ag: {
        allCanton: false,
        official: true
      },
      ai: {
        allCanton: true,
        official: true
      },
      fr: {
        allCanton: false,
        official: true
      },
      gr: {
        allCanton: false,
        official: true
      },
      lu: {
        allCanton: true,
        official: true
      },
      nw: {
        allCanton: true,
        official: true
      },
      ow: {
        allCanton: true,
        official: true
      },
      so: {
        allCanton: false,
        official: true
      },
      sz: {
        allCanton: true,
        official: true
      },
      ti: {
        allCanton: true,
        official: true
      },
      ur: {
        allCanton: true,
        official: true
      },
      vs: {
        allCanton: true,
        official: true
      },
      zg: {
        allCanton: true,
        official: true
      }
    },
    date: {
      day: 8,
      month: 12
    },
    link: {
      de: 'https://de.m.wikipedia.org/wiki/Unbefleckte_Empf%C3%A4ngnis',
      en: 'https://en.wikipedia.org/wiki/Immaculate_Conception',
      fr: 'https://fr.wikipedia.org/wiki/Immacul%C3%A9e_conception',
      it: 'https://it.m.wikipedia.org/wiki/Immacolata_Concezione'
    },
    title: {
      de: 'Mariä Empfängnis',
      en: 'Immaculate Conception',
      fr: 'Immaculée Conception',
      it: 'Immacolata Concezione'
    }
  },

  // 12.12. Escalade de Geneve
  {
    cantons: {
      ge: {
        allCanton: true,
        official: false
      }
    },
    date: {
      day: 12,
      month: 12
    },
    link: {
      de: 'https://de.m.wikipedia.org/wiki/Escalade_de_Genève',
      en: 'https://de.m.wikipedia.org/wiki/Escalade_de_Genève',
      fr: 'https://de.m.wikipedia.org/wiki/Escalade_de_Genève',
      it: 'https://de.m.wikipedia.org/wiki/Escalade_de_Genève'
    },
    title: {
      de: 'Escalade de Genève',
      en: 'Escalade de Genève',
      fr: 'Escalade de Genève',
      it: 'Escalade de Genève'
    }
  },

  // 25.12. Weihnachtstag
  {
    cantons: {
      ag: {
        allCanton: true,
        official: true
      },
      ai: {
        allCanton: true,
        official: true
      },
      ar: {
        allCanton: true,
        official: true
      },
      be: {
        allCanton: true,
        official: true
      },
      bl: {
        allCanton: true,
        official: true
      },
      bs: {
        allCanton: true,
        official: true
      },
      fr: {
        allCanton: true,
        official: true
      },
      ge: {
        allCanton: true,
        official: true
      },
      gl: {
        allCanton: true,
        official: true
      },
      gr: {
        allCanton: true,
        official: true
      },
      ju: {
        allCanton: true,
        official: true
      },
      lu: {
        allCanton: true,
        official: true
      },
      ne: {
        allCanton: true,
        official: true
      },
      nw: {
        allCanton: true,
        official: true
      },
      ow: {
        allCanton: true,
        official: true
      },
      sg: {
        allCanton: true,
        official: true
      },
      sh: {
        allCanton: true,
        official: true
      },
      so: {
        allCanton: true,
        official: true
      },
      sz: {
        allCanton: true,
        official: true
      },
      tg: {
        allCanton: true,
        official: true
      },
      ti: {
        allCanton: true,
        official: true
      },
      ur: {
        allCanton: true,
        official: true
      },
      vd: {
        allCanton: true,
        official: true
      },
      vs: {
        allCanton: true,
        official: true
      },
      zg: {
        allCanton: true,
        official: true
      },
      zh: {
        allCanton: true,
        official: true
      }
    },
    date: {
      day: 25,
      month: 12
    },
    link: {
      de: 'https://de.m.wikipedia.org/wiki/Weihnachtstag',
      en: 'https://en.wikipedia.org/wiki/Christmas_Day',
      fr: 'https://fr.m.wikipedia.org/wiki/Noël',
      it: 'https://it.m.wikipedia.org/wiki/Natale'
    },
    title: {
      de: 'Weihnachtstag',
      en: 'Christmas',
      fr: 'Noël',
      it: 'Natale'
    }
  },

  // 26.12. Stephanstag
  {
    cantons: {
      ag: {
        allCanton: false,
        official: true
      },
      ai: {
        allCanton: true,
        official: true
      },
      ar: {
        allCanton: true,
        official: true
      },
      be: {
        allCanton: true,
        official: true
      },
      bl: {
        allCanton: true,
        official: true
      },
      bs: {
        allCanton: true,
        official: true
      },
      fr: {
        allCanton: true,
        official: false
      },
      gl: {
        allCanton: true,
        official: true
      },
      gr: {
        allCanton: true,
        official: true
      },
      lu: {
        allCanton: true,
        official: true
      },
      nw: {
        allCanton: true,
        official: false
      },
      ow: {
        allCanton: true,
        official: false
      },
      sg: {
        allCanton: true,
        official: true
      },
      sh: {
        allCanton: true,
        official: true
      },
      so: {
        allCanton: false,
        official: true
      },
      sz: {
        allCanton: true,
        official: true
      },
      tg: {
        allCanton: true,
        official: true
      },
      ti: {
        allCanton: true,
        official: true
      },
      ur: {
        allCanton: true,
        official: true
      },
      zg: {
        allCanton: true,
        official: false
      },
      zh: {
        allCanton: true,
        official: true
      }
    },
    date: {
      day: 26,
      month: 12
    },
    link: {
      de: 'https://de.m.wikipedia.org/wiki/Stephanstag',
      en: 'https://en.wikipedia.org/wiki/St_Stephen%27s_Day',
      fr: 'https://fr.wikipedia.org/wiki/%C3%89tienne_(premier_martyr)',
      it: 'https://it.m.wikipedia.org/wiki/Santo_Stefano'
    },
    title: {
      de: 'Stephanstag',
      en: 'St Stephen\'s Day',
      fr: 'Saint Etienne',
      it: 'Santo Stefano'
    }
  },

  // 31.12. Wiederherstellung der Republik
  {
    cantons: {
      ge: {
        allCanton: true,
        official: false
      }
    },
    date: {
      day: 31,
      month: 12
    },
    link: {
      de: 'https://de.m.wikipedia.org/wiki/Kanton_Genf',
      en: 'https://de.m.wikipedia.org/wiki/Kanton_Genf',
      fr: 'https://fr.wikipedia.org/wiki/Canton_de_Gen%C3%A8ve',
      it: 'https://de.m.wikipedia.org/wiki/Kanton_Genf'
    },
    title: {
      de: 'Wiederherstellung der Republik',
      en: 'Restoration Day',
      fr: 'La restauration de la République à Genève',
      it: 'Restauration de la République Genève'
    }
  }
];

module.exports = holidays;
