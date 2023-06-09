export function getTime18YearsBack() {
  var currentDate = new Date(Date.now())
  var year = currentDate.getFullYear() - 18
  var month = currentDate.getMonth() + 1
  var day = currentDate.getDate()
  let currMonth
  let currDay

  if (month < 10) {
    currMonth = "0" + month
  }

  if (day < 10) {
    currDay = "0" + day
  }

  return year + "-" + currMonth + "-" + currDay
}
