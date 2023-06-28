import { create } from "zustand"
import { persist } from "zustand/middleware"

type defaultValues = {
  gender: "male" | "female" | "random"
  age: number[]
  //   location: string
}

interface FilterUsersState {
  filterUsers: defaultValues
  setFilters: (data: defaultValues) => void
  resetFilters: () => void
}

export const useFilterUsersStore = create<FilterUsersState>()(
  persist(
    (set) => ({
      filterUsers: {
        gender: "random",
        age: [18, 80],
        // location: "",
      },

      //   set filters
      setFilters: (data: defaultValues) =>
        set((state) => ({
          filterUsers: {
            gender: data.gender,
            age: data.age,
            // location: data.location,
          },
        })),

      resetFilters: () =>
        set((state) => ({
          filterUsers: {
            gender: "random",
            age: [18, 80],
            // location: data.location,
          },
        })),
    }),
    {
      name: "filter_users",
    }
  )
)
