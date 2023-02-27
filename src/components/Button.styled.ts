import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger'

interface ButtonContainerProps {
  variant: ButtonVariant
}

// const variantsColors = {
//   primary: "#40C351",
//   secondary: "#131212",
//   danger: "#EE49AC"
// }
export const ButtonContainer = styled.button<ButtonContainerProps>`
  padding: 12px 32px;
  background-color: red;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: ${({ theme }) => theme['gray-100']};
  background-color: ${({ theme }) => theme['green-500']};
`
