import { Play } from 'phosphor-react'
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
          type="text"
          id="task"
          placeholder="Dê um nome para o seu projeto"
        />
        <label htmlFor="minutesAmount">durante</label>
        <input type="text" id="minutesAmount" />
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
