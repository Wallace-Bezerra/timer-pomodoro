import { useContext } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { Cycle, CycleContext } from '../../../../context/CycleContext'
import { HandPalm, Play } from 'phosphor-react'
import { FormContainer, Minus, Plus, ButtonCycle } from './styles'
import { Countdown } from '../Countdown'
import minus from '../../../../assets/Minus.svg'
import plus from '../../../../assets/Plus.svg'

const newCicleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe uma tarefa.'),
  // minutesAmount: zod.number().min(1).max(60).step(5, 'Erro step'),
  minutesAmount: zod.number().min(1).max(60),
})
export type newCicleFormData = zod.infer<typeof newCicleFormValidationSchema>

export const NewCycleForm = () => {
  const { register, handleSubmit, watch, reset, setValue, getValues } =
    useForm<newCicleFormData>({
      resolver: zodResolver(newCicleFormValidationSchema),
      defaultValues: {
        task: '',
        minutesAmount: 0,
      },
    })
  const { setActiveCycleId, setCycles, activeCycle, activeCycleId } =
    useContext(CycleContext)

  const handleInterrupt = () => {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
    setActiveCycleId(null)
  }

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

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <FormContainer>
        <label htmlFor="task">Vou trabalhar em</label>
        <input
          list="suggestion"
          type="text"
          id="task"
          placeholder="Dê um nome para o seu projeto"
          disabled={!!activeCycle}
          {...register('task')}
        />
        <datalist id="suggestion">
          <option>Projeto 1</option>
          <option>Projeto 2</option>
        </datalist>
        <label htmlFor="minutesAmount">durante</label>
        <div className="wrapperMinutes">
          <Minus
            type="button"
            disabled={!!activeCycle}
            onClick={() => {
              let stateValue = getValues('minutesAmount')
              if (!stateValue) {
                stateValue = 0
              }
              setValue('minutesAmount', stateValue && stateValue - 5)
            }}
          >
            <img src={minus} alt="" />
          </Minus>

          <input
            type="number"
            id="minutesAmount"
            min={1}
            max={60}
            maxLength={2}
            // step={5}
            disabled={!!activeCycle}
            placeholder="00"
            {...register('minutesAmount', { valueAsNumber: true })}
          />
          <Plus
            type="button"
            disabled={!!activeCycle}
            onClick={() => {
              let stateValue = getValues('minutesAmount')
              if (!stateValue) {
                stateValue = 0
              }
              setValue('minutesAmount', stateValue >= 60 ? 60 : stateValue + 5)
            }}
          >
            <img src={plus} alt="" />
          </Plus>
        </div>

        <span>minutos.</span>
      </FormContainer>

      <Countdown />

      {!activeCycle && (
        <ButtonCycle
          type="submit"
          activeCycle={!activeCycle}
          disabled={isSubmitDisabled}
        >
          <Play size={24} />
          Começar
        </ButtonCycle>
      )}
      {activeCycle && (
        <ButtonCycle
          type="button"
          activeCycle={!activeCycle}
          onClick={handleInterrupt}
        >
          <HandPalm size={24} />
          Interromper
        </ButtonCycle>
      )}
    </form>
  )
}
