// Each year has 365 or 366 days. Given a string date representing a Gregorian calendar date formatted as month/day/year,return the day-number of the year. All input strings in the tests are valid dates.

const dayOfYear = (date) => {
  const dateYear = date.trim().slice(-4, date.length),
    firstDay = new Date(`01/01/${dateYear}`),
    thisDay = new Date(date)

  const day = (thisDay - firstDay) / 864e5 + 1

  return day
}

console.log(dayOfYear('12/13/2020')) // 348
console.log(dayOfYear("12/17/2020")) // 352
console.log(dayOfYear("11/16/2020")) // 321
console.log(dayOfYear("1/9/2019")) // 9
console.log(dayOfYear("3/1/2004")) // 61
console.log(dayOfYear("12/31/2000")) // 366
