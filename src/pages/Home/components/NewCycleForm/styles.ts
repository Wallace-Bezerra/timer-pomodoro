import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  font-weight: 700;
  font-size: 18px;
  line-height: 160%;
  color: ${({ theme }) => theme['gray-100']};
  input {
    border: none;
    border-bottom: 2px solid #7c7c8a;
    background-color: transparent;
    box-shadow: none;
    transition: all 0.1s ease-in-out;
    &#task {
      max-width: 256px;
      width: 100%;
      height: 100%;
      &::-webkit-calendar-picker-indicator {
        display: none !important;
      }
    }
    &#minutesAmount {
      width: 72px;
      text-align: center;
      height: 100%;
    }
    ::placeholder {
      font-weight: 700;
      font-size: 18px;
      color: ${({ theme }) => theme['gray-500']};
    }
    :focus {
      border-bottom: 2px solid ${({ theme }) => theme['green-500']};
    }
    :disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }
  .wrapperMinutes {
    display: flex;
    align-items: center;
    position: relative;
    height: 100%;
    /* .minus {
      position: absolute;
      left: 0px;
      cursor: pointer;
    }
    .plus {
      position: absolute;
      right: 0px;
      cursor: pointer;
    } */
  }
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
export const ButtonSteper = styled.button`
  appearance: none;
  background: none;
  border: none;
  position: absolute;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  :focus {
    box-shadow: none;
  }
`
export const Minus = styled(ButtonSteper)`
  left: 0px;
`
export const Plus = styled(ButtonSteper)`
  right: 0px;
`
interface ButtonCycleProps {
  activeCycle: boolean
}
export const ButtonCycle = styled.button<ButtonCycleProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 40px;
  gap: 8px;
  background-color: ${({ theme, activeCycle }) =>
    activeCycle ? theme['green-500'] : theme['red-500']};
  color: ${({ theme }) => theme['gray-100']};
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.4s;
  :hover:not(:disabled) {
    background-color: ${({ theme, activeCycle }) =>
      activeCycle ? theme['green-700'] : theme['red-700']};
  }
  :disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
