import { UserData, UserProfile } from "@/types"

export function DetermineYourMatch(users: UserProfile[], userData: UserData) {
  let matches: UserProfile[] = []

  // use scorres to determine match level?

  // match with preferences

  users.forEach((user, index) => {
    let userScore = 0
    if (user.preferences.includes(userData.preferences.toString())) {
      //   matches.push(user)
      userScore = 1
    } else {
      //   matches.pop()
      userScore = 0
    }

    if (userScore == 1) {
      matches.push(user)
    }
  })

  // match with interests

  users.map((user) => {
    let userScore = 0
    user.interests.map((interest) => {
      if (userData.interests.includes(interest)) {
        // score = 2
        userScore = 1
        // matches.push(user)
      } else {
        // score = 0.5
        userScore = 0.5
      }
    })

    if (userScore > 0.5) {
      matches.push(user)
    }
  })

  return matches
}
