import { ButtonContainer, ButtonVariant } from './Button.styled'

interface ButtonProps {
  variant?: ButtonVariant
}
export const Button = ({ variant }: ButtonProps) => {
  return <ButtonContainer variant={variant!}>Enviar</ButtonContainer>
}
