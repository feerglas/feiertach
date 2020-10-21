const metaInfo = (options) => {
  const favicon = '/favicon.png';
  const title = 'feiertaCH';
  const author = 'Yves Tscherry';
  const twitterUser = '@feerglas';

  const {
    lang,
    route,
    description
  } = options;

  return {
    htmlAttrs: {
      lang
    },
    link: [
      {
        href: route,
        rel: 'canonical'
      }
    ],
    meta: [
      {
        content: author,
        name: 'author'
      },
      {
        content: description,
        name: 'description'
      },

      {
        content: 'website',
        property: 'og:type'
      },
      {
        content: title,
        property: 'og:title'
      },
      {
        content: description,
        property: 'og:description'
      },
      {
        content: route,
        property: 'og:url'
      },
      {
        content: favicon,
        property: 'og:image'
      },
      {
        content: favicon,
        name: 'twitter:card'
      },
      {
        content: title,
        name: 'twitter:title'
      },
      {
        content: description,
        name: 'twitter:description'
      },
      {
        content: twitterUser,
        name: 'twitter:site'
      },
      {
        content: twitterUser,
        name: 'twitter:creator'
      },
      {
        content: favicon,
        name: 'twitter:image'
      }
    ],
    title: description,
    titleTemplate: `${title} - %s`
  };
};

export default metaInfo;
