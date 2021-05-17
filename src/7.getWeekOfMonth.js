const getWeekOfMonth = (date) => {
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1),
        monthDay = (date - firstDayOfMonth) / 86400000,
        weekNum = Math.ceil((monthDay + 1) / 7)


  return weekNum
};


const result = getWeekOfMonth(new Date(2017, 10, 9)); // => 2
console.log(result)