const sortCantonsAscendingForLocale = (cantons, locale) => cantons.sort((a, b) => {
  const aUpper = a.node.name[locale].toUpperCase();
  const bUpper = b.node.name[locale].toUpperCase();

  if (aUpper < bUpper) {
    return -1;
  }

  if (aUpper > bUpper) {
    return 1;
  }

  return 0;
});

export default sortCantonsAscendingForLocale;
