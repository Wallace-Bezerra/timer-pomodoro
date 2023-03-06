import { createContext, SetStateAction, Dispatch, useState } from 'react'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  completedDate?: Date
}
interface CycleContextType {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  setActiveCycleId: Dispatch<SetStateAction<string | null>>
  setCycles: Dispatch<SetStateAction<Cycle[]>>
}
export const CycleContext = createContext<CycleContextType>({
  activeCycle: undefined,
  activeCycleId: null,
  setActiveCycleId: () => {},
  setCycles: () => {},
})

export const CycleContextProvider = ({ children }: any) => {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  const activeCycle = cycles.find((cycle) => {
    return cycle.id === activeCycleId
  })

  return (
    <CycleContext.Provider
      value={{
        activeCycle,
        activeCycleId,
        setActiveCycleId,
        setCycles,
      }}
    >
      {children}
    </CycleContext.Provider>
  )
}
