import { createContext } from "react"

export const GlobalAnimationContext = createContext ();

export default function AnimationProvider({ children }) {

  return (
    <GlobalAnimationContext.Provider value={{}}>
      {children}
    </GlobalAnimationContext.Provider>
  )
}
