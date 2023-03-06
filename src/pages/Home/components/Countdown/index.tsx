import { useContext, useEffect, useState } from 'react'
import { differenceInSeconds } from 'date-fns'
import { CycleContext } from '../../../../context/CycleContext'
import { CountDownContainer, Separator } from './styles'

export const Countdown = () => {
  const { activeCycle, activeCycleId, setActiveCycleId, setCycles } =
    useContext(CycleContext)
  const [amountSecondPassed, setAmountSecondPassed] = useState(0)
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondPassed : 0
  const amountMinutes = activeCycle ? Math.floor(currentSeconds / 60) : 0
  const amountSeconds = activeCycle ? currentSeconds % 60 : 0

  const minutes = String(amountMinutes).padStart(2, '0')
  const seconds = String(amountSeconds).padStart(2, '0')

  useEffect(() => {
    let timer: number | undefined
    if (activeCycle) {
      timer = setInterval(() => {
        const secondsInDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )
        setAmountSecondPassed(secondsInDifference)
        if (secondsInDifference >= totalSeconds) {
          setCycles((state) =>
            state.map((cycle) => {
              if (cycle.id === activeCycleId) {
                return { ...cycle, completedDate: new Date() }
              } else {
                return cycle
              }
            }),
          )
          setActiveCycleId(null)
        }
      }, 1000)
    }
    return () => {
      clearInterval(timer)
      setAmountSecondPassed(0)
    }
  }, [activeCycle, totalSeconds, activeCycleId, setActiveCycleId, setCycles])

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    } else {
      document.title = 'Pomodoro Timer'
    }
  }, [minutes, seconds, activeCycle])
  return (
    <CountDownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator id="separator">:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountDownContainer>
  )
}
