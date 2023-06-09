export function calculateAge(birthdate: string) {
  const currentDate = new Date()
  const birthDate = new Date(birthdate)

  let age = currentDate.getFullYear() - birthDate.getFullYear()

  // Check if the birthday hasn't occurred yet this year
  const hasBirthdayPassed =
    currentDate.getMonth() > birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() >= birthDate.getDate())

  if (!hasBirthdayPassed) {
    age--
  }

  return age
}
