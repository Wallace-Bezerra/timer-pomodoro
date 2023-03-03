import styled from 'styled-components'

export const HistoryContainer = styled.div`
  max-width: 931px;
  width: 100%;
  flex: 1;
  /* overflow: auto; */
  margin: 0 auto;
  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 160%;
    margin-bottom: 32px;
    color: ${({ theme }) => theme['gray-100']};
  }
`
export const TableContainer = styled.div`
  table {
    /* max-width: 931px; */
    width: 100%;
    min-width: 600px;
    border-collapse: collapse;
    th {
      text-align: left;
      padding: 16px 24px;
      font-weight: 700;
      font-size: 14px;
      line-height: 160%;
      color: ${({ theme }) => theme['gray-100']};
      background-color: ${({ theme }) => theme['gray-600']};
      :first-child {
        border-top-left-radius: 8px;
      }
      :last-child {
        border-top-right-radius: 8px;
      }
    }
    td {
      padding: 16px 24px;
      font-weight: 400;
      font-size: 14px;
      line-height: 160%;
      color: ${({ theme }) => theme['gray-300']};
      background-color: ${({ theme }) => theme['gray-700']};
      border-top: solid 3px ${({ theme }) => theme['gray-800']};
      :first-child {
        width: 50%;
      }
    }
  }
`
const StatusColor = {
  yellow: 'yellow-500',
  red: 'red-500',
  green: 'green-500',
} as const

interface StatusColorProps {
  statusColor: keyof typeof StatusColor
}

export const StatusTask = styled.span<StatusColorProps>`
  display: inline-flex;
  align-items: center;
  ::before {
    content: '';
    width: 8px;
    height: 8px;
    display: inline-block;
    margin-right: 8px;
    border-radius: 50%;
    background-color: ${({ theme, statusColor }) =>
      theme[StatusColor[statusColor]]};
  }
`
