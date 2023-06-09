export function getGreetingTime() {
  let currentTime = new Date()
  let currentHour = currentTime.getHours()

  if (currentHour >= 5 && currentHour < 12) {
    return "Good morning"
  } else if (currentHour >= 12 && currentHour < 18) {
    return "Good afternoon"
  } else {
    return "Good evening"
  }
}
