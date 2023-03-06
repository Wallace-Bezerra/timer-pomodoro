import {
  createContext,
  SetStateAction,
  Dispatch,
  useState,
  ReactNode,
} from 'react'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  completedDate?: Date
}
interface CycleContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  setActiveCycleId: Dispatch<SetStateAction<string | null>>
  setCycles: Dispatch<SetStateAction<Cycle[]>>
}
interface CycleContextProviderProps {
  children: ReactNode
}
export const CycleContext = createContext<CycleContextType>({
  cycles: [],
  activeCycle: undefined,
  activeCycleId: null,
  setActiveCycleId: () => {},
  setCycles: () => {},
})

export const CycleContextProvider = ({
  children,
}: CycleContextProviderProps) => {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  const activeCycle = cycles.find((cycle) => {
    return cycle.id === activeCycleId
  })

  return (
    <CycleContext.Provider
      value={{
        cycles,
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
