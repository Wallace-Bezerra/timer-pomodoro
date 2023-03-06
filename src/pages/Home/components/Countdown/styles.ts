import styled from 'styled-components'

export const Separator = styled.span``
export const CountDownContainer = styled.div`
  display: flex;
  gap: 16px;
  span {
    width: 128px;
    height: 198.02px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background-color: ${({ theme }) => theme['gray-700']};
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 700;
    font-size: 160px;
  }
  #separator {
    color: ${({ theme }) => theme['green-500']};
    background-color: transparent;
  }
`
