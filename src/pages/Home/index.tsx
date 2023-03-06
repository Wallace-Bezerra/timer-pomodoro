import { NewCycleForm } from './components/NewCycleForm'
import { CycleContextProvider } from '../../context/CycleContext'
import { HomeContainer } from './styles'

export const Home = () => {
  return (
    <CycleContextProvider>
      <HomeContainer>
        <NewCycleForm />
      </HomeContainer>
    </CycleContextProvider>
  )
}
