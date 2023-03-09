import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 108rem;
  width: 100%;
  /* min-height: calc(100vh - 60px); */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 6rem;
  padding-inline: 60px;
  /* padding-block: 80px; */
  padding-block: 5rem;
  background: ${({ theme }) => theme['gray-800']};
  border-radius: 8px;
  margin: 0 auto;
`
