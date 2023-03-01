import { HeaderContainer } from './styles'
import logoIgnite from '../../assets/logo-ignite.svg'
import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink to="/">
          <Timer size={26} />
        </NavLink>
        <NavLink to="/history">
          <Scroll size={26} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
