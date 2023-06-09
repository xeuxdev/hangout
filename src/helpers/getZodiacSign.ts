export function getZodiacSign(birthdate: string) {
  const date = new Date(birthdate)
  const month = date.getMonth() + 1 // January is 0 in JavaScript, so we add 1

  if (
    (month === 1 && date.getDate() >= 20) ||
    (month === 2 && date.getDate() <= 18)
  ) {
    return "Aquarius"
  } else if (
    (month === 2 && date.getDate() >= 19) ||
    (month === 3 && date.getDate() <= 20)
  ) {
    return "Pisces"
  } else if (
    (month === 3 && date.getDate() >= 21) ||
    (month === 4 && date.getDate() <= 19)
  ) {
    return "Aries"
  } else if (
    (month === 4 && date.getDate() >= 20) ||
    (month === 5 && date.getDate() <= 20)
  ) {
    return "Taurus"
  } else if (
    (month === 5 && date.getDate() >= 21) ||
    (month === 6 && date.getDate() <= 20)
  ) {
    return "Gemini"
  } else if (
    (month === 6 && date.getDate() >= 21) ||
    (month === 7 && date.getDate() <= 22)
  ) {
    return "Cancer"
  } else if (
    (month === 7 && date.getDate() >= 23) ||
    (month === 8 && date.getDate() <= 22)
  ) {
    return "Leo"
  } else if (
    (month === 8 && date.getDate() >= 23) ||
    (month === 9 && date.getDate() <= 22)
  ) {
    return "Virgo"
  } else if (
    (month === 9 && date.getDate() >= 23) ||
    (month === 10 && date.getDate() <= 22)
  ) {
    return "Libra"
  } else if (
    (month === 10 && date.getDate() >= 23) ||
    (month === 11 && date.getDate() <= 21)
  ) {
    return "Scorpio"
  } else if (
    (month === 11 && date.getDate() >= 22) ||
    (month === 12 && date.getDate() <= 21)
  ) {
    return "Sagittarius"
  } else {
    return "Capricorn"
  }
}
