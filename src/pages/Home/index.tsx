import { Play } from 'phosphor-react'
import minus from '../../assets/Minus.svg'
import plus from '../../assets/Plus.svg'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useState } from 'react'
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
  const ActiveCycle = cycles.find((cycle) => {
    return cycle.id === ActiveCycleId
  })

  const handleFormSubmit = (data: newCicleFormData) => {
    console.log(data)
    const id = new Date().getTime().toString()
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
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
          <span>0</span>
          <span>0</span>
          <Separator id="separator">:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <button type="submit" disabled={isSubmitDisabled}>
          <Play size={24} />
          Começar
        </button>
      </form>
    </HomeContainer>
  )
}
