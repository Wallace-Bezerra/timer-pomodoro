import styled from 'styled-components'

export const HomeContainer = styled.main`
  /* width: 656px; */
  width: 656px;
  height: 424px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-self: center;
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 40px;
    gap: 8px;
    background-color: ${({ theme }) => theme['green-500']};
    color: ${({ theme }) => theme['gray-100']};
    border-radius: 8px;
    border: none;
    cursor: pointer;
  }
`
export const FormContainer = styled.form`
  display: flex;
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
    &#task {
      max-width: 256px;
      width: 100%;
    }
    &#minutesAmount {
      width: 72px;
    }
    ::placeholder {
      font-weight: 700;
      font-size: 18px;
      color: ${({ theme }) => theme['gray-500']};
    }
  }
`

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
