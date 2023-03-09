import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    gap: 20px;
    color: ${({ theme }) => theme['gray-100']};
    a {
      display: flex;
      padding-block: 8px;
      border-bottom: 3px solid transparent;
      border-top: 3px solid transparent;
      transition: border 0.3s ease;
      &.active {
        color: ${({ theme }) => theme['green-500']};
      }
      &:focus {
        box-shadow: none;
      }
      &:hover {
        border-bottom: 3px solid ${({ theme }) => theme['green-500']};
      }
    }
  }
`
