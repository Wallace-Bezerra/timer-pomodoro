import { Play } from 'phosphor-react'
import minus from '../../assets/Minus.svg'
import plus from '../../assets/Plus.svg'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { differenceInSeconds } from 'date-fns'
import * as zod from 'zod'
import { useEffect, useState } from 'react'
import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  Separator,
} from './styles'

const newCicleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe uma tarefa.'),
  minutesAmount: zod.number().min(5).max(60).step(5, 'Erro step'),
})
// interface newCicleFormData {
//   task: string
//   minutesAmount: number
// }
type newCicleFormData = zod.infer<typeof newCicleFormValidationSchema>

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
}
export const Home = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    // formState,
    setValue,
    getValues,
  } = useForm<newCicleFormData>({
    resolver: zodResolver(newCicleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const [cycles, setCycles] = useState<Cycle[]>([])
  const [ActiveCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondPassed, setAmountSecondPassed] = useState(0)
  const ActiveCycle = cycles.find((cycle) => {
    return cycle.id === ActiveCycleId
  })
  useEffect(() => {
    if (ActiveCycle) {
      setInterval(() => {
        setAmountSecondPassed(
          differenceInSeconds(new Date(), ActiveCycle.startDate),
        )
      }, 1000)
    }
  }, [ActiveCycle])

  const totalSeconds = ActiveCycle ? ActiveCycle.minutesAmount * 60 : 0
  const currentSeconds = ActiveCycle ? totalSeconds - amountSecondPassed : 0
  const amountMinutes = ActiveCycle ? Math.floor(currentSeconds / 60) : 0
  const amountSeconds = ActiveCycle ? currentSeconds % 60 : 0

  const minutes = String(amountMinutes).padStart(2, '0')
  const seconds = String(amountSeconds).padStart(2, '0')

  console.log(minutes, 'total de minutos')
  console.log(seconds, 'total de segundos')
  const handleFormSubmit = (data: newCicleFormData) => {
    const id = new Date().getTime().toString()
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }
    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)

    reset()
  }
  const watchForm = watch('task')
  const isSubmitDisabled = !watchForm
  console.log(ActiveCycle)
  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <input
            list="suggestion"
            type="text"
            id="task"
            placeholder="Dê um nome para o seu projeto"
            {...register('task')}
          />
          <datalist id="suggestion">
            <option>Projeto 1</option>
            <option>Projeto 2</option>
          </datalist>
          <label htmlFor="minutesAmount">durante</label>
          <div className="wrapperMinutes">
            <img
              className="minus"
              src={minus}
              onClick={() => {
                let stateValue = getValues('minutesAmount')
                if (!stateValue) {
                  stateValue = 0
                }
                setValue('minutesAmount', stateValue && stateValue - 5)
              }}
              alt=""
            />
            <input
              type="number"
              id="minutesAmount"
              min={5}
              max={60}
              maxLength={2}
              step={5}
              placeholder="00"
              {...register('minutesAmount', { valueAsNumber: true })}
            />
            <img
              className="plus"
              src={plus}
              onClick={() => {
                let stateValue = getValues('minutesAmount')
                if (!stateValue) {
                  stateValue = 0
                }
                setValue(
                  'minutesAmount',
                  stateValue >= 60 ? 60 : stateValue + 5,
                )
              }}
              alt=""
            />
          </div>

          <span>minutos.</span>
        </FormContainer>

        <CountDownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separator id="separator">:</Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountDownContainer>

        <button type="submit" disabled={isSubmitDisabled}>
          <Play size={24} />
          Começar
        </button>
      </form>
    </HomeContainer>
  )
}
