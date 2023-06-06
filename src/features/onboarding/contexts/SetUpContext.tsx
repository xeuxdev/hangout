import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"
import { setUpData } from "../types"

const initData = {
  country: "",
  fullName: "",
  userName: "",
  birthday: "",
  gender: "",
  phoneNumber: "",
  occupation: "",
  interests: [""],
  preferences: [""],
}

export type SetUpContextType = {
  setUpData: setUpData
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

  // for dev
  // useEffect(() => {
  //   console.log(setUpData)
  // }, [setUpData])

  return (
    <SetUpContext.Provider value={{ setUpData, setSetUpValues }}>
      {children}
    </SetUpContext.Provider>
  )
}

export const useSetUpAccountData = () => useContext(SetUpContext)
