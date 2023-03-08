import { differenceInSeconds, parseISO } from 'date-fns'
import {
  createContext,
  Dispatch,
  ReactNode,
  useCallback,
  useEffect,
  useReducer,
  useState,
} from 'react'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: string
  interruptedDate?: Date
  completedDate?: Date
}
interface CycleContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  // setActiveCycleId: Dispatch<SetStateAction<string | null>>
  dispatch: Dispatch<any>
  minutes: string
  seconds: string
}
interface CycleContextProviderProps {
  children: ReactNode
}
export const CycleContext = createContext<CycleContextType>({
  cycles: [],
  activeCycle: undefined,
  dispatch: () => {},
  minutes: '',
  seconds: '',
})

interface CycleState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export const CycleContextProvider = ({
  children,
}: CycleContextProviderProps) => {
  const CycleReducer = (state: CycleState, action: any) => {
    switch (action.type) {
      case 'ADD_NEW_CYCLE':
        return {
          ...state,
          activeCycleId: action.payload.id,
          cycles: [...state.cycles, action.payload],
        }
      case 'INTERRUPTED_CYCLE':
        return {
          ...state,
          cycles: state.cycles.map((cycle) => {
            if (cycle.id === state.activeCycleId) {
              return { ...cycle, interruptedDate: new Date() }
            } else {
              return cycle
            }
          }),
          activeCycleId: null,
        }
      case 'FINISHED_CYCLE':
        return {
          ...state,
          cycles: state.cycles.map((cycle) => {
            if (cycle.id === state.activeCycleId) {
              return { ...cycle, completedDate: new Date() }
            } else {
              return cycle
            }
          }),
          activeCycleId: null,
        }
      default:
        return state
    }
  }
  const [cycleStates, dispatch] = useReducer(CycleReducer, {
    cycles: JSON.parse(localStorage.getItem('cycles')!) || [],
    activeCycleId: null,
  })
  console.log(cycleStates)
  // const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const { activeCycleId, cycles } = cycleStates
  const activeCycle = cycleStates.cycles.find((cycle) => {
    return cycle.id === activeCycleId
  })

  const secondsNow = useCallback(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), parseISO(activeCycle.startDate))
    }
    return 0
  }, [activeCycle])
  const [amountSecondPassed, setAmountSecondPassed] = useState(secondsNow)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondPassed : 0
  const amountMinutes = activeCycle ? Math.floor(currentSeconds / 60) : 0
  const amountSeconds = activeCycle ? currentSeconds % 60 : 0

  const minutes = String(amountMinutes).padStart(2, '0')
  const seconds = String(amountSeconds).padStart(2, '0')
  console.log(amountMinutes, 'minutos')
  console.log(amountSeconds, 'segundos')
  console.log(amountSecondPassed, 'minutos passados')
  useEffect(() => {
    let timer: number | undefined
    if (activeCycle) {
      timer = setInterval(() => {
        const secondsInDifference = differenceInSeconds(
          new Date(),
          parseISO(activeCycle.startDate),
        )

        setAmountSecondPassed((state) => secondsInDifference)

        if (secondsInDifference >= totalSeconds) {
          dispatch({ type: 'FINISHED_CYCLE' })
          // setCycles((state) =>
          //   state.map((cycle) => {
          //     if (cycle.id === activeCycleId) {
          //       return { ...cycle, completedDate: new Date() }
          //     } else {
          //       return cycle
          //     }
          //   }),
          // )
          // setActiveCycleId(null)
        }
      }, 1000)
      document.title = `${minutes}:${seconds}`
    } else {
      document.title = 'Pomodoro Timer'
    }
    return () => {
      clearInterval(timer)
      setAmountSecondPassed(secondsNow)
    }
  }, [activeCycle, totalSeconds, dispatch, minutes, seconds, secondsNow])

  useEffect(() => {
    localStorage.setItem('cycles', JSON.stringify(cycleStates.cycles))
  }, [cycleStates.cycles])

  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      if (activeCycle) {
        dispatch({ type: 'INTERRUPTED_CYCLE' })
      }
    })
  }, [activeCycle])
  return (
    <CycleContext.Provider
      value={{
        cycles,
        activeCycle,
        dispatch,
        minutes,
        seconds,
      }}
    >
      {children}
    </CycleContext.Provider>
  )
}
