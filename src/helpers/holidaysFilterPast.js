const filterPast = (holidays) => {
  const today = (new Date())
    .getTime();

  return holidays.filter((holiday) => {
    const firstDayDate = new Date(holiday.dateObject)
      .getTime();

    return today < firstDayDate;
  });
};

export default filterPast;
