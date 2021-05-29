const monthsName = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

function monthsInterval(startMonth, endMonth) {
  // Choose start date and end date
  const minDate = startMonth < endMonth ? startMonth : endMonth,
    maxDate = startMonth > endMonth ? startMonth : endMonth

  // Get start month
  const minMonth = minDate.getMonth()

  // Get distance of months
  const distanceMonth = Math.round((maxDate - minDate) / 2628e6)
  const months = []

  for (let i = 0; i <= distanceMonth; i++) {
    if (minMonth + i > 11) {
      months.push(monthsName[minMonth + i - 12])
    } else {
      months.push(monthsName[minMonth + i])
    }
  }
  return months
}

// let january = new Date(2017, 0, 1)
// let march = new Date(2017, 2, 1)
// console.log(monthsInterval(january, march))

let january2017 = new Date(2017, 0, 1)
let january2018 = new Date(2018, 0, 1)
console.log(monthsInterval(january2017, january2018))

// let january2017 = new Date(2017, 0, 1)
// let january2018 = new Date(2018, 0, 1)
// console.log(monthsInterval(january2017, january2018))
