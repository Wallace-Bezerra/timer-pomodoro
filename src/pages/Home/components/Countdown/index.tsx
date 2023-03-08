import { useContext } from 'react'
import { CycleContext } from '../../../../context/CycleContext'
import { CountDownContainer, Separator } from './styles'

export const Countdown = () => {
  const { minutes, seconds } = useContext(CycleContext)

  // useEffect(() => {
  //   if (activeCycle) {
  //     document.title = `${minutes}:${seconds}`
  //   } else {
  //     document.title = 'Pomodoro Timer'
  //   }
  // }, [minutes, seconds, activeCycle])
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
