import { Play } from 'phosphor-react'
import minus from '../../assets/Minus.svg'
import plus from '../../assets/Plus.svg'
import { useForm } from 'react-hook-form'
import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  Separator,
} from './styles'

export const Home = () => {
  const { register, handleSubmit } = useForm()
  const handleFormSubmit = (data: any) => {
    console.log(data)
  }
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
            <img className="minus" src={minus} alt="" />
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
            <img className="plus" src={plus} alt="" />
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

        <button type="submit">
          <Play size={24} />
          Começar
        </button>
      </form>
    </HomeContainer>
  )
}
