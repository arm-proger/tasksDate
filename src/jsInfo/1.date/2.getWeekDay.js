// Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.

const weekDays = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']

const getWeekDay = (getDate) => weekDays[getDate.getDay()]

let date = new Date(2012, 0, 3) // 3 Jan 2012
console.log(getWeekDay(date)) // should output "TU"
