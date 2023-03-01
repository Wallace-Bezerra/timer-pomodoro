import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: inherit;
  text-decoration: none;
  list-style: none;
}
:root{
  font-size: 62.5%
}
:focus{
  outline: 0;
  box-shadow: 0 0 0 0.2rem ${({ theme }) => theme['green-500']}
}
body,textarea,button,input{
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.8rem;
}

body{
  background-color:${({ theme }) => theme['gray-900']};
  color: ${({ theme }) => theme['gray-300']};
}
`
