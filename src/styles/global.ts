import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: inherit;
  text-decoration: none;
  list-style: none;
  -webkit-font-smoothing: antialiased;
}
:root{
  font-size: 62.5%
}
:focus{
  outline: 0;
}
body,textarea,button,input{
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.8rem;
}

body{
  background-color:${({ theme }) => theme['gray-900']};
  color: ${({ theme }) => theme['gray-300']};
  display: flex;
  justify-content:center;
  align-items: center;
  min-height: 100vh;
  #root{
    width: 1120px;
  }
}
`
