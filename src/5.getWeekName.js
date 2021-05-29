const weekNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const getWeekName = (date) => {
  const thisDate = new Date(date.trim()),
    getThisWeek = thisDate.getDay()

  return weekNames[getThisWeek]
}

console.log(getWeekName('12/07/2016')) // Wednesday
console.log(getWeekName('09/04/2016')) // Sunday
console.log(getWeekName('12/08/2011')) // Thursday
