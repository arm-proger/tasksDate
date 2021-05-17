const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const formatDate = (date) => {
  const year = date.getFullYear(),
    month = monthNames[date.getMonth()],
    firstDay = new Date(`${date.getMonth() + 1}/01/${year}`),
    day = Math.floor((date - firstDay) / 864e5 + 1),
    newDate = `${day} ${month} ${year}`

  return newDate
}

console.log('Actual output: ', formatDate(new Date('2020-08-25')))
console.log('Expected output', '25 Aug 2020')
