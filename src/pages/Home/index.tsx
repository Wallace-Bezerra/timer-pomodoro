import { Play } from 'phosphor-react'
import minus from '../../assets/Minus.svg'
import plus from '../../assets/Plus.svg'
import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  Separator,
} from './styles'

export const Home = () => {
  return (
    <HomeContainer>
      <FormContainer>
        <label htmlFor="task">Vou trabalhar em</label>
        <input
          list="suggestion"
          type="text"
          id="task"
          placeholder="Dê um nome para o seu projeto"
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
    </HomeContainer>
  )
}
