import styled from 'styled-components'

export const HistoryContainer = styled.div`
  max-width: 112rem;
  width: 100%;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
    h1 {
      font-weight: 700;
      font-size: 24px;
      line-height: 160%;
      color: ${({ theme }) => theme['gray-100']};
    }
    button {
      padding: 8px 16px;
      border-radius: 6px;
      border: none;
      cursor: pointer;
      background-color: ${({ theme }) => theme['gray-600']};
      transition: 0.3s;
      :hover {
        opacity: 0.8;
      }
    }
  }
`
export const TableContainer = styled.div`
  table {
    width: 100%;
    min-width: 600px;
    border-collapse: collapse;
    thead {
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
    }
    tbody {
      height: 300px;
      width: 100%;
      overflow: overlay;
      display: block;
      ::-webkit-scrollbar {
        width: 8px;
      }
      ::-webkit-scrollbar-track {
        background: transparent;
      }
      ::-webkit-scrollbar-thumb {
        background: #505059;
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: rgba(80, 80, 89, 0.63);
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
    }
    tr {
      display: grid;
      grid-template-columns: 1.6fr 1fr 1fr 1fr;
    }
  }
`
const StatusColor = {
  yellow: 'yellow-500',
  red: 'red-500',
  green: 'green-500',
} as const

export interface StatusColorProps {
  statusColor: keyof typeof StatusColor
}

export const StatusTask = styled.span<StatusColorProps>`
  display: inline-flex;
  align-items: baseline;
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
