import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"

const initData = {
  country: "",
  fullName: "",
  userName: "",
  birthday: "",
  gender: "",
  phoneNumber: "",
  occupation: "",
}

export type SetUpContextType = {
  setUpData: {
    country: string
    fullName: string
    userName: string
    birthday: string
    gender: string
    phoneNumber: string
    occupation: string
  }
  setSetUpValues: (values: Partial<typeof initData>) => void
}
export type SetUpContextProviderType = {
  children: ReactNode
}

export const SetUpContext = createContext<SetUpContextType>(
  {} as SetUpContextType
)

export const SetUpContextProvider = ({
  children,
}: SetUpContextProviderType) => {
  const [setUpData, setSetUpData] = useState(initData)

  const setSetUpValues = (values: Partial<typeof initData>) => {
    setSetUpData((prevValues) => ({
      ...prevValues,
      ...values,
    }))
  }

  useEffect(() => {
    console.log(setUpData)
  }, [setUpData])

  return (
    <SetUpContext.Provider value={{ setUpData, setSetUpValues }}>
      {children}
    </SetUpContext.Provider>
  )
}

export const useSetUpAccountData = () => useContext(SetUpContext)
