export type LoginType = {
  email: string
  password: string
}
export type SignUpType = {
  email: string
  password: string
}

export type SetupProps = {
  formStep: number
  nextFormStep: () => void
  // prevFormStep: () => void
}

export type FillProfileType = {
  fullName: string
  userName: string
  birthday: string
  gender: string
  phoneNumber: string
  occupation: string
}
