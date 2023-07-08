import { UserData, UserProfile } from "@/types"

export function DetermineMatchPercentage(other: UserData, you: UserData) {
  // obtains the preferences and interests of both users
  const otherPreferences = other.preferences
  const yourPreferences = you.preferences
  const otherInterests = other.interests
  const yourInterests = you.interests

  //   filters the preferences to create a new array where prefernces shared by the two users is stored
  //    It filters the elements from otherPrefernces that are also present in yourPreferences, resulting in the sharedPreferences array.
  const sharedPreferences = otherPreferences.filter((pref) =>
    yourPreferences.includes(pref)
  )

  //   same as logic above but with interests
  const sharedInterests = otherInterests.filter((interest) =>
    yourInterests.includes(interest)
  )

  //   The sharedPreferencesPercentage is calculated by dividing the length of sharedPreferences by the maximum length of either otherPreferences or yourPreferences, and then multiplying by 100 to get a percentage.

  const sharedPreferencesPercentage =
    (sharedPreferences.length /
      Math.max(otherPreferences.length, yourPreferences.length)) *
    100

  // same as above but with interests

  const sharedInterestsPercentage =
    (sharedInterests.length /
      Math.max(otherInterests.length, yourInterests.length)) *
    100

  // final match percentage is calculated by adding both percentages and otaining the average
  const matchPercentage =
    (sharedPreferencesPercentage + sharedInterestsPercentage) / 2

  return matchPercentage
}
